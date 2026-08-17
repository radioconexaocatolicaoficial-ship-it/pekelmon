import { Shield } from "lucide-react";
import { BANDEIRAS } from "@/lib/campaign-data";
import { PageShell, Reveal, SectionHeading } from "./primitives";

export function Bandeiras({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  return (
    <section id="bandeiras" className="section-pad bg-card/30">
      <PageShell>
        <SectionHeading
          headingAs={headingAs}
          eyebrow="Pautas"
          title="As Pautas que Defendo"
          subtitle="Compromissos firmes e inquebráveis com o povo de São Paulo e com o Brasil. Uma agenda conservadora cristã fundamentada em valores tradicionais, liberdades fundamentais e na dignidade da pessoa humana, para transformar nossa realidade e resgatar a esperança do nosso país."
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {BANDEIRAS.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <article className="surface-card group relative h-full rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl sm:p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "var(--blue-primary)" }}
                  >
                    <b.icon className="size-6 stroke-[2.5] text-white" aria-hidden="true" />
                  </span>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: "var(--yellow-primary)",
                      color: "var(--blue-primary)",
                    }}
                  >
                    <Shield className="size-3" />
                    {b.badge}
                  </div>
                </div>

                <h3
                  className="mb-3 text-lg font-black leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                >
                  {b.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-700 text-justify">{b.description}</p>

                <div
                  className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0, 102, 204, 0.08), transparent)",
                  }}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-muted-foreground sm:mt-10">
            Conteúdo baseado em posicionamentos públicos. Revisar e ampliar com o programa oficial
            quando disponível.
          </p>
        </Reveal>
      </PageShell>
    </section>
  );
}
