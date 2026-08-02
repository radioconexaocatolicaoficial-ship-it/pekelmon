import { Quote } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";
import { CANDIDATE, TIMELINE } from "@/lib/campaign-data";

export function About() {
  return (
    <section id="historia" className="section-y border-t border-border/50">
      <div className="mx-auto max-w-[1140px] px-5">
        <SectionHeading
          eyebrow="Quem é"
          title={`A trajetória de ${CANDIDATE.name}`}
          subtitle="Uma história construída na vida comunitária, na formação religiosa e na defesa pública dos valores cristãos. As informações abaixo reúnem apenas dados de fontes públicas."
        />

        <Reveal delay={0.1}>
          <blockquote className="surface-card mx-auto mt-12 max-w-3xl rounded-2xl p-8 text-center">
            <Quote className="mx-auto size-6 text-primary" aria-hidden="true" />
            <p className="mt-4 font-display text-xl leading-relaxed sm:text-2xl">
              “Juntos vamos resgatar o Brasil.”
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {CANDIDATE.name}, ao anunciar a pré-candidatura em 2026
            </footer>
          </blockquote>
        </Reveal>

        <ol className="relative mt-16 space-y-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-border md:before:left-1/2">
          {TIMELINE.map((item, i) => (
            <li key={item.year + item.title} className="relative md:grid md:grid-cols-2 md:gap-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 size-[15px] rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
              />
              <Reveal
                delay={0.05 * i}
                className={
                  i % 2 === 0
                    ? "pl-8 md:col-start-1 md:pl-0 md:pr-12 md:text-right"
                    : "pl-8 md:col-start-2 md:pl-12"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Fontes públicas consultadas: Wikipédia (verbete “Padre Kelmon”), O Globo (19/03/2026) e
            Congresso em Foco (20/03/2026). Dados biográficos adicionais devem ser confirmados e
            complementados pela assessoria da campanha.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
