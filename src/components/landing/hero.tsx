import { motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import bannerOficial from "@/assets/Banner-topo.jpg";
import bannerFe from "@/assets/Banner-topo-1.jpg";
import bannerServir from "@/assets/Banner-topo-2.jpg";
import { PageShell } from "./primitives";
import { HeroServiceCards } from "./hero-service-cards";
import { HeroSocialBar } from "./hero-social-bar";

const HERO_BANNERS = [
  {
    src: bannerOficial,
    alt: "Agora é oficial: Padre Kelmon, candidato a Deputado Federal por São Paulo, pelo Brasil. Aprovado em Convenção.",
    holdMs: 12000,
  },
  {
    src: bannerFe,
    alt: "Padre Kelmon — Fé para servir, coragem para defender. Candidato a Deputado Federal por São Paulo, pelo Brasil.",
    holdMs: 12000,
  },
  {
    src: bannerServir,
    alt: "Padre Kelmon — Servir para construir, amar para resgatar. Candidato a Deputado Federal por São Paulo, pelo Brasil.",
    holdMs: 12000,
  },
] as const;

export function Hero({ embedded = false }: { embedded?: boolean }) {
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
      id={embedded ? undefined : "inicio"}
      className={`relative isolate bg-white pb-2 sm:pb-3 lg:pb-0 ${
        embedded ? "pt-2 sm:pt-3" : "pt-[4.25rem] sm:pt-[4.75rem]"
      }`}
    >
      <PageShell>
        {embedded ? null : (
          <h1 className="sr-only">
            Padre Kelmon — Candidato a Deputado Federal
          </h1>
        )}
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
          </Carousel>
        </motion.div>
        <HeroSocialBar />
        <HeroServiceCards />
      </PageShell>
    </section>
  );
}
