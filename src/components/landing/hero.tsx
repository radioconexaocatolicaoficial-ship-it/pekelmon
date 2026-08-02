import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroPortrait from "@/assets/hero-portrait.png";
import { PageShell } from "./primitives";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <PageShell>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,450px))] lg:gap-16">
          <div className="flex flex-col justify-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex max-w-full items-start gap-2 self-start rounded-lg border-2 border-white/40 bg-white/15 px-3 py-2 backdrop-blur-sm sm:mb-6 sm:items-center sm:px-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-400 sm:mt-0" aria-hidden="true" />
              <span className="text-[0.7rem] font-bold uppercase leading-snug tracking-wider sm:text-[0.92rem]">
                Candidatura Homologada na Convenção do PL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.35rem] font-black leading-[1.05] sm:text-[3.3rem] md:text-[3.96rem] lg:text-[4.4rem]"
            >
              Agora é
              <span
                className="mt-1 block sm:mt-2"
                style={{
                  color: "var(--yellow-primary)",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                OFICIAL
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-[1.65rem] font-bold uppercase sm:mt-6 sm:text-[2.2rem] md:text-[2.64rem] lg:text-[3.3rem]"
            >
              PADRE KELMON
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-3 text-[1.1rem] font-semibold sm:mt-4 sm:text-[1.38rem] md:text-[1.65rem]"
            >
              Candidato a
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[1.65rem] font-black uppercase leading-tight sm:text-[2.2rem] md:text-[2.64rem]"
              style={{ color: "var(--yellow-primary)" }}
            >
              DEPUTADO
              <span className="block">FEDERAL</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-2 text-[0.8rem] uppercase tracking-wider sm:text-[0.92rem] md:text-[1.1rem]"
            >
              Por São Paulo, pelo Brasil
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                variant="yellow"
                size="xl"
                className="h-12 w-full text-base font-bold sm:h-auto sm:w-auto sm:text-lg"
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
                variant="outlineWhite"
                size="xl"
                className="h-12 w-full text-base font-semibold sm:h-auto sm:w-auto sm:text-lg"
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex w-full max-w-[360px] items-center justify-center sm:max-w-[400px] lg:max-w-[450px]"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl opacity-40 blur-3xl sm:-inset-6"
              style={{ background: "var(--gradient-yellow)" }}
            />
            <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-white bg-transparent shadow-2xl">
              <img
                src={heroPortrait}
                alt="Padre Kelmon - Candidato a Deputado Federal por São Paulo"
                width={450}
                height={600}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </figure>
          </motion.div>
        </div>
      </PageShell>
    </section>
  );
}
