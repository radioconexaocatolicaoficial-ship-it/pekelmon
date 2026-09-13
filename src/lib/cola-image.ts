import { POSITIONS, type Candidate, type PositionKey } from "@/data/cola-candidates";
import type { ColaSelection } from "./cola-store";

const W = 1080;
const H = 1920;

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function generateColaImage(
  selection: ColaSelection,
  byId: Record<string, Candidate>,
) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas indisponível");

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#0B1F3A");
  bg.addColorStop(1, "#1264E5");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "700 42px Inter, Arial, sans-serif";
  ctx.fillText("MINHA COLA", 80, 120);
  ctx.fillStyle = "#8CBCFF";
  ctx.font = "800 86px Inter, Arial, sans-serif";
  ctx.fillText("2026", 80, 210);

  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.font = "400 28px Inter, Arial, sans-serif";
  ctx.fillText("Confira suas escolhas. Elas são só suas.", 80, 270);

  const startY = 330;
  const gap = 22;
  const cardH = 210;

  POSITIONS.forEach((position, index) => {
    const y = startY + index * (cardH + gap);
    roundRect(ctx, 70, y, W - 140, cardH, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    ctx.fillStyle = "#1264E5";
    ctx.font = "700 22px Inter, Arial, sans-serif";
    ctx.fillText(position.label.toUpperCase(), 110, y + 52);

    const candidate = selection[position.key as PositionKey]
      ? byId[selection[position.key as PositionKey] as string]
      : null;

    if (candidate) {
      ctx.fillStyle = "#0B1F3A";
      ctx.font = "800 64px Inter, Arial, sans-serif";
      ctx.fillText(candidate.number, 110, y + 128);
      ctx.fillStyle = "#0B1F3A";
      ctx.font = "600 34px Inter, Arial, sans-serif";
      ctx.fillText(candidate.ballotName, 110, y + 176);
    } else {
      ctx.fillStyle = "#667085";
      ctx.font = "600 36px Inter, Arial, sans-serif";
      ctx.fillText("Não escolhido", 110, y + 130);
    }
  });

  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.font = "400 22px Inter, Arial, sans-serif";
  ctx.fillText("Material pessoal para consulta do eleitor.", 80, H - 70);
  ctx.fillText("O sistema não recomenda candidatos.", 80, H - 38);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Não foi possível gerar a imagem"));
    }, "image/png");
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function downloadColaImage(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "minha-cola-eleicoes-2026.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export async function shareColaImage(blob: Blob) {
  const file = new File([blob], "minha-cola-eleicoes-2026.png", { type: "image/png" });
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: "Minha Cola 2026",
      text: "Minha cola eleitoral pessoal.",
      files: [file],
    });
    return true;
  }
  await downloadColaImage(blob);
  return false;
}

export { loadImage };
