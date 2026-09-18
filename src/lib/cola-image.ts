import colaOficial from "@/assets/colinha-oficial.jpg";
import type { Candidate } from "@/data/cola-candidates";
import type { ColaSelection } from "./cola-store";

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
  _selection: ColaSelection,
  _byId: Record<string, Candidate>,
) {
  const img = await loadImage(colaOficial);
  if (!img) throw new Error("Não foi possível gerar a imagem");

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas indisponível");
  ctx.drawImage(img, 0, 0);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Não foi possível gerar a imagem"));
    }, "image/png");
  });
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
