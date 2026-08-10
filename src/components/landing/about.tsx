import {
  Quote,
  Calendar,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
  Megaphone,
  Scale,
  Tv,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import heroPortrait from "@/assets/hero-portrait.webp";
import sobreRotating1 from "@/assets/sobre-rotating-1.webp";
import sobreRotating2 from "@/assets/sobre-rotating-2.webp";
import sobreRotating3 from "@/assets/sobre-rotating-3.webp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PageShell } from "./primitives";

const SOBRE_PORTRAITS = [
  {
    src: sobreRotating1,
    alt: "Padre Kelmon — retrato com fundo amarelo",
  },
  {
    src: sobreRotating2,
    alt: "Padre Kelmon — retrato com fundo azul",
  },
  {
    src: sobreRotating3,
    alt: "Padre Kelmon — retrato com fundo verde",
  },
] as const;

const SOBRE_ROTATE_MS = 5500;

const HIGHLIGHTS_SOBRE = [
  {
    icon: Calendar,
    year: "1976-1995",
    title: "Raízes e Formação Católica",
    description:
      "Nascimento em Salvador (21/10/1976). Batismo, Eucaristia, Crisma. Liderança na Legião de Maria e cofundador do grupo JUSPE.",
  },
  {
    icon: BookOpen,
    year: "1996-2003",
    title: "Convento e Seminário",
    description:
      "Convento dos Capuchinhos em Maceió. Seminário Maria Mater Ecclesiae em SP. Formação em Filosofia, Teologia e Pedagogia.",
  },
  {
    icon: GraduationCap,
    year: "2014-2015",
    title: "Ordenação Sacerdotal",
    description:
      "Funda a associação Theotokos. Ordenado diácono (2014) e sacerdote (2015) na Igreja Ortodoxa da América.",
  },
  {
    icon: Heart,
    year: "2010-2017",
    title: "Ativismo e Missões",
    description:
      "Campanha pró-vida em 2010. Missão humanitária em Roraima (2017) auxiliando refugiados venezuelanos.",
  },
  {
    icon: Users,
    year: "2019-2021",
    title: "Movimento Cristão Conservador",
    description:
      "Conhece Roberto Jefferson. Funda o MCC a pedido do PTB, tornando-se seu primeiro presidente nacional.",
  },
  {
    icon: Megaphone,
    year: "2022",
    title: "Candidatura Presidencial",
    description:
      "Candidato à Presidência pelo PTB. Debates nacionais no SBT e Globo. Obtém 81.129 votos em 19 dias de campanha.",
  },
  {
    icon: Scale,
    year: "2023-2024",
    title: "Foro do Brasil e Livro",
    description:
      "Funda o Foro do Brasil (29/06/2023). Lança o livro 'Fé e Política de Mãos Dadas'. Filia-se ao PL em agosto/2024.",
  },
  {
    icon: Tv,
    year: "2025-2026",
    title: "TV e Deputado Federal",
    description:
      "Programas na VV8 TV: 'Confessionário' e 'Oração pelo Brasil'. Candidato a Deputado Federal por São Paulo (PL).",
  },
];

/** Preview curto — mesma altura aproximada do bloco atual (3 parágrafos). */
const BIO_PREVIEW = [
  "Nascido em Salvador, Bahia, em 1976, Padre Kelmon construiu sua trajetória a partir da vida religiosa, dedicando mais de três décadas à formação espiritual, ao trabalho pastoral e à participação em iniciativas voltadas ao debate entre fé, sociedade e política.",
  "Sua caminhada começou ainda na juventude, com participação em movimentos ligados à Igreja Católica, entre eles a Legião de Maria. Posteriormente aprofundou estudos em Filosofia, Teologia e Pedagogia e participou de ações missionárias e humanitárias.",
  "Para as eleições de 2026, confirmou sua candidatura a Deputado Federal por São Paulo pelo Partido Liberal (PL), ampliando sua presença no debate público nacional.",
];

const BIO_FULL_SECTIONS: { heading?: string; paragraphs: string[] }[] = [
  {
    heading: "Uma trajetória marcada pela vida religiosa e pela participação no debate público",
    paragraphs: [
      "Nascido em Salvador, Bahia, em 1976, Padre Kelmon construiu sua trajetória a partir da vida religiosa, dedicando mais de três décadas à formação espiritual, ao trabalho pastoral e à participação em iniciativas voltadas ao debate entre fé, sociedade e política.",
      "Sua caminhada começou ainda na juventude, com participação em movimentos ligados à Igreja Católica, entre eles a Legião de Maria. Posteriormente ingressou na formação religiosa, aprofundando seus estudos em Filosofia, Teologia e Pedagogia, áreas que influenciaram sua atuação junto à comunidade e em projetos educacionais e sociais.",
      "Ao longo dos anos, também participou de ações missionárias e atividades humanitárias, desenvolvendo trabalhos voltados ao atendimento de comunidades e à formação de lideranças.",
    ],
  },
  {
    heading: "Atuação pública",
    paragraphs: [
      "Padre Kelmon tornou-se conhecido nacionalmente durante o processo eleitoral de 2022, quando participou de debates presidenciais. Sua presença ampliou sua visibilidade no cenário político nacional e o colocou entre as figuras públicas associadas à defesa de pautas inspiradas em princípios cristãos e conservadores.",
      "Nos anos seguintes, participou da criação do Foro do Brasil, iniciativa voltada ao debate sobre temas políticos e institucionais sob a perspectiva do conservadorismo, além de ampliar sua atuação em veículos de comunicação.",
      "Também é autor do livro Fé e Política de Mãos Dadas, obra na qual apresenta reflexões sobre a relação entre valores religiosos, participação cidadã e representação política.",
    ],
  },
  {
    heading: "Comunicação e presença nacional",
    paragraphs: [
      "Além da atuação religiosa, Padre Kelmon mantém presença constante em programas de televisão e plataformas digitais, onde comenta temas relacionados à política, liberdade religiosa, cidadania e questões sociais.",
      "Sua participação em entrevistas, debates e programas ampliou seu alcance junto a diferentes públicos interessados no debate político nacional.",
    ],
  },
  {
    heading: "Candidatura em 2026",
    paragraphs: [
      "Para as eleições de 2026, Padre Kelmon confirmou sua candidatura ao cargo de Deputado Federal pelo estado de São Paulo, pelo Partido Liberal (PL).",
      "Segundo declarações públicas, sua candidatura pretende representar eleitores que defendem maior participação dos princípios cristãos no debate político, além de temas relacionados à liberdade religiosa, à família, ao fortalecimento das instituições democráticas e ao desenvolvimento do país.",
      "Como ocorre com todos os candidatos, suas propostas e compromissos deverão ser apresentados e debatidos ao longo do período eleitoral, permitindo que os eleitores conheçam suas posições sobre os principais desafios nacionais.",
    ],
  },
  {
    heading: "Um nome em evidência no cenário político",
    paragraphs: [
      "Independentemente das diferentes posições existentes no debate público brasileiro, Padre Kelmon tornou-se uma figura conhecida da política nacional nos últimos anos. Sua trajetória reúne experiência na vida religiosa, participação em discussões públicas e atuação em meios de comunicação, elementos que contribuíram para consolidar sua presença no cenário político brasileiro e motivaram sua entrada na disputa por uma cadeira na Câmara dos Deputados nas eleições de 2026.",
    ],
  },
];

function SobrePortraitCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % SOBRE_PORTRAITS.length);
    }, SOBRE_ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[2/3] h-full min-h-[20rem] w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:min-h-[24rem]">
      {SOBRE_PORTRAITS.map((portrait, index) => (
        <img
          key={portrait.src}
          src={portrait.src}
          alt={portrait.alt}
          width={681}
          height={1024}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[1600ms] ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/10" />
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {SOBRE_PORTRAITS.map((portrait, index) => (
          <span
            key={portrait.src}
            aria-hidden="true"
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="historia"
      className="section-pad relative max-sm:!pt-3 md:-mt-[7%] md:scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))] lg:mt-0 lg:scroll-mt-[calc(4.5rem+env(safe-area-inset-top,0px))]"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
    >
      <PageShell>
        <div className="mb-10 grid items-stretch gap-6 sm:mb-14 md:mb-16 md:grid-cols-2 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 min-w-0 md:order-1"
          >
            <SobrePortraitCarousel />
          </motion.div>

          <div className="order-1 flex h-full min-w-0 flex-col justify-between md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 sm:mb-6"
            >
              <p
                className="mb-3 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--yellow-primary)" }}
              >
                Sobre Padre Kelmon
              </p>
              <h2
                className="text-[1.75rem] font-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
              >
                Uma Vida de Fé e Serviço
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              {BIO_PREVIEW.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-relaxed text-gray-700 text-justify sm:text-lg ${
                    index < BIO_PREVIEW.length - 1 ? "mb-4" : "mb-5"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="yellow" className="h-11 px-6 text-base font-bold">
                    Ler mais
                  </Button>
                </DialogTrigger>
                <DialogContent
                  hideCloseButton
                  className="max-h-[90dvh] w-[min(100%-1.5rem,42rem)] max-w-3xl gap-0 overflow-hidden border-2 border-blue-200 bg-white p-0 shadow-2xl sm:rounded-2xl"
                >
                  <DialogClose
                    className="absolute right-3 top-3 z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border-2 border-white/80 bg-[var(--blue-primary)] text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow-primary)] focus-visible:ring-offset-2"
                    aria-label="Fechar"
                  >
                    <X className="size-5 stroke-[2.5]" aria-hidden="true" />
                  </DialogClose>

                  <div className="max-h-[90dvh] overflow-y-auto">
                    <div
                      className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <img
                        src={heroPortrait}
                        alt="Padre Kelmon"
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-primary)]/80 via-transparent to-black/20" />
                      <div className="absolute bottom-4 left-5 right-14 sm:bottom-5 sm:left-7">
                        <p
                          className="mb-1 text-xs font-bold uppercase tracking-widest"
                          style={{ color: "var(--yellow-primary)" }}
                        >
                          Sobre Padre Kelmon
                        </p>
                        <p
                          className="text-lg font-black text-white sm:text-xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          Uma Vida de Fé e Serviço
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5 bg-gradient-to-b from-white to-slate-50 px-5 pb-7 pt-5 sm:px-7 sm:pb-8">
                      <DialogHeader className="space-y-3 text-left">
                        <DialogTitle
                          className="text-left text-xl font-black leading-tight sm:text-2xl"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--blue-primary)",
                          }}
                        >
                          Padre Kelmon: trajetória religiosa, atuação pública e candidatura à
                          Câmara dos Deputados
                        </DialogTitle>
                        <div
                          className="h-1 w-16 rounded-full"
                          style={{ background: "var(--gradient-yellow)" }}
                          aria-hidden="true"
                        />
                      </DialogHeader>

                      {BIO_FULL_SECTIONS.map((section) => (
                        <div key={section.heading} className="space-y-3">
                          {section.heading ? (
                            <h3
                              className="text-base font-black sm:text-lg"
                              style={{ color: "var(--blue-primary)" }}
                            >
                              {section.heading}
                            </h3>
                          ) : null}
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph.slice(0, 48)}
                              className="text-sm leading-relaxed text-gray-700 text-justify sm:text-base"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ))}

                      <div className="flex justify-end border-t border-blue-100 pt-5">
                        <DialogClose asChild>
                          <Button
                            variant="campaign"
                            className="h-11 px-6 font-bold text-white"
                            style={{ backgroundColor: "var(--blue-primary)" }}
                          >
                            Fechar
                          </Button>
                        </DialogClose>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative mt-6 overflow-hidden rounded-2xl p-6 shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--blue-primary), #0052a3)" }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)",
                  backgroundSize: "60px 60px",
                }}
              />
              <Quote className="relative mx-auto mb-3 size-6 text-yellow-400" aria-hidden="true" />
              <p
                className="relative text-center text-lg font-black leading-relaxed text-white sm:text-xl lg:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "Juntos vamos resgatar o Brasil."
              </p>
              <footer className="relative mt-3 text-center text-xs font-semibold uppercase tracking-wider text-yellow-300">
                Padre Kelmon — São Paulo, 2026
              </footer>
            </motion.blockquote>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {HIGHLIGHTS_SOBRE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl sm:p-6"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "var(--blue-primary)" }}
                  >
                    <Icon className="size-6 stroke-[2.5] text-white" aria-hidden="true" />
                  </span>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: "var(--yellow-primary)",
                      color: "var(--blue-primary)",
                    }}
                  >
                    <Award className="size-3" />
                    {item.year}
                  </div>
                </div>

                <h3
                  className="mb-3 text-lg font-black leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-700">{item.description}</p>

                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0, 102, 204, 0.05), transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            <span className="font-semibold" style={{ color: "var(--blue-primary)" }}>
              Fontes:
            </span>{" "}
            Foro Brasil (biografia oficial), Wikipédia e veículos de imprensa
          </p>
        </motion.div>
      </PageShell>
    </section>
  );
}
