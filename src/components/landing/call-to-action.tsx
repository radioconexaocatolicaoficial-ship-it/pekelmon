import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives";

export function CallToAction() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 size-56 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--yellow-primary)" }}
      />

      <div className="mx-auto w-full" style={{ maxWidth: "1120px", paddingLeft: "0", paddingRight: "0" }}>
        <div className="px-5 text-center lg:px-0">
          <Reveal>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--yellow-primary)" }}
            >
              Faça parte
            </p>
            <h2
              className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              O Brasil precisa de gente{" "}
              <span style={{ color: "var(--yellow-primary)" }}>de fé e de coragem</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Some sua voz a milhares de brasileiros que acreditam na família, na liberdade e na
              honestidade da vida pública.
            </p>
            <Button asChild variant="yellow" size="xl" className="mt-8 text-base font-bold">
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
