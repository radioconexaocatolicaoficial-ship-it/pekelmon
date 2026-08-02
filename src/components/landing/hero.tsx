import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";
import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-32 pt-32 sm:pb-36 sm:pt-40" style={{ background: 'var(--gradient-hero)' }}>
      {/* Padrão decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Container de 1120px para conteúdo */}
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_450px]">
          {/* Coluna de texto - alinhada à esquerda */}
          <div className="text-white flex flex-col justify-center px-5 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/15 backdrop-blur-sm px-4 py-2 mb-6 self-start"
            >
              <CheckCircle2 className="size-5 text-green-400" aria-hidden="true" />
              <span className="text-[0.92rem] font-bold uppercase tracking-wider whitespace-nowrap">
                Candidatura Homologada na Convenção do PL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[3.3rem] font-black leading-[1.05] sm:text-[3.96rem] lg:text-[4.4rem]"
            >
              Agora é
              <span className="block mt-2" style={{ color: 'var(--yellow-primary)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                OFICIAL
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[2.2rem] sm:text-[2.64rem] lg:text-[3.3rem] font-bold uppercase"
            >
              PADRE KELMON
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 text-[1.38rem] sm:text-[1.65rem] font-semibold"
            >
              Candidato a
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[2.2rem] sm:text-[2.64rem] font-black uppercase leading-tight"
              style={{ color: 'var(--yellow-primary)' }}
            >
              DEPUTADO
              <span className="block">FEDERAL</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-2 text-[0.92rem] sm:text-[1.1rem] uppercase tracking-wider"
            >
              Por São Paulo, pelo Brasil
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild variant="yellow" size="xl" className="text-lg font-bold">
                <a
                  href="#cadastro"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("cadastro");
                    if (!el) return;
                    const header = document.querySelector("header");
                    const offset = Math.max(
                      0,
                      Math.ceil(header?.getBoundingClientRect().height ?? 80) - 4,
                    );
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
                  }}
                >
                  Quero apoiar
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outlineWhite" size="xl" className="text-lg font-semibold">
                <a 
                  href="#historia"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Conheça minha história
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Coluna da imagem - perfeitamente centralizada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full flex items-center justify-center px-5 lg:px-0"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl"
              style={{ background: 'var(--gradient-yellow)' }}
            />
            <figure className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl w-full max-w-[450px]">
              <img
                src={heroPortrait}
                alt="Padre Kelmon - Candidato a Deputado Federal por São Paulo"
                width={450}
                height={600}
                fetchPriority="high"
                className="w-full h-auto object-cover object-center"
                style={{ aspectRatio: '3/4' }}
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
