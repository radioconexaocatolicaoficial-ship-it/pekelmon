# -*- coding: utf-8 -*-
"""
Ajusta automaticamente fotos das pastas public/timeline/<card>/
- Remove barras pretas / UI de print
- Encaixa em 700x500 priorizando rostos (topo)
- Converte para .webp
Rode: python scripts/auto-fit-timeline-images.py [pasta-opcional]
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
TIMELINE = ROOT / "public" / "timeline"
TARGET = (700, 500)
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}
STATE_NAME = ".fit-state.json"


def trim_edge_bars(im: Image.Image) -> tuple[Image.Image, bool]:
    rgb = im.convert("RGB")
    arr = np.asarray(rgb, dtype=np.float32)
    lum = arr.mean(axis=2)
    h, w = lum.shape
    is_bar_row = ((lum < 30).mean(axis=1) > 0.92) & (lum.std(axis=1) < 22)
    is_bar_col = ((lum < 30).mean(axis=0) > 0.92) & (lum.std(axis=0) < 22)
    had_letterbox = float(is_bar_row.mean()) > 0.12
    top = 0
    while top < h and is_bar_row[top]:
        top += 1
    bot = h - 1
    while bot > top and is_bar_row[bot]:
        bot -= 1
    left = 0
    while left < w and is_bar_col[left]:
        left += 1
    right = w - 1
    while right > left and is_bar_col[right]:
        right -= 1
    if bot - top >= h * 0.2 and right - left >= w * 0.2:
        rgb = rgb.crop((left, top, right + 1, bot + 1))
    w, h = rgb.size
    if had_letterbox and h > w * 1.35 and h >= 700:
        rgb = rgb.crop((0, int(h * 0.05), w, int(h * 0.82)))
        w, h = rgb.size
        arr = np.asarray(rgb, dtype=np.float32)
        lum = arr.mean(axis=2)
        is_bar_row = ((lum < 30).mean(axis=1) > 0.92) & (lum.std(axis=1) < 22)
        top = 0
        while top < h and is_bar_row[top]:
            top += 1
        bot = h - 1
        while bot > top and is_bar_row[bot]:
            bot -= 1
        if bot - top >= h * 0.35:
            rgb = rgb.crop((0, top, w, bot + 1))
    return rgb, had_letterbox


def cover_700x500_keep_heads(photo: Image.Image) -> Image.Image:
    a = np.asarray(photo.convert("RGB"), dtype=np.float32)
    near_bg = (a[:, :, 0] > 236) & (a[:, :, 1] > 236) & (a[:, :, 2] > 234)
    near_black = (a[:, :, 0] < 18) & (a[:, :, 1] < 18) & (a[:, :, 2] < 18)
    content = ~(near_bg | near_black)
    rows = content.mean(1) > 0.04
    cols = content.mean(0) > 0.04
    if rows.any() and cols.any():
        ys = np.where(rows)[0]
        xs = np.where(cols)[0]
        photo = photo.crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))

    tw, th = TARGET
    w, h = photo.size
    target_ratio = tw / th
    src_ratio = w / max(h, 1)
    if src_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = max(0, (w - new_w) // 2)
        photo = photo.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        max_top = max(0, h - new_h)
        top = int(max_top * 0.08)
        photo = photo.crop((0, top, w, top + new_h))
    out = photo.resize(TARGET, Image.Resampling.LANCZOS)
    out = ImageEnhance.Contrast(out).enhance(1.03)
    out = ImageEnhance.Sharpness(out).enhance(1.08)
    return out


def load_state(folder: Path) -> dict:
    path = folder / STATE_NAME
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {}


def save_state(folder: Path, state: dict) -> None:
    (folder / STATE_NAME).write_text(
        json.dumps(state, ensure_ascii=False, indent=0),
        encoding="utf-8",
    )


def process_file(path: Path, out_name: str | None = None) -> Path | None:
    try:
        photo, _ = trim_edge_bars(Image.open(path))
        fitted = cover_700x500_keep_heads(photo)
        dest = path.with_name(out_name) if out_name else path.with_suffix(".webp")
        if dest.suffix.lower() != ".webp":
            dest = dest.with_suffix(".webp")
        fitted.save(dest, "WEBP", quality=92, method=6)
        if dest.resolve() != path.resolve() and path.exists():
            path.unlink(missing_ok=True)
        return dest
    except Exception as e:
        print(f"ERR {path.name}: {e}", file=sys.stderr)
        return None


def process_folder(folder: Path) -> int:
    if not folder.is_dir():
        return 0
    state = load_state(folder)
    files = [
        p
        for p in folder.iterdir()
        if p.is_file() and p.suffix.lower() in IMAGE_EXT and not p.name.startswith(".")
    ]
    files.sort(key=lambda p: p.name.lower())
    changed = 0
    new_state: dict = {}

    for path in files:
        try:
            mtime = str(path.stat().st_mtime_ns)
        except FileNotFoundError:
            continue

        key = path.name
        # já processado e ainda 700x500?
        if state.get(key) == mtime and path.suffix.lower() == ".webp":
            try:
                with Image.open(path) as im:
                    if im.size == TARGET:
                        new_state[key] = mtime
                        continue
            except Exception:
                pass

        if path.suffix.lower() in {".jpg", ".jpeg", ".png", ".gif", ".avif"}:
            safe = "".join(ch if ch.isalnum() or ch in "-_" else "-" for ch in path.stem)[:48].strip("-")
            out_name = f"{safe or folder.name}.webp"
            dest_path = folder / out_name
            # evita sobrescrever outro arquivo diferente
            n = 2
            while dest_path.exists() and dest_path.resolve() != path.resolve():
                out_name = f"{safe}-{n}.webp"
                dest_path = folder / out_name
                n += 1
            dest = process_file(path, out_name=out_name)
        else:
            need = True
            try:
                with Image.open(path) as im:
                    if im.size == TARGET and state.get(key) == mtime:
                        need = False
            except Exception:
                need = True
            if not need:
                new_state[key] = mtime
                continue
            dest = process_file(path)
        if dest and dest.exists():
            changed += 1
            new_state[dest.name] = str(dest.stat().st_mtime_ns)

    save_state(folder, new_state)
    return changed


def main() -> None:
    if len(sys.argv) > 1:
        folders = [Path(sys.argv[1])]
    else:
        folders = [p for p in TIMELINE.iterdir() if p.is_dir()]

    total = 0
    for folder in folders:
        n = process_folder(folder)
        if n:
            print(f"{folder.name}: {n} ajustada(s)")
            total += n
    print(f"done total={total}")


if __name__ == "__main__":
    main()
