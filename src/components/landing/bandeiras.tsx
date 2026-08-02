import { Shield } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { BANDEIRAS } from "@/lib/campaign-data";

export function Bandeiras() {
  return (
    <section id="bandeiras" className="section-y bg-card/30" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
        <SectionHeading
          eyebrow="Pautas"
          title="As Pautas que Defendo"
          subtitle="Compromissos firmes com o povo de São Paulo e com o Brasil. Uma agenda conservadora cristã para transformar nossa realidade."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BANDEIRAS.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <article className="surface-card group relative h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                {/* Ícone com Badge Amarelo */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--blue-primary)' }}>
                    <b.icon className="size-6 stroke-[2.5] text-white" aria-hidden="true" />
                  </span>
                  <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide" style={{ backgroundColor: 'var(--yellow-primary)', color: 'var(--blue-primary)' }}>
                    <Shield className="size-3" />
                    Pauta
                  </div>
                </div>
                
                {/* Título */}
                <h3 className="mb-3 text-lg font-black leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                  {b.title}
                </h3>
                
                {/* Descrição Expandida */}
                <p className="text-sm leading-relaxed text-gray-700">
                  {b.description}
                </p>

                {/* Efeito de hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{
                  background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.08), transparent)'
                }} />
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
