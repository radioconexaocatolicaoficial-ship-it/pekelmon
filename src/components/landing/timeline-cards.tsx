import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTimelinePhotos } from "@/lib/timeline-photos";

/** Atualiza a lista de fotos a cada 2s quando você coloca imagens na pasta. */
const TIMELINE_REFRESH_MS = 2 * 1000;

export type TimelinePhoto = {
  src: string;
  alt: string;
};

export type TimelineCardMeta = {
  year: string;
  /** Título completo (aparece no modal). */
  title: string;
  /** Título curto no card; se vazio, usa title. */
  cardTitle?: string;
  description: string;
  /** Pasta em public/timeline/{folder}/ */
  folder: string;
};

export const TIMELINE_CARD_META: TimelineCardMeta[] = [
  {
    year: "1976-1995",
    title: "Minhas Raízes",
    description:
      "Nascimento em Salvador (21/10/1976). Batismo, Eucaristia e Crisma. Formação católica e primeiros passos na fé.",
    folder: "minhas-raizes",
  },
  {
    year: "Juventude",
    title: "Na juventude",
    description:
      "Quando jovem, fundei o movimento JUSPE — Jovens Unidos Semeando Paz e Esperança.",
    folder: "na-juventude",
  },
  {
    year: "1996-2003",
    title: "Seminário dos Legionários de Cristo. Mater Ecclesiae",
    cardTitle: "Seminário",
    description:
      "Formação no Seminário Maria Mater Ecclesiae, dos Legionários de Cristo, em São Paulo — Filosofia, Teologia e vida comunitária.",
    folder: "seminario",
  },
  {
    year: "2014-2015",
    title: "Ordenação diaconal Igreja Sirian Ortodoxa.",
    cardTitle: "Ordenação Diaconal",
    description:
      "Funda a associação Theotokos. Ordenado diácono (2014) e sacerdote (2015) na Igreja Ortodoxa da América.",
    folder: "ordenacao-diaconal",
  },
  {
    year: "2010-2017",
    title: "Associação, Comunidade Theotokos e ações Pró vida",
    cardTitle: "Associação",
    description:
      "Associação e Comunidade Theotokos. Ações pró-vida e missão humanitária.",
    folder: "associacao",
  },
  {
    year: "2019-2021",
    title: "Movimento Cristão Conservador",
    description:
      "Conhece Roberto Jefferson. Funda o MCC a pedido do PTB, tornando-se seu primeiro presidente nacional.",
    folder: "movimento-cristao-conservador",
  },
  {
    year: "2022",
    title: "Candidatura Presidencial",
    description:
      "Candidato à Presidência pelo PTB. Debates nacionais no SBT e Globo. Obtém 81.129 votos em 19 dias de campanha.",
    folder: "candidatura-presidencial",
  },
  {
    year: "2023-2024",
    title: "Foro do Brasil e Livro",
    description:
      "Funda o Foro do Brasil (29/06/2023). Lança o livro 'Fé e Política de Mãos Dadas'. Filia-se ao PL em agosto/2024.",
    folder: "foro-do-brasil-e-livro",
  },
  {
    year: "2025-2026",
    title: "TV e Deputado Federal",
    description:
      "Programas na VV8 TV: 'Confessionário' e 'Oração pelo Brasil'. Candidato a Deputado Federal por São Paulo (PL).",
    folder: "tv-e-deputado-federal",
  },
];

function photosForFolder(
  folder: string,
  title: string,
  byFolder: Record<string, { src: string; name: string }[]> | undefined,
): TimelinePhoto[] {
  const files = byFolder?.[folder] ?? [];
  return files.map((f, i) => ({
    src: f.src,
    alt: `${title} — foto ${i + 1}`,
  }));
}

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

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open || photos.length < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  const current = photos[index];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className="flex max-h-[92dvh] w-[min(96vw,920px)] max-w-[min(96vw,920px)] flex-col gap-0 overflow-hidden border-0 bg-white p-0 sm:rounded-2xl"
      >
        <div className="relative flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3 pr-12 sm:px-5 sm:pr-14">
          <div className="min-w-0 flex-1">
            <DialogTitle
              className="text-balance text-base font-black leading-snug sm:text-xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
            >
              {title}
            </DialogTitle>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {year}
            </p>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">{description}</p>
          </div>
          <DialogClose className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800">
            <X className="size-5" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-neutral-100">
          {photos.length > 0 && current ? (
            <>
              <div className="flex w-full items-center justify-center overflow-hidden px-10 py-4 sm:min-h-[360px] sm:px-14">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="mx-auto block h-auto max-h-[52dvh] w-auto max-w-full object-contain"
                />
              </div>

              {photos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
                    className="absolute left-2 top-[42%] z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => (i + 1) % photos.length)}
                    className="absolute right-2 top-[42%] z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              ) : null}

              <div className="border-t bg-white px-3 py-3 sm:px-4">
                <p className="mb-2 text-center text-xs text-gray-500">
                  {index + 1} / {photos.length}
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1">
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
          ) : (
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-2 px-6 py-10 text-center">
              <Images className="size-10 text-gray-300" aria-hidden="true" />
              <p className="text-sm text-gray-500">
                Nenhuma foto nesta pasta ainda. Coloque imagens em{" "}
                <span className="font-semibold text-gray-700">public/timeline/</span>
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TimelineCard({
  item,
  photos,
  index,
}: {
  item: TimelineCardMeta;
  photos: TimelinePhoto[];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const cover = photos[0];
  const hasPhotos = photos.length > 0;
  const displayTitle = item.cardTitle ?? item.title;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl"
      >
        {/* Prévia padronizada: largura total do card × 150px */}
        <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-neutral-200">
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
            className="mb-2 h-7 truncate whitespace-nowrap text-base font-black leading-7 sm:text-lg"
            title={item.title}
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            {displayTitle}
          </h3>
          <p className="mb-4 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-gray-700">
            {item.description}
          </p>

          <div className="mt-auto">
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
        </div>
      </motion.article>

      <PhotoGalleryModal
        open={open}
        onOpenChange={setOpen}
        title={item.title}
        year={item.year}
        description={item.description}
        photos={photos}
      />
    </>
  );
}

export function TimelineCards() {
  const photosQuery = useQuery({
    queryKey: ["timeline-photos", "auto-refresh"],
    queryFn: () => getTimelinePhotos(),
    staleTime: 0,
    refetchInterval: TIMELINE_REFRESH_MS,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const byFolder = photosQuery.data?.byFolder;

  const cards = useMemo(
    () =>
      TIMELINE_CARD_META.map((meta) => ({
        meta,
        photos: photosForFolder(meta.folder, meta.title, byFolder),
      })),
    [byFolder],
  );

  return (
    <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {cards.map(({ meta, photos }, i) => (
        <div key={meta.folder} className="flex h-full min-w-0">
          <TimelineCard item={meta} photos={photos} index={i} />
        </div>
      ))}
    </div>
  );
}

/** @deprecated use TIMELINE_CARD_META */
export const TIMELINE_CARDS = TIMELINE_CARD_META;
