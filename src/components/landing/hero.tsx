import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.5 0.15 295 / 8%), transparent 50%),
                           radial-gradient(circle at 80% 70%, oklch(0.52 0.14 152 / 6%), transparent 50%)`,
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-purple-700"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            {CANDIDATE.party} • São Paulo • 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] text-gray-900 sm:text-6xl"
          >
            Fé, família e coragem
            <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              para resgatar o Brasil
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            {CANDIDATE.fullName} — o {CANDIDATE.name} — é {CANDIDATE.role.toLowerCase()} pelo{" "}
            {CANDIDATE.party}. Uma trajetória de vida religiosa e de defesa pública dos valores
            cristãos, agora a serviço das famílias paulistas em Brasília.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="campaign" size="xl">
              <a href="#cadastro">
                Quero apoiar
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <a href="#historia">Conheça minha história</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200/50 via-purple-300/40 to-green-200/30 opacity-60 blur-2xl"
          />
          <figure className="surface-card relative overflow-hidden">
            <img
              src={heroPortrait}
              alt="Padre Kelmon - Candidato a Deputado Federal por São Paulo"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
