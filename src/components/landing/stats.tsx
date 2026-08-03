import { ArrowUpRight, Quote } from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.webp";
import { FORO_BRASIL, STATS, TRUST_PILLARS } from "@/lib/campaign-data";
import { Counter, PageShell, Reveal } from "./primitives";

export function Stats() {
  return (
    <section
      id="numeros"
      className="section-pad relative overflow-hidden border-t border-border/50"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 42%, #ffffff 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--yellow-primary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--blue-primary)" }}
      />

      <PageShell className="relative">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="h-full">
              <div className="flex h-full max-h-none flex-col justify-center lg:max-h-[480px]">
                <div>
                  <p
                    className="mb-3 text-sm font-bold uppercase tracking-widest"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    Indicadores
                  </p>
                  <h2
                    className="text-[1.75rem] font-black leading-tight sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                  >
                    Trajetória que gera confiança
                  </h2>
                </div>

                <div className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  <p className="text-justify">
                    Em 2022, foi candidato à Presidência e obteve{" "}
                    <strong style={{ color: "var(--blue-primary)" }}>81.129 votos</strong> em 19
                    dias de campanha. Em 2023, fundou o{" "}
                    <a
                      href={FORO_BRASIL.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline-offset-2 hover:underline"
                      style={{ color: "var(--blue-primary)" }}
                    >
                      Foro do Brasil
                    </a>
                    , do qual é Presidente Nacional — defendendo liberdade, família e dignidade
                    humana em vários estados do país.
                  </p>
                  <p className="text-justify">
                    Pré-candidato a Deputado Federal por São Paulo pelo PL, com mais de{" "}
                    <strong style={{ color: "var(--blue-primary)" }}>30 anos</strong> de fé e
                    serviço. Os indicadores abaixo são públicos e verificáveis, para você votar com
                    confiança.
                  </p>
                </div>

                <p className="mt-4 inline-flex items-start gap-2 text-sm font-semibold text-gray-800">
                  <Quote
                    className="mt-0.5 size-4 shrink-0"
                    style={{ color: "var(--yellow-primary)" }}
                  />
                  “Pelo Brasil que acreditamos, pelos direitos que defendemos.”
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:ml-auto lg:max-w-none lg:aspect-[4/5] lg:max-h-[480px]">
                <img
                  src={heroPortrait}
                  alt="Padre Kelmon — indicadores e atuação pública"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  style={{ maxHeight: "480px" }}
                />
                <div className="absolute inset-0 ring-2 ring-inset ring-white/10 rounded-2xl" />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 60, 140, 0.55), transparent)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    Padre Kelmon
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    Pré-candidato a Deputado Federal por São Paulo · PL
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Números-chave */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={0.06 * index}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border-2 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "rgba(0, 102, 204, 0.12)" }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "var(--gradient-yellow)" }}
                  />
                  <p
                    className="text-3xl font-black tabular-nums sm:text-4xl lg:text-5xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--blue-primary)",
                    }}
                  >
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-bold leading-snug text-gray-900">{stat.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{stat.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Destaque Foro do Brasil */}
          <Reveal delay={0.12}>
            <div
              className="relative mt-12 overflow-hidden rounded-3xl px-6 py-8 text-white sm:px-10 sm:py-10"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-48 rounded-full opacity-20"
                style={{ background: "var(--yellow-primary)" }}
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.22em]"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    {FORO_BRASIL.name} · desde {FORO_BRASIL.founded}
                  </p>
                  <h3
                    className="mt-3 text-2xl font-black leading-tight sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {FORO_BRASIL.tagline}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                    {FORO_BRASIL.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/95">
                    <Quote className="size-4 shrink-0" style={{ color: "var(--yellow-primary)" }} />
                    Padre Kelmon — {FORO_BRASIL.role}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:items-start lg:items-end">
                  <a
                    href={FORO_BRASIL.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:scale-105"
                    style={{
                      backgroundColor: "var(--yellow-primary)",
                      color: "var(--blue-primary)",
                    }}
                  >
                    Conhecer o Foro do Brasil
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={FORO_BRASIL.aboutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    História, missão e liderança
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pilares de confiança */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TRUST_PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.05 * index}>
                <article className="flex h-full gap-4 rounded-2xl border border-blue-100/80 bg-white/90 p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                  <span
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: "var(--blue-primary)" }}
                  >
                    <pillar.icon className="size-6 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3
                      className="text-lg font-black"
                      style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{pillar.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground">
              Fontes públicas: resultado eleitoral de 2022 (TSE); biografia e atuação no{" "}
              <a
                href={FORO_BRASIL.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline-offset-2 hover:underline"
                style={{ color: "var(--blue-primary)" }}
              >
                Foro do Brasil
              </a>
              ; cobertura jornalística sobre a pré-candidatura a Deputado Federal por São Paulo (PL).
            </p>
          </Reveal>
      </PageShell>
    </section>
  );
}
