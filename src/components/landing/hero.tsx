import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
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

/** Tempo visível de cada banner (bem lento). */
const HERO_HOLD_MS = 12000;
/** Duração do fade entre banners. */
const HERO_FADE_MS = 3500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_BANNERS.length);
    }, HERO_HOLD_MS);
    return () => window.clearInterval(id);
  }, [tick]);

  const goTo = (index: number) => {
    setActive((index + HERO_BANNERS.length) % HERO_BANNERS.length);
    setTick((t) => t + 1);
  };

  const goPrev = () => goTo(active - 1);
  const goNext = () => goTo(active + 1);

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
          <div className="relative aspect-[1024/449] w-full bg-[var(--blue-primary)]">
            {HERO_BANNERS.map((banner, index) => (
              <img
                key={banner.src}
                src={banner.src}
                alt={banner.alt}
                width={1024}
                height={449}
                sizes="(min-width: 1120px) 1120px, 100vw"
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-opacity ease-in-out"
                style={{
                  opacity: index === active ? 1 : 0,
                  transitionDuration: `${HERO_FADE_MS}ms`,
                }}
              />
            ))}

            <button
              type="button"
              aria-label="Banner anterior"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 sm:left-3 sm:size-11"
            >
              <ChevronLeft className="size-5 sm:size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Próximo banner"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 sm:right-3 sm:size-11"
            >
              <ChevronRight className="size-5 sm:size-6" aria-hidden="true" />
            </button>

            <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-3.5">
              {HERO_BANNERS.map((banner, index) => (
                <button
                  key={banner.src}
                  type="button"
                  aria-label={`Ir para banner ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === active
                      ? "w-6 bg-white shadow"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Botões só no celular e tablet */}
        <div className="flex w-full flex-col gap-3 py-4 sm:flex-row sm:justify-center sm:gap-4 sm:py-5 md:pb-2 md:pt-4 lg:hidden">
          <Button
            asChild
            variant="yellow"
            size="xl"
            className="h-11 w-full text-base font-bold sm:h-auto sm:w-auto sm:min-w-[12rem] sm:text-lg"
          >
            <a
              href="#cadastro"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("cadastro");
              }}
            >
              Quero apoiar
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="h-11 w-full text-base font-semibold sm:h-auto sm:w-auto sm:min-w-[12rem] sm:text-lg"
          >
            <a
              href="#historia"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("historia");
              }}
            >
              Conheça minha história
            </a>
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
