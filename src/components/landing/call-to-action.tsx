import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGoToCadastro } from "@/hooks/use-go-to-cadastro";
import { PageShell, Reveal } from "./primitives";

export function CallToAction() {
  const goToCadastro = useGoToCadastro();

  return (
    <section className="section-pad relative isolate overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 size-56 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--yellow-primary)" }}
      />

      <PageShell className="text-center">
        <Reveal>
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "var(--yellow-primary)" }}
          >
            Faça parte
          </p>
          <h2
            className="mx-auto max-w-3xl text-[1.75rem] font-black leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O Brasil precisa de gente{" "}
            <span style={{ color: "var(--yellow-primary)" }}>de fé e de coragem</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base lg:text-lg">
            Some sua voz a milhares de brasileiros que acreditam na família, na liberdade e na
            honestidade da vida pública.
          </p>
          <Button
            asChild
            variant="yellow"
            size="xl"
            className="mt-7 h-12 w-full max-w-md text-sm font-bold sm:mt-8 sm:h-auto sm:w-auto sm:max-w-none sm:text-base"
          >
            <a href="/#cadastro" onClick={goToCadastro}>
              Quero fazer parte dessa missão
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </PageShell>
    </section>
  );
}
