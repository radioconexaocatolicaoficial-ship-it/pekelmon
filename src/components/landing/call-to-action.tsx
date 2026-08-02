import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives";

export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border/60 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
            O Brasil precisa de gente <span className="text-gold-gradient">de fé e de coragem</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Some sua voz a milhares de brasileiros que acreditam na família, na liberdade e na
            honestidade da vida pública.
          </p>
          <Button asChild variant="campaign" size="xl" className="mt-9">
            <a href="#cadastro">
              Quero fazer parte dessa missão
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
      </div>
    </section>
  );
}
