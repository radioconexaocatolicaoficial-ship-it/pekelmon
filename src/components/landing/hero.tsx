import { motion } from "motion/react";

import heroKv from "@/assets/hero-kv.webp";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate bg-white pt-[4.25rem] sm:pt-[4.75rem]">
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
    </section>
  );
}
