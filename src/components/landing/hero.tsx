import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroKv from "@/assets/Banner-topo.webp";
import { PageShell } from "./primitives";

export function Hero() {
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
          className="relative w-full"
        >
          <img
            src={heroKv}
            alt="Agora é oficial — Padre Kelmon, candidato a Deputado Federal por São Paulo, pelo Brasil"
            width={1140}
            height={500}
            sizes="(min-width: 1120px) 1120px, 100vw"
            fetchPriority="high"
            decoding="async"
            className="block h-auto w-full rounded-2xl object-cover object-center shadow-lg"
          />
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
