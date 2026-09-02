export type DownloadCategoryId =
  | "marca"
  | "cnpj"
  | "pdfs"
  | "editaveis"
  | "kvs"
  | "links"
  | "posts"
  | "videos";

export type DownloadFile = {
  category: DownloadCategoryId;
  name: string;
  type: string;
  href: string;
  preview?: string;
};

export const DOWNLOAD_CATEGORIES: { id: DownloadCategoryId; label: string }[] = [
  { id: "marca", label: "Marca" },
  { id: "cnpj", label: "CNPJ" },
  { id: "pdfs", label: "PDFs" },
  { id: "editaveis", label: "Editáveis" },
  { id: "kvs", label: "KVs" },
  { id: "links", label: "Links" },
  { id: "posts", label: "Posts" },
  { id: "videos", label: "Vídeos" },
];

const TYPE_BY_EXT: Record<string, string> = {
  pdf: "PDF",
  png: "PNG",
  jpg: "JPG",
  jpeg: "JPG",
  mp4: "MP4",
  ai: "AI",
  eps: "EPS",
  psd: "PSD",
  psb: "PSB",
};

function stemOf(name: string): string {
  return name.replace(/\.[^.]+$/, "");
}

function file(category: DownloadCategoryId, name: string): DownloadFile {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return {
    category,
    name,
    type: TYPE_BY_EXT[ext] ?? ext.toUpperCase(),
    href: `/downloads/${category}/${encodeURIComponent(name)}`,
  };
}

const RAW_FILES: DownloadFile[] = [
  file("marca", "marca-padre-kelmon-1.ai"),
  file("marca", "marca-padre-kelmon-1.eps"),
  file("marca", "marca-padre-kelmon-1.pdf"),
  file("marca", "marca-padre-kelmon-1.png"),
  file("marca", "marca-padre-kelmon-2.ai"),
  file("marca", "marca-padre-kelmon-2.eps"),
  file("marca", "marca-padre-kelmon-2.pdf"),
  file("marca", "marca-padre-kelmon-2.png"),

  file("cnpj", "Cnpj-Campanha-1080x1350.png"),
  file("cnpj", "Cnpj-Campanha-1080x1920.png"),
  file("cnpj", "Cnpj-Campanha-1920x1080.png"),
  file("cnpj", "Cnpj-Campanha-1920x1080-branco.png"),

  file("pdfs", "Avatar PADRE KELMON.png"),
  file("pdfs", "Card PADRE KELMON.png"),
  file("pdfs", "PADRE KELMON ADESIVO DE PARACHOQUE 250X100.pdf"),
  file("pdfs", "PADRE KELMON BANDEIRA 1400X1000.pdf"),
  file("pdfs", "PADRE KELMON C BOLSONARO CARTÃO COLA 90X50.pdf"),
  file("pdfs", "PADRE KELMON CARTÃO COLA 90X50.pdf"),
  file("pdfs", "PADRE KELMON MOLDURA REDES SOCIAIS.png"),
  file("pdfs", "PADRE KELMON PERFURADO 650X350.pdf"),
  file("pdfs", "PADRE KELMON PRAGUINHA 70MM.pdf"),
  file("pdfs", "PADRE KELMON PRAGUINHAS V2 70MM.pdf"),
  file("pdfs", "PADRE KELMON PRAGUINHAS V3 70MM.pdf"),
  file("pdfs", "PADRE KELMON REDES SOCIAIS 1080x1920_atualizado.pdf"),
  file("pdfs", "PADRE KELMON WINDBANNER 637x2000.pdf"),
  file("pdfs", "PADRE KELON  REDES SOCIAIS_1080X1920_COM FUNDO.png"),

  file("editaveis", "PADRE KELMON ADESIVO DE PARACHOQUE 250X100.ai"),
  file("editaveis", "PADRE KELMON BANDEIRA 1400X1000.ai"),
  file("editaveis", "PADRE KELMON C BOLSONARO CARTÃO COLA 90X50.ai"),
  file("editaveis", "PADRE KELMON CARTÃO COLA 90X50.ai"),
  file("editaveis", "PADRE KELMON ENXOVAL REDES SOCIAIS.psd"),
  file("editaveis", "PADRE KELMON PERFURADO 650X350.ai"),
  file("editaveis", "PADRE KELMON PRAGUINHA 70MM.ai"),
  file("editaveis", "PADRE KELMON PRAGUINHAS V2 70MM.ai"),
  file("editaveis", "PADRE KELMON PRAGUINHAS V3 70MM.ai"),
  file("editaveis", "PADRE KELMON REDES SOCIAIS 1080x1920_atualizado.psd"),
  file("editaveis", "PADRE KELMON WINDBANNER 637x2000.ai"),

  file("kvs", "kv-kelmon-2.psd"),
  file("kvs", "kv-kelmon.psd"),
  file("kvs", "padre-kelmon.ai"),
  file("kvs", "padre-kelmon.pdf"),

  file("links", "CHAPA 2.psb"),
  file("links", "CHAPA.psb"),
  file("links", "Foto c bolsonaro 1.png"),
  file("links", "Foto c bolsonaro 2.png"),
  file("links", "Foto c bolsonaro 3.psb"),
  file("links", "PADRE KELMON.psb"),

  file("posts", "Post Carrossel Padre Kelmon 01.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 012.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 013.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 014.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 015.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 016.jpg"),
  file("posts", "Post Carrossel Padre Kelmon 017.jpg"),

  file("videos", "02 corte 2 Padre Kelmon legendado.mp4"),
  file("videos", "C0004-002.mp4"),
  file("videos", "C0005.mp4"),
  file("videos", "C0310-002.mp4"),
  file("videos", "C0311.mp4"),
  file("videos", "kelmon v2.mp4"),
];

export const DOWNLOAD_FILES: DownloadFile[] = RAW_FILES.map((item) => ({
  ...item,
  preview: `/downloads/previews/${encodeURIComponent(stemOf(item.name))}.jpg`,
}));

export function displayName(file: DownloadFile): string {
  return stemOf(file.name);
}
