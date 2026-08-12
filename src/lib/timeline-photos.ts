import { createServerFn } from "@tanstack/react-start";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"]);

export const TIMELINE_FOLDERS = [
  "minhas-raizes",
  "na-juventude",
  "seminario",
  "ordenacao-sacerdotal",
  "ativismo-e-missoes",
  "movimento-cristao-conservador",
  "candidatura-presidencial",
  "foro-do-brasil-e-livro",
  "tv-e-deputado-federal",
] as const;

export type TimelineFolderId = (typeof TIMELINE_FOLDERS)[number];

export type TimelinePhotoFile = {
  src: string;
  name: string;
};

export type TimelinePhotosResult = {
  byFolder: Record<string, TimelinePhotoFile[]>;
  updatedAt: string;
};

function timelineRoot(): string {
  return path.join(process.cwd(), "public", "timeline");
}

async function listFolderPhotos(folder: string): Promise<TimelinePhotoFile[]> {
  const dir = path.join(timelineRoot(), folder);
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = entries.filter(
      (e) => e.isFile() && IMAGE_EXT.has(path.extname(e.name).toLowerCase()),
    );

    const withMtime = await Promise.all(
      files.map(async (f) => {
        const full = path.join(dir, f.name);
        const info = await stat(full);
        return { name: f.name, mtime: info.mtimeMs };
      }),
    );

    withMtime.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true }),
    );

    return withMtime.map((f) => ({
      name: f.name,
      // cache-bust quando o arquivo muda
      src: `/timeline/${folder}/${encodeURIComponent(f.name)}?v=${Math.floor(f.mtime)}`,
    }));
  } catch {
    return [];
  }
}

/** Lê public/timeline/* a cada chamada — novas imagens aparecem sem rebuild. */
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
