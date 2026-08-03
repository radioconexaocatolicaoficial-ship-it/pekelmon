import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroKv from "@/assets/hero-kv.webp";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-white pt-[4.25rem] sm:pt-[4.75rem]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="relative w-full"
      >
        <img
          src={heroKv}
          alt="Padre Kelmon 2202 — Deputado Federal. Uma vida de missões. A nova missão é por São Paulo."
          width={1024}
          height={576}
          sizes="100vw"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full object-cover object-center"
        />
      </motion.div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-5 sm:flex-row sm:justify-center sm:gap-4 sm:px-6 sm:py-7">
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
    </section>
  );
}
