import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";
import heroBg from "@/assets/hero-bg.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 size-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 20%, color-mix(in oklab, var(--navy) 55%, transparent), transparent), linear-gradient(to bottom, color-mix(in oklab, var(--navy-deep) 82%, transparent), var(--navy-deep))",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            {CANDIDATE.party} • São Paulo • 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl"
          >
            Fé, família e coragem
            <span className="block text-gold-gradient">para resgatar o Brasil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
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
            className="absolute -inset-3 rounded-[1.75rem] bg-[image:var(--gradient-gold)] opacity-25 blur-2xl"
          />
          <figure className="surface-card relative overflow-hidden rounded-2xl">
            <img
              src={heroPortrait}
              alt="Foto institucional do Padre Kelmon (imagem ilustrativa a ser substituída pelo material oficial da campanha)"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="border-t border-border/60 px-4 py-3 text-xs text-muted-foreground">
              Imagem ilustrativa — substituir pela foto oficial da campanha.
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
