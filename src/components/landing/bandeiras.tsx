import { Reveal, SectionHeading } from "./primitives";
import { BANDEIRAS } from "@/lib/campaign-data";

export function Bandeiras() {
  return (
    <section id="bandeiras" className="section-y border-t border-border/50 bg-card/30">
      <div className="mx-auto w-full" style={{ maxWidth: '1140px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
        <SectionHeading
          eyebrow="Bandeiras"
          title="As pautas que defendo"
          subtitle="Compromissos públicos que orientam a pré-candidatura por São Paulo."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BANDEIRAS.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <article className="surface-card group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-110">
                  <b.icon className="size-7 stroke-[2]" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
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
      </div>
    </section>
  );
}
