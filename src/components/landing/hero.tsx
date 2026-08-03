import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroPortrait from "@/assets/hero-portrait.webp";
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
          <div className="@container flex w-full min-w-0 flex-col justify-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex max-w-full items-center gap-1.5 self-start whitespace-nowrap rounded-lg border-2 border-white/40 bg-white/15 px-2 py-1.5 backdrop-blur-sm sm:mb-6 sm:gap-2 sm:px-4 sm:py-2"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-green-400 sm:size-5" aria-hidden="true" />
              <span className="whitespace-nowrap text-[clamp(0.52rem,2.55vw,0.92rem)] font-bold uppercase leading-none tracking-wide sm:tracking-wider">
                Candidatura Homologada na Convenção do PL
              </span>
            </motion.div>

            {/*
              Estrutura única (evita duplicar HTML mobile/desktop).
              Mobile (<sm): Agora é Oficial (branco) → PADRE KELMON (amarelo, maior)
              → Candidato a → Deputado Federal (1 linha) → Por São Paulo, Pelo Brasil
              sm+: layout original com OFICIAL / DEPUTADO / FEDERAL em destaque amarelo
            */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full whitespace-nowrap font-black leading-none tracking-tight text-white text-[clamp(1.2rem,6.4vw,1.85rem)] sm:whitespace-normal sm:text-[3.3rem] sm:leading-[1.05] sm:tracking-normal md:text-[3.96rem] lg:text-[4.4rem]"
            >
              Agora é{" "}
              <span
                className="capitalize text-white sm:mt-2 sm:block sm:uppercase sm:text-[var(--yellow-primary)]"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
              >
                oficial
              </span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight text-[clamp(2.35rem,12.5vw,3.85rem)] text-[var(--yellow-primary)] sm:mt-6 sm:whitespace-normal sm:text-[2.2rem] sm:font-bold sm:tracking-normal sm:text-white md:text-[2.64rem] lg:text-[3.3rem]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              PADRE KELMON
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-3 w-full whitespace-nowrap font-semibold leading-none text-white text-[clamp(0.95rem,4.6vw,1.25rem)] sm:mt-4 sm:whitespace-normal sm:text-[1.38rem] md:text-[1.65rem]"
            >
              Candidato a
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-1.5 w-full whitespace-nowrap font-black leading-none tracking-tight text-white text-[clamp(1.25rem,6.8vw,2rem)] sm:mt-0 sm:whitespace-normal sm:text-[2.2rem] sm:uppercase sm:leading-tight sm:tracking-normal sm:text-[var(--yellow-primary)] md:text-[2.64rem]"
            >
              Deputado <span className="sm:block">Federal</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-2 w-full whitespace-nowrap leading-none tracking-wide text-white text-[clamp(0.78rem,3.8vw,0.95rem)] sm:whitespace-normal sm:uppercase sm:text-[0.92rem] sm:tracking-wider md:text-[1.1rem]"
            >
              Por São Paulo, Pelo Brasil
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
                alt="Padre Kelmon, pré-candidato a Deputado Federal por São Paulo pelo PL"
                width={450}
                height={675}
                sizes="(max-width: 1024px) min(100vw, 400px), 450px"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </figure>
          </motion.div>
        </div>
      </PageShell>
    </section>
  );
}
