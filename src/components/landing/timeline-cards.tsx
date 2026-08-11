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

import raizes1 from "@/assets/timeline/raizes-1.webp";
import raizes2 from "@/assets/timeline/raizes-2.webp";
import raizes3 from "@/assets/timeline/raizes-3.webp";
import raizes4 from "@/assets/timeline/raizes-4.webp";
import raizes5 from "@/assets/timeline/raizes-5.webp";
import raizes6 from "@/assets/timeline/raizes-6.webp";
import raizes7 from "@/assets/timeline/raizes-7.webp";
import raizes8 from "@/assets/timeline/raizes-8.webp";
import juventude1 from "@/assets/timeline/juventude-1.webp";
import juventude2 from "@/assets/timeline/juventude-2.webp";
import juventude3 from "@/assets/timeline/juventude-3.webp";
import juventude4 from "@/assets/timeline/juventude-4.webp";
import juventude5 from "@/assets/timeline/juventude-5.webp";
import juventude6 from "@/assets/timeline/juventude-6.webp";
import juventude7 from "@/assets/timeline/juventude-7.webp";
import juventude8 from "@/assets/timeline/juventude-8.webp";
import juventude9 from "@/assets/timeline/juventude-9.webp";
import seminario1 from "@/assets/timeline/seminario-1.webp";
import seminario2 from "@/assets/timeline/seminario-2.webp";
import seminario3 from "@/assets/timeline/seminario-3.webp";
import seminario4 from "@/assets/timeline/seminario-4.webp";
import seminario5 from "@/assets/timeline/seminario-5.webp";
import seminario6 from "@/assets/timeline/seminario-6.webp";
import seminario7 from "@/assets/timeline/seminario-7.webp";
import seminario8 from "@/assets/timeline/seminario-8.webp";
import seminario9 from "@/assets/timeline/seminario-9.webp";
import seminario10 from "@/assets/timeline/seminario-10.webp";
import seminario11 from "@/assets/timeline/seminario-11.webp";
import seminario12 from "@/assets/timeline/seminario-12.webp";
import seminario13 from "@/assets/timeline/seminario-13.webp";
import seminario14 from "@/assets/timeline/seminario-14.webp";
import seminario15 from "@/assets/timeline/seminario-15.webp";
import seminario16 from "@/assets/timeline/seminario-16.webp";
import seminario17 from "@/assets/timeline/seminario-17.webp";
import seminario18 from "@/assets/timeline/seminario-18.webp";
import seminario19 from "@/assets/timeline/seminario-19.webp";

export type TimelinePhoto = {
  src: string;
  alt: string;
};

export type TimelineCardItem = {
  year: string;
  title: string;
  description: string;
  photos: TimelinePhoto[];
};

const RAIZES_PHOTOS: TimelinePhoto[] = [
  { src: raizes1, alt: "Padre Kelmon na infância com os irmãos" },
  { src: raizes2, alt: "Família e formação escolar de Padre Kelmon" },
  { src: raizes3, alt: "Turma escolar na infância de Padre Kelmon" },
  { src: raizes4, alt: "Primeira Eucaristia — Padre Kelmon com religiosa" },
  { src: raizes5, alt: "Primeira Eucaristia de Padre Kelmon" },
  { src: raizes6, alt: "Padre Kelmon ainda criança" },
  { src: raizes7, alt: "Crisma — unção na formação católica de Padre Kelmon" },
  { src: raizes8, alt: "Infância em família — Padre Kelmon com os irmãos" },
];

const JUVENTUDE_PHOTOS: TimelinePhoto[] = [
  { src: juventude1, alt: "Juventude — encontro do movimento JUSPE" },
  { src: juventude2, alt: "Juventude — amigos do JUSPE reunidos" },
  { src: juventude3, alt: "Logo JUSPE — Jovens Unidos Semeando Paz e Esperança" },
  { src: juventude4, alt: "Na juventude — irmãos na infância" },
  { src: juventude5, alt: "Infância e juventude — celebração comunitária" },
  { src: juventude6, alt: "Juventude — com a mãe" },
  { src: juventude7, alt: "Na juventude com os irmãos" },
  { src: juventude8, alt: "JUSPE — jovens em missão com o movimento" },
  { src: juventude9, alt: "Juventude — com o cruz Tau franciscana" },
];

const SEMINARIO_PHOTOS: TimelinePhoto[] = [
  { src: seminario1, alt: "Seminário Mater Ecclesiae — colegas em formação" },
  { src: seminario2, alt: "Seminário — aula e convivência" },
  { src: seminario3, alt: "Seminário — formação litúrgica" },
  { src: seminario4, alt: "Seminário — confraternização" },
  { src: seminario5, alt: "Seminário — prática litúrgica com turíbulo" },
  { src: seminario6, alt: "Seminário — turma nas escadarias" },
  { src: seminario7, alt: "Seminário — aula com o turíbulo" },
  { src: seminario8, alt: "Vista do Seminário Mater Ecclesiae" },
  { src: seminario9, alt: "Capela do seminário — oração" },
  { src: seminario10, alt: "Campus do Seminário dos Legionários de Cristo" },
  { src: seminario11, alt: "Padre Kelmon no período de seminário" },
  { src: seminario12, alt: "Amigos do seminário" },
  { src: seminario13, alt: "Turma do seminário nas escadas" },
  { src: seminario14, alt: "Convivência no seminário" },
  { src: seminario15, alt: "Seminaristas em frente ao prédio" },
  { src: seminario16, alt: "Padre Kelmon e formador no seminário" },
  { src: seminario17, alt: "Encontro no seminário" },
  { src: seminario18, alt: "Turma de amigos do seminário" },
  { src: seminario19, alt: "Turma do seminário em formação" },
];

export const TIMELINE_CARDS: TimelineCardItem[] = [
  {
    year: "1976-1995",
    title: "Minhas Raízes",
    description:
      "Nascimento em Salvador (21/10/1976). Batismo, Eucaristia e Crisma. Formação católica e primeiros passos na fé.",
    photos: RAIZES_PHOTOS,
  },
  {
    year: "Juventude",
    title: "Na juventude",
    description:
      "Quando jovem, fundei o movimento JUSPE — Jovens Unidos Semeando Paz e Esperança.",
    photos: JUVENTUDE_PHOTOS,
  },
  {
    year: "1996-2003",
    title: "Seminário dos Legionários de Cristo. Mater Ecclesiae",
    description:
      "Formação no Seminário Maria Mater Ecclesiae, dos Legionários de Cristo, em São Paulo — Filosofia, Teologia e vida comunitária.",
    photos: SEMINARIO_PHOTOS,
  },
  {
    year: "2014-2015",
    title: "Ordenação Sacerdotal",
    description:
      "Funda a associação Theotokos. Ordenado diácono (2014) e sacerdote (2015) na Igreja Ortodoxa da América.",
    photos: [],
  },
  {
    year: "2010-2017",
    title: "Ativismo e Missões",
    description:
      "Campanha pró-vida em 2010. Missão humanitária em Roraima (2017) auxiliando refugiados venezuelanos.",
    photos: [],
  },
  {
    year: "2019-2021",
    title: "Movimento Cristão Conservador",
    description:
      "Conhece Roberto Jefferson. Funda o MCC a pedido do PTB, tornando-se seu primeiro presidente nacional.",
    photos: [],
  },
  {
    year: "2022",
    title: "Candidatura Presidencial",
    description:
      "Candidato à Presidência pelo PTB. Debates nacionais no SBT e Globo. Obtém 81.129 votos em 19 dias de campanha.",
    photos: [],
  },
  {
    year: "2023-2024",
    title: "Foro do Brasil e Livro",
    description:
      "Funda o Foro do Brasil (29/06/2023). Lança o livro 'Fé e Política de Mãos Dadas'. Filia-se ao PL em agosto/2024.",
    photos: [],
  },
  {
    year: "2025-2026",
    title: "TV e Deputado Federal",
    description:
      "Programas na VV8 TV: 'Confessionário' e 'Oração pelo Brasil'. Candidato a Deputado Federal por São Paulo (PL).",
    photos: [],
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
              <div className="relative flex min-h-[40dvh] max-h-[58dvh] items-center justify-center bg-neutral-50 px-12 py-6 sm:min-h-[22rem]">
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="max-h-[52dvh] w-auto max-w-full object-contain"
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
                      className={`relative h-16 w-14 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-20 sm:w-16 ${
                        i === index
                          ? "border-[var(--blue-primary)]"
                          : "border-gray-200 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt=""
                        className="h-full w-full object-cover"
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
        className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600">
          {cover ? (
            <img
              src={cover.src}
              alt={cover.alt}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Images className="size-10 text-white/50" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3
            className="mb-2 truncate whitespace-nowrap text-base font-black leading-none sm:text-lg"
            title={item.title}
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            {item.title}
          </h3>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-700">
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
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {TIMELINE_CARDS.map((item, i) => (
        <TimelineCard key={item.year} item={item} index={i} />
      ))}
    </div>
  );
}
