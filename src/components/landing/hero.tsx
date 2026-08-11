import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import banner1 from "@/assets/Banner-topo-1.webp";
import banner2 from "@/assets/Banner-topo-2.webp";
import banner3 from "@/assets/Banner-topo-3.webp";
import { PageShell } from "./primitives";

const HERO_BANNERS = [
  {
    src: banner1,
    alt: "Padre Kelmon — Fé para servir, coragem para defender. Candidato a Deputado Federal por São Paulo",
  },
  {
    src: banner2,
    alt: "Padre Kelmon — Servir para construir, amar para resgatar. Candidato a Deputado Federal por São Paulo",
  },
  {
    src: banner3,
    alt: "Agora é oficial — Padre Kelmon, candidato a Deputado Federal por São Paulo, aprovado em convenção",
  },
] as const;

/** Tempo visível de cada banner no autoplay. */
const HERO_HOLD_MS = 12000;

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, HERO_HOLD_MS);
    return () => window.clearInterval(id);
  }, [api, active]);

  return (
    <section
      id="inicio"
      className="relative isolate bg-white pt-[4.25rem] pb-2 sm:pt-[4.75rem] sm:pb-3 lg:pb-0"
    >
      <PageShell>
        <h1 className="sr-only">
          Padre Kelmon — Candidato a Deputado Federal por São Paulo pelo PL, aprovado em
          convenção
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="relative w-full overflow-hidden rounded-2xl shadow-lg"
        >
          <Carousel
            opts={{ align: "start", loop: true, duration: 20 }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {HERO_BANNERS.map((banner, index) => (
                <CarouselItem key={banner.src} className="basis-full pl-0">
                  <div className="relative aspect-[1140/500] w-full bg-[var(--blue-primary)]">
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      width={2280}
                      height={1000}
                      sizes="(min-width: 1120px) 1120px, 100vw"
                      fetchPriority={index === 0 ? "high" : "low"}
                      decoding="async"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover object-center select-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles só no desktop — mobile/tablet usa swipe */}
            <button
              type="button"
              aria-label="Banner anterior"
              onClick={() => api?.scrollPrev()}
              className="absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 lg:inline-flex"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Próximo banner"
              onClick={() => api?.scrollNext()}
              className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 lg:inline-flex"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>

            <div className="absolute bottom-3.5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 lg:flex">
              {HERO_BANNERS.map((banner, index) => (
                <button
                  key={banner.src}
                  type="button"
                  aria-label={`Ir para banner ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-6 bg-white shadow"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </motion.div>
      </PageShell>
    </section>
  );
}
