import { Counter, Reveal, SectionHeading } from "./primitives";
import { STATS } from "@/lib/campaign-data";

export function Stats() {
  return (
    <section id="numeros" className="section-y border-t border-border/50">
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
        <SectionHeading
          eyebrow="Números"
          title="Indicadores públicos"
          subtitle="Somente dados verificáveis em fontes oficiais e públicas."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div className="surface-card h-full rounded-2xl p-8 text-center">
                <p className="font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-sm font-medium">{s.label}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Indicadores de redes sociais (seguidores, alcance) podem ser incluídos aqui assim que
            forem confirmados pela assessoria.
          </p>
        </Reveal>
      </div>
      </div>
    </section>
  );
}
