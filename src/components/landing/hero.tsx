import { motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import banner4 from "@/assets/banner-topo-padre-kelmon-4.png";
import banner5 from "@/assets/banner-topo-padre-kelmon-5.png";
import banner6 from "@/assets/banner-topo-padre-kelmon-6.png";
import { PageShell } from "./primitives";

const HERO_BANNERS = [
  {
    src: banner4,
    alt: "Padre Kelmon 2202 — Uma vida de missões. A nova missão é por São Paulo",
    holdMs: 24000,
  },
  {
    src: banner5,
    alt: "Padre Kelmon 2202 — Deputado Federal por São Paulo, com a chapa do PL",
    holdMs: 12000,
  },
  {
    src: banner6,
    alt: "Padre Kelmon 2202 — Fé para servir, coragem para defender. Deputado Federal por São Paulo",
    holdMs: 12000,
  },
] as const;

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
    const id = window.setTimeout(() => {
      api.scrollNext();
    }, HERO_BANNERS[active]?.holdMs ?? 12000);
    return () => window.clearTimeout(id);
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
                      width={1140}
                      height={500}
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

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-2.5 py-1.5 backdrop-blur-sm sm:bottom-3.5">
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
                      : "w-2 bg-white/55 hover:bg-white/85"
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
