import { Reveal, SectionHeading } from "./primitives";
import { BANDEIRAS } from "@/lib/campaign-data";

export function Bandeiras() {
  return (
    <section id="bandeiras" className="section-y border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Bandeiras"
          title="As pautas que defendo"
          subtitle="Compromissos públicos que orientam a pré-candidatura por São Paulo."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BANDEIRAS.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <article className="surface-card group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                  <b.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Conteúdo baseado em posicionamentos públicos. Revisar e ampliar com o programa oficial
            quando disponível.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
