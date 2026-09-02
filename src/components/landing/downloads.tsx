import { Download, FileText, Film, ImageIcon, ShieldCheck } from "lucide-react";

import {
  DOWNLOAD_CATEGORIES,
  DOWNLOAD_FILES,
  displayName,
  type DownloadCategoryId,
  type DownloadFile,
} from "@/data/download-files";
import { CANDIDATE } from "@/lib/campaign-data";
import { PageShell, Reveal } from "./primitives";

const TYPE_STYLE: Record<string, { bg: string; color: string }> = {
  PDF: { bg: "var(--blue-primary)", color: "white" },
  PNG: { bg: "#009B3A", color: "white" },
  JPG: { bg: "#009B3A", color: "white" },
  MP4: { bg: "var(--yellow-primary)", color: "var(--blue-primary)" },
  AI: { bg: "var(--blue-primary)", color: "white" },
  EPS: { bg: "var(--blue-primary)", color: "white" },
  PSD: { bg: "var(--blue-dark)", color: "white" },
  PSB: { bg: "var(--blue-dark)", color: "white" },
};

function FileCard({ file, delay }: { file: DownloadFile; delay: number }) {
  const style = TYPE_STYLE[file.type] ?? {
    bg: "var(--blue-primary)",
    color: "white",
  };
  const title = displayName(file);

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={file.href}
        download={file.name}
        className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-primary)] focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
          {file.preview ? (
            <img
              src={file.preview}
              alt={`Prévia de ${title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--blue-primary)]">
              {file.type === "MP4" ? (
                <Film className="size-12 stroke-[1.75]" aria-hidden="true" />
              ) : file.type === "PDF" ? (
                <FileText className="size-12 stroke-[1.75]" aria-hidden="true" />
              ) : (
                <ImageIcon className="size-12 stroke-[1.75]" aria-hidden="true" />
              )}
              <span className="text-xs font-bold uppercase tracking-wide">{file.type}</span>
            </div>
          )}
          <span
            className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-xl shadow-md transition-transform group-hover:scale-110"
            style={{ backgroundColor: "var(--yellow-primary)", color: "var(--blue-primary)" }}
            aria-hidden="true"
          >
            <Download className="size-4 stroke-[2.5]" />
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:p-5">
          <h3
            className="text-[0.95rem] font-black leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            {title}
          </h3>
          <span
            className="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {file.type}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function CategorySection({
  id,
  label,
  files,
}: {
  id: DownloadCategoryId;
  label: string;
  files: DownloadFile[];
}) {
  if (files.length === 0) return null;

  return (
    <div id={id} className="scroll-mt-28">
      <h2
        className="mb-4 text-xl font-black tracking-wide sm:text-2xl"
        style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
      >
        {label}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file, i) => (
          <FileCard key={file.href} file={file} delay={0.03 * i} />
        ))}
      </div>
    </div>
  );
}

export function Downloads({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  const Heading = headingAs;

  return (
    <section id="downloads" className="section-pad bg-card/30">
      <PageShell>
        <Reveal>
          <Heading
            className="text-[1.75rem] font-semibold leading-tight sm:text-3xl lg:text-[1.85rem]"
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            Downloads
          </Heading>
          <p className="mt-1.5 max-w-2xl text-sm leading-snug text-muted-foreground text-justify">
            Materiais oficiais da campanha Padre Kelmon 2202. Clique no card para baixar o
            arquivo.
          </p>
          <div className="gold-rule mt-4 sm:mt-5" />
        </Reveal>

        <Reveal delay={0.08}>
          <aside
            className="mt-6 rounded-2xl border-2 p-4 shadow-lg sm:p-5"
            style={{
              borderColor: "var(--yellow-primary)",
              background:
                "linear-gradient(180deg, oklch(0.97 0.04 95 / 0.55) 0%, white 55%)",
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--blue-primary)" }}
              >
                <ShieldCheck className="size-5 stroke-[2.5] text-white" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p
                  className="text-sm font-black uppercase tracking-wide sm:text-base"
                  style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                >
                  Identificação obrigatória
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground text-justify">
                  Todo material utilizado da campanha do Padre Kelmon deve conter a coligação e o
                  CNPJ. Use os arquivos da seção{" "}
                  <a
                    href="#cnpj"
                    className="font-bold underline decoration-2 underline-offset-2"
                    style={{ color: "var(--blue-primary)" }}
                  >
                    CNPJ
                  </a>{" "}
                  ou inclua o texto abaixo em artes, vídeos, impressos e publicações:
                </p>
                <div
                  className="mt-3 rounded-xl border border-blue-100 bg-white px-3 py-3 text-xs leading-relaxed font-semibold sm:text-sm"
                  style={{ color: "var(--blue-primary)" }}
                >
                  <p>
                    ELEICAO 2026 KELMON LUIS DA SILVA SOUZA DEPUTADO FEDERAL · CNPJ{" "}
                    {CANDIDATE.cnpj}
                  </p>
                  <p className="mt-2">
                    COLIGAÇÃO CORAGEM PARA SEGUIR AVANÇANDO (Republicanos + MDB + PL + Federação
                    União Progressista (União Brasil / Progressistas) + PSD + Federação Renovação
                    Solidária (Solidariedade / PRD) + Democrata + Avante)
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>

        <nav
          aria-label="Categorias de arquivos"
          className="mt-6 flex flex-wrap gap-2"
        >
          {DOWNLOAD_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex items-center rounded-full border-2 border-gray-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--blue-primary)] transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              {category.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-12">
          {DOWNLOAD_CATEGORIES.map((category) => (
            <CategorySection
              key={category.id}
              id={category.id}
              label={category.label}
              files={DOWNLOAD_FILES.filter((f) => f.category === category.id)}
            />
          ))}
        </div>
      </PageShell>
    </section>
  );
}
