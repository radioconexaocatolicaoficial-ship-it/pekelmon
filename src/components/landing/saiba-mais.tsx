import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import saibaMaisProVida from "@/assets/saiba-mais-kelmon-pro-vida.png";
import { Button } from "@/components/ui/button";
import { DefesaDoBrasil } from "./defesa-do-brasil";
import { Counter, PageShell, Reveal } from "./primitives";

const VV8_PRO_VIDA_2010 = {
  url: "https://portalvv8.com.br/noticia/67928/em-entrevista-a-vv8-padre-kelmon-relembra-mobilizacao-pro-vida-que-marcou-as-eleicoes-de-2010",
  image: saibaMaisProVida,
  date: "19 de agosto de 2026",
  source: "Portal VV8",
} as const;

const PANCREAS_ONLINE_URL = "https://pancreasonline.lovable.app/";
const PANCREAS_LOGIN_URL = "https://pancreasonline.lovable.app/auth";

const DIABETES_STATS = [
  {
    value: 99,
    suffix: " mil",
    label: "Crianças e jovens com DM1 no Brasil",
    note: "Faixa de 0 a 19 anos · IDF / ICDRS, 2025",
  },
  {
    value: 4,
    suffix: "º",
    label: "País no ranking mundial infantil",
    note: "Atrás de Índia, EUA e China",
  },
  {
    value: 30,
    suffix: "%",
    label: "Jovens de 13 a 19 anos com complicações",
    note: "Sociedade Brasileira de Diabetes",
  },
  {
    value: 589,
    suffix: " mi",
    label: "Pessoas com diabetes no mundo",
    note: "Atlas IDF 2025",
  },
] as const;

export function SaibaMais() {
  return (
    <section
      id="saiba-mais"
      className="bg-white"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
    >
      <PageShell className="section-pad pb-8 sm:pb-10">
        <div className="mb-10 grid gap-6 sm:mb-14 md:mb-16 md:grid-cols-2 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 min-w-0 max-w-full md:order-1"
          >
            <a
              href={VV8_PRO_VIDA_2010.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <img
                src={VV8_PRO_VIDA_2010.image}
                alt="Padre Kelmon diante do documento da CNBB Regional Sul 1 e da mobilização pró-vida"
                width={1200}
                height={900}
                className="block h-auto w-full max-w-full object-contain object-center"
              />
            </a>
          </motion.div>

          <div className="order-1 flex min-w-0 flex-col justify-between md:order-2 md:h-0 md:min-h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-0"
            >
              <p
                className="mb-1.5 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--yellow-primary)" }}
              >
                Saiba mais
              </p>
              <h1
                className="text-[1.6rem] font-black leading-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
              >
                Quem é Padre Kelmon
              </h1>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-700 text-justify sm:text-base">
                Em entrevista à VV8, Padre Kelmon relembrou a mobilização pró-vida de 2010: ainda
                antes da ordenação, coordenou a distribuição nacional do documento{" "}
                <strong>“Apelo a Todos os Brasileiros e Brasileiras”</strong>, da CNBB Regional Sul
                1, às 44 dioceses de São Paulo e depois ao país.
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-700 text-justify sm:text-base">
                Parte dos panfletos foi apreendida e só voltou depois do segundo turno. Para ele, a
                defesa da vida desde a concepção continua sendo missão.
              </p>
              <Button asChild variant="yellow" className="mt-3 h-10 px-5 text-sm font-bold">
                <a href={VV8_PRO_VIDA_2010.url} target="_blank" rel="noopener noreferrer">
                  Ler a entrevista na VV8
                </a>
              </Button>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mt-3 shrink-0 overflow-hidden rounded-xl px-4 py-3 shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--blue-primary), #0052a3)" }}
            >
              <p
                className="relative text-center text-sm font-black leading-snug text-white sm:text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                “O trabalho começou em São Paulo, mas depois fomos levando esse material para todo
                o país.”
              </p>
              <footer className="relative mt-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-yellow-300">
                Padre Kelmon, entrevista à VV8
              </footer>
            </motion.blockquote>
          </div>
        </div>

        <div
          id="diabetes-juvenil"
          className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
        >
          <div className="flex min-w-0 flex-col justify-between md:h-0 md:min-h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-0 overflow-hidden"
            >
              <p
                className="mb-1.5 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--yellow-primary)" }}
              >
                Crianças e jovens
              </p>
              <h2
                className="text-[1.6rem] font-black leading-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
              >
                Diabetes juvenil
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 text-justify sm:text-[0.95rem]">
                O diabetes tipo 1 não tem cura. No Brasil, cerca de{" "}
                <strong>99 mil crianças e jovens</strong> convivem com a doença. O país é o{" "}
                <strong>4º no mundo</strong> nessa faixa etária. Cerca de 30% dos jovens de 13 a 19
                anos já enfrentam complicações.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 text-justify sm:text-[0.95rem]">
                Não há prevenção conhecida. É uma doença autoimune que exige insulina todos os dias,
                em casa e na escola. O tratamento certo evita danos nos rins, no coração e na
                visão. A tecnologia ajuda o jovem a viver com mais segurança.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 text-justify sm:text-[0.95rem]">
                O <strong>Pâncreas Online</strong> está em desenvolvimento para unir, no mesmo
                cuidado, paciente, pais, professores e médicos: diário de glicemia e insulina, com
                relatórios para casa, escola e consultório.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild variant="yellow" className="h-10 px-5 text-sm font-bold">
                  <a href={PANCREAS_ONLINE_URL} target="_blank" rel="noopener noreferrer">
                    Conhecer o protótipo
                    <ExternalLink className="ml-2 size-3.5" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="campaign" className="h-10 px-5 text-sm font-bold">
                  <a href={PANCREAS_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                    Acessar projeto
                    <ExternalLink className="ml-2 size-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mt-3 shrink-0 overflow-hidden rounded-xl px-4 py-3 shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--blue-primary), #0052a3)" }}
            >
              <p
                className="relative text-center text-sm font-black leading-snug text-white sm:text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                “Controle • Saúde • Qualidade de vida.”
              </p>
              <footer className="relative mt-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-yellow-300">
                Pâncreas Online, projeto em desenvolvimento
              </footer>
            </motion.blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-w-0 max-w-full"
          >
            <a
              href={PANCREAS_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir tela de login do Pâncreas Online"
              className="group relative block w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <img
                src="/apps/pancreas-online-logo.png"
                alt="Pâncreas Online, clique para acessar a tela de login"
                width={800}
                height={500}
                className="block h-auto w-full max-w-full object-contain object-center p-6 sm:p-8"
              />
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-white/95 px-4 py-3 text-center text-xs font-bold uppercase tracking-wide shadow-[0_-8px_16px_rgba(0,0,0,0.08)] transition group-hover:bg-white sm:text-sm"
                style={{ color: "var(--blue-primary)" }}
              >
                Acessar login do app
              </span>
            </a>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {DIABETES_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={0.05 * index}>
              <article className="h-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-6 text-center shadow-sm">
                <p
                  className="text-3xl font-black tabular-nums sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold leading-snug text-gray-900">{stat.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{stat.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Fontes:{" "}
          <a
            href="https://icdrs.org.br/dados-de-diabetes/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--blue-primary)" }}
          >
            Instituto da Criança com Diabetes
          </a>
          {" · "}
          <a
            href="https://diabetes.org.br/casos-de-diabetes-tipo-1-aumentam-em-todo-o-mundo/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--blue-primary)" }}
          >
            Sociedade Brasileira de Diabetes
          </a>
          {" · Atlas IDF 2025."}
        </p>

        <DefesaDoBrasil />
      </PageShell>
    </section>
  );
}
