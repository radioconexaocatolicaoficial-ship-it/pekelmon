import { createServerFn } from "@tanstack/react-start";
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"]);

export const TIMELINE_FOLDERS = [
  "minhas-raizes",
  "na-juventude",
  "seminario",
  "ordenacao-diaconal",
  "associacao",
  "movimento-cristao-conservador",
  "candidatura-presidencial",
  "foro-do-brasil-e-livro",
  "tv-e-deputado-federal",
] as const;

/** Pastas antigas → pasta atual (compatibilidade). */
const FOLDER_ALIASES: Record<string, string[]> = {
  "ordenacao-diaconal": ["ordenacao-diaconal", "ordenacao-sacerdotal"],
  associacao: ["associacao", "ativismo-e-missoes"],
};

export type TimelineFolderId = (typeof TIMELINE_FOLDERS)[number];

export type TimelinePhotoFile = {
  src: string;
  name: string;
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

async function listImageFiles(dir: string): Promise<string[]> {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries.filter((e) => e.isFile() && isImageFile(e.name)).map((e) => e.name);
  } catch {
    return [];
  }
}

/** Copia fotos de src/assets/timeline para public/timeline (onde o site serve). */
async function syncFolderFromAssets(folder: string): Promise<void> {
  const aliases = FOLDER_ALIASES[folder] ?? [folder];
  const destDir = path.join(publicTimelineRoot(), folder);
  await mkdir(destDir, { recursive: true });

  for (const alias of aliases) {
    const srcDir = path.join(assetsTimelineRoot(), alias);
    const names = await listImageFiles(srcDir);
    for (const name of names) {
      const from = path.join(srcDir, name);
      const to = path.join(destDir, name);
      try {
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

async function listFolderPhotos(folder: string): Promise<TimelinePhotoFile[]> {
  await syncFolderFromAssets(folder);

  const dir = path.join(publicTimelineRoot(), folder);
  try {
    const names = await listImageFiles(dir);
    const withMtime = await Promise.all(
      names.map(async (name) => {
        const full = path.join(dir, name);
        const info = await stat(full);
        return { name, mtime: info.mtimeMs };
      }),
    );

    withMtime.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true }),
    );

    return withMtime.map((f) => ({
      name: f.name,
      src: `/timeline/${folder}/${encodeURIComponent(f.name)}?v=${Math.floor(f.mtime)}`,
    }));
  } catch {
    return [];
  }
}

/** Lê as pastas a cada chamada — novas imagens aparecem sem rebuild. */
export const getTimelinePhotos = createServerFn({ method: "GET" }).handler(
  async (): Promise<TimelinePhotosResult> => {
    const byFolder: Record<string, TimelinePhotoFile[]> = {};
    await Promise.all(
      TIMELINE_FOLDERS.map(async (folder) => {
        byFolder[folder] = await listFolderPhotos(folder);
      }),
    );
    return { byFolder, updatedAt: new Date().toISOString() };
  },
);
