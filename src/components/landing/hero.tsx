import { motion } from "motion/react";

import { PageShell } from "./primitives";
import { HeroBannerCarousel } from "./hero-banner-carousel";
import { HeroServiceCards } from "./hero-service-cards";
import { HeroSocialBar } from "./hero-social-bar";

export function Hero({ embedded = false }: { embedded?: boolean }) {
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
            Padre Kelmon, candidato a Deputado Federal
          </h1>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
        >
          <HeroBannerCarousel className="rounded-2xl shadow-lg" />
        </motion.div>
        <HeroSocialBar />
        <HeroServiceCards />
      </PageShell>
    </section>
  );
}
