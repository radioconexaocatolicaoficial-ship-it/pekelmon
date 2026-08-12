import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export type TimelinePhoto = {
  src: string;
  alt: string;
};

export type TimelineCardItem = {
  year: string;
  title: string;
  description: string;
  /** Pasta em src/assets/timeline/{folder}/ */
  folder: string;
  photos: TimelinePhoto[];
};

/**
 * Lê automaticamente todas as imagens da pasta do card.
 * Coloque fotos em: src/assets/timeline/<nome-da-pasta>/
 * Formatos: jpg, jpeg, png, webp
 */
function loadFolderPhotos(folder: string, altPrefix: string): TimelinePhoto[] {
  // Vite exige glob estático — carrega todas as pastas e filtra pela pasta do card
  const modules = import.meta.glob<string>(
    "../../assets/timeline/*/*.{webp,jpg,jpeg,png,gif,avif,WEBP,JPG,JPEG,PNG}",
    { eager: true, import: "default" },
  );

  return Object.entries(modules)
    .filter(([path]) => path.replace(/\\/g, "/").includes(`/timeline/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src], i) => ({
      src,
      alt: `${altPrefix} — foto ${i + 1}`,
    }));
}

export const TIMELINE_CARDS: TimelineCardItem[] = [
  {
    year: "1976-1995",
    title: "Minhas Raízes",
    description:
      "Nascimento em Salvador (21/10/1976). Batismo, Eucaristia e Crisma. Formação católica e primeiros passos na fé.",
    folder: "minhas-raizes",
    photos: loadFolderPhotos("minhas-raizes", "Minhas Raízes"),
  },
  {
    year: "Juventude",
    title: "Na juventude",
    description:
      "Quando jovem, fundei o movimento JUSPE — Jovens Unidos Semeando Paz e Esperança.",
    folder: "na-juventude",
    photos: loadFolderPhotos("na-juventude", "Na juventude"),
  },
  {
    year: "1996-2003",
    title: "Seminário dos Legionários de Cristo. Mater Ecclesiae",
    description:
      "Formação no Seminário Maria Mater Ecclesiae, dos Legionários de Cristo, em São Paulo — Filosofia, Teologia e vida comunitária.",
    folder: "seminario",
    photos: loadFolderPhotos("seminario", "Seminário"),
  },
  {
    year: "2014-2015",
    title: "Ordenação Sacerdotal",
    description:
      "Funda a associação Theotokos. Ordenado diácono (2014) e sacerdote (2015) na Igreja Ortodoxa da América.",
    folder: "ordenacao-sacerdotal",
    photos: loadFolderPhotos("ordenacao-sacerdotal", "Ordenação Sacerdotal"),
  },
  {
    year: "2010-2017",
    title: "Ativismo e Missões",
    description:
      "Campanha pró-vida em 2010. Missão humanitária em Roraima (2017) auxiliando refugiados venezuelanos.",
    folder: "ativismo-e-missoes",
    photos: loadFolderPhotos("ativismo-e-missoes", "Ativismo e Missões"),
  },
  {
    year: "2019-2021",
    title: "Movimento Cristão Conservador",
    description:
      "Conhece Roberto Jefferson. Funda o MCC a pedido do PTB, tornando-se seu primeiro presidente nacional.",
    folder: "movimento-cristao-conservador",
    photos: loadFolderPhotos("movimento-cristao-conservador", "Movimento Cristão Conservador"),
  },
  {
    year: "2022",
    title: "Candidatura Presidencial",
    description:
      "Candidato à Presidência pelo PTB. Debates nacionais no SBT e Globo. Obtém 81.129 votos em 19 dias de campanha.",
    folder: "candidatura-presidencial",
    photos: loadFolderPhotos("candidatura-presidencial", "Candidatura Presidencial"),
  },
  {
    year: "2023-2024",
    title: "Foro do Brasil e Livro",
    description:
      "Funda o Foro do Brasil (29/06/2023). Lança o livro 'Fé e Política de Mãos Dadas'. Filia-se ao PL em agosto/2024.",
    folder: "foro-do-brasil-e-livro",
    photos: loadFolderPhotos("foro-do-brasil-e-livro", "Foro do Brasil e Livro"),
  },
  {
    year: "2025-2026",
    title: "TV e Deputado Federal",
    description:
      "Programas na VV8 TV: 'Confessionário' e 'Oração pelo Brasil'. Candidato a Deputado Federal por São Paulo (PL).",
    folder: "tv-e-deputado-federal",
    photos: loadFolderPhotos("tv-e-deputado-federal", "TV e Deputado Federal"),
  },
];

function PhotoGalleryModal({
  open,
  onOpenChange,
  title,
  year,
  description,
  photos,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  year: string;
  description: string;
  photos: TimelinePhoto[];
}) {
  const [index, setIndex] = useState(0);
  const hasPhotos = photos.length > 0;

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open || photos.length <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  const photo = hasPhotos ? photos[index] : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className="max-h-[92dvh] w-[min(100%-1rem,52rem)] max-w-4xl gap-0 overflow-hidden border-2 border-blue-100 bg-white p-0 shadow-2xl sm:rounded-2xl"
      >
        <DialogTitle className="sr-only">
          {title}
          {hasPhotos ? ` — foto ${index + 1} de ${photos.length}` : ""}
        </DialogTitle>

        <DialogClose
          className="absolute right-3 top-3 z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border-2 border-blue-200 bg-white text-[var(--blue-primary)] shadow-lg transition-all hover:scale-105 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow-primary)]"
          aria-label="Fechar"
        >
          <X className="size-5 stroke-[2.5]" aria-hidden="true" />
        </DialogClose>

        <div className="max-h-[92dvh] overflow-y-auto">
          <div className="border-b border-blue-50 px-5 pb-4 pt-5 pr-16 sm:px-7 sm:pt-6">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--yellow-primary)" }}
            >
              {year}
            </p>
            <h3
              className="text-xl font-black leading-tight sm:text-2xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
            >
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 text-justify sm:text-base">
              {description}
            </p>
          </div>

          {photo ? (
            <>
              <div className="relative flex min-h-[44dvh] max-h-[62dvh] items-center justify-center bg-neutral-50 px-10 py-5 sm:min-h-[24rem]">
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="max-h-[56dvh] w-auto max-w-full object-contain"
                  width={700}
                  height={500}
                  decoding="async"
                />

                {photos.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Foto anterior"
                      onClick={() =>
                        setIndex((i) => (i - 1 + photos.length) % photos.length)
                      }
                      className="absolute left-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-[var(--blue-primary)] shadow-md transition hover:bg-blue-50"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      aria-label="Próxima foto"
                      onClick={() => setIndex((i) => (i + 1) % photos.length)}
                      className="absolute right-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-[var(--blue-primary)] shadow-md transition hover:bg-blue-50"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                ) : null}
              </div>

              <div className="border-t border-blue-50 bg-white px-4 py-3 sm:px-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-semibold text-gray-700">
                    Galeria de fotos
                  </p>
                  <p className="shrink-0 text-xs text-gray-500">
                    {index + 1} / {photos.length}
                  </p>
                </div>

                <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin]">
                  {photos.map((item, i) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ir para foto ${i + 1}`}
                      aria-current={i === index}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-16 sm:w-24 ${
                        i === index
                          ? "border-[var(--blue-primary)]"
                          : "border-gray-200 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TimelineCard({ item, index }: { item: TimelineCardItem; index: number }) {
  const [open, setOpen] = useState(false);
  const cover = item.photos[0];
  const hasPhotos = item.photos.length > 0;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl"
      >
        <div className="relative mx-auto h-[150px] w-[300px] max-w-full shrink-0 overflow-hidden bg-neutral-200">
          {cover ? (
            <img
              src={cover.src}
              alt={cover.alt}
              width={300}
              height={150}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
              <Images className="size-10 text-white/50" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
          <h3
            className="mb-2 truncate whitespace-nowrap text-base font-black leading-none sm:text-lg"
            title={item.title}
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            {item.title}
          </h3>
          <p className="mb-4 line-clamp-3 min-h-[3.75rem] flex-1 text-sm leading-relaxed text-gray-700">
            {item.description}
          </p>

          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(true)}
            className="h-11 w-full border-2 font-bold"
            style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)" }}
          >
            <Images className="size-4" aria-hidden="true" />
            {hasPhotos ? "Ver fotos" : "Ver mais"}
          </Button>
        </div>
      </motion.article>

      <PhotoGalleryModal
        open={open}
        onOpenChange={setOpen}
        title={item.title}
        year={item.year}
        description={item.description}
        photos={item.photos}
      />
    </>
  );
}

export function TimelineCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {TIMELINE_CARDS.map((item, i) => (
        <TimelineCard key={item.year} item={item} index={i} />
      ))}
    </div>
  );
}
