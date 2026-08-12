import { createServerFn } from "@tanstack/react-start";
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);
const MEDIA_EXT = new Set([...IMAGE_EXT, ...VIDEO_EXT]);

export const TIMELINE_FOLDERS = [
  "minhas-raizes",
  "na-juventude",
  "seminario",
  "ordenacao-diaconal",
  "associacao",
  "seminario-santana-dos-melquitas",
  "ordenacao-ortodoxa",
  "missao-ortodoxa-em-serrolandia",
  "pastoral-com-venezuelanos",
  "livro-fe-e-politica",
  "ilha-de-mare",
  "atividades-politicas",
] as const;

/** Pastas antigas → pasta atual (compatibilidade). */
const FOLDER_ALIASES: Record<string, string[]> = {
  "ordenacao-diaconal": ["ordenacao-diaconal", "ordenacao-sacerdotal"],
  associacao: ["associacao", "ativismo-e-missoes"],
};

export type TimelineFolderId = (typeof TIMELINE_FOLDERS)[number];

export type TimelineMediaKind = "image" | "video";

export type TimelinePhotoFile = {
  src: string;
  name: string;
  kind: TimelineMediaKind;
};

export type TimelinePhotosResult = {
  byFolder: Record<string, TimelinePhotoFile[]>;
  updatedAt: string;
};

function publicTimelineRoot(): string {
  return path.join(process.cwd(), "public", "timeline");
}

function assetsTimelineRoot(): string {
  return path.join(process.cwd(), "src", "assets", "timeline");
}

function isImageFile(name: string): boolean {
  return IMAGE_EXT.has(path.extname(name).toLowerCase());
}

function isVideoFile(name: string): boolean {
  return VIDEO_EXT.has(path.extname(name).toLowerCase());
}

function isMediaFile(name: string): boolean {
  return MEDIA_EXT.has(path.extname(name).toLowerCase());
}

function mediaKind(name: string): TimelineMediaKind {
  return isVideoFile(name) ? "video" : "image";
}

async function listImageFiles(dir: string): Promise<string[]> {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && isImageFile(e.name) && !e.name.startsWith("."))
      .map((e) => e.name);
  } catch {
    return [];
  }
}

async function listMediaFiles(dir: string): Promise<string[]> {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && isMediaFile(e.name) && !e.name.startsWith("."))
      .map((e) => e.name);
  } catch {
    return [];
  }
}

function stemOf(name: string): string {
  return path.parse(name).name;
}

/** Já existe a versão .webp processada deste arquivo? */
async function hasFittedWebp(destDir: string, name: string): Promise<boolean> {
  const stem = stemOf(name);
  const webp = path.join(destDir, `${stem}.webp`);
  try {
    await stat(webp);
    return true;
  } catch {
    return false;
  }
}

/** Copia mídia de src/assets/timeline para public/timeline (onde o site serve). */
async function syncFolderFromAssets(folder: string): Promise<void> {
  const aliases = FOLDER_ALIASES[folder] ?? [folder];
  const destDir = path.join(publicTimelineRoot(), folder);
  await mkdir(destDir, { recursive: true });

  for (const alias of aliases) {
    const srcDir = path.join(assetsTimelineRoot(), alias);
    const names = await listMediaFiles(srcDir);
    for (const name of names) {
      const from = path.join(srcDir, name);
      const to = path.join(destDir, name);
      const ext = path.extname(name).toLowerCase();
      try {
        // Não re-copia JPEG/PNG se o .webp já foi gerado (evita loop de duplicatas)
        if (isImageFile(name) && ext !== ".webp" && (await hasFittedWebp(destDir, name))) {
          continue;
        }
        const [srcStat, destStat] = await Promise.all([
          stat(from),
          stat(to).catch(() => null),
        ]);
        if (!destStat || srcStat.mtimeMs > destStat.mtimeMs) {
          await copyFile(from, to);
        }
      } catch {
        // ignore individual file errors
      }
    }
  }
}

let fitRunning: Promise<void> | null = null;
let lastFitAt = 0;

async function folderHasRawImages(): Promise<boolean> {
  const root = publicTimelineRoot();
  try {
    const folders = await readdir(root, { withFileTypes: true });
    for (const entry of folders) {
      if (!entry.isDirectory()) continue;
      const names = await listImageFiles(path.join(root, entry.name));
      if (names.some((n) => path.extname(n).toLowerCase() !== ".webp")) {
        return true;
      }
    }
  } catch {
    // ignore
  }
  return false;
}

/** Ajusta automaticamente novas imagens (700x500, sem barras pretas, prioriza rostos). */
function autoFitTimelineImages(): Promise<void> {
  if (fitRunning) return fitRunning;
  // Evita relançar o Python a cada refetch (travava o site)
  if (Date.now() - lastFitAt < 60_000) return Promise.resolve();

  fitRunning = (async () => {
    try {
      if (!(await folderHasRawImages())) {
        lastFitAt = Date.now();
        return;
      }
      await new Promise<void>((resolve) => {
        const script = path.join(process.cwd(), "scripts", "auto-fit-timeline-images.py");
        const child = spawn("python", [script], {
          cwd: process.cwd(),
          windowsHide: true,
          stdio: ["ignore", "pipe", "pipe"],
        });
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          resolve();
        };
        child.on("error", finish);
        child.on("close", finish);
        setTimeout(finish, 45_000);
      });
    } finally {
      lastFitAt = Date.now();
      fitRunning = null;
    }
  })();

  return fitRunning;
}

async function listFolderPhotos(folder: string): Promise<TimelinePhotoFile[]> {
  const dir = path.join(publicTimelineRoot(), folder);
  try {
    const names = (await listMediaFiles(dir)).filter((name) => {
      const ext = path.extname(name).toLowerCase();
      // imagens: só .webp processado; vídeos: mp4/webm/mov
      return ext === ".webp" || isVideoFile(name);
    });
    const withMtime = await Promise.all(
      names.map(async (name) => {
        const full = path.join(dir, name);
        const info = await stat(full);
        return { name, mtime: info.mtimeMs, kind: mediaKind(name) };
      }),
    );

    // Fotos primeiro, depois vídeos; ordem alfabética/numérica dentro de cada grupo
    withMtime.sort((a, b) => {
      if (a.kind !== b.kind) return a.kind === "image" ? -1 : 1;
      return a.name.localeCompare(b.name, undefined, { numeric: true });
    });

    return withMtime.map((f) => ({
      name: f.name,
      kind: f.kind,
      src: `/timeline/${folder}/${encodeURIComponent(f.name)}?v=${Math.floor(f.mtime)}`,
    }));
  } catch {
    return [];
  }
}

/** Lê as pastas a cada chamada — novas imagens são ajustadas e aparecem sozinhas. */
export const getTimelinePhotos = createServerFn({ method: "GET" }).handler(
  async (): Promise<TimelinePhotosResult> => {
    // 1) sincroniza assets → public
    await Promise.all(TIMELINE_FOLDERS.map((folder) => syncFolderFromAssets(folder)));
    // 2) lista na hora (não espera o Python — senão o site fica em branco)
    const byFolder: Record<string, TimelinePhotoFile[]> = {};
    await Promise.all(
      TIMELINE_FOLDERS.map(async (folder) => {
        byFolder[folder] = await listFolderPhotos(folder);
      }),
    );
    // 3) auto-ajusta em segundo plano
    void autoFitTimelineImages();
    return { byFolder, updatedAt: new Date().toISOString() };
  },
);
