import { Quote, Calendar, Award, BookOpen, GraduationCap, Heart, Users, Megaphone, Scale, Tv } from "lucide-react";
import { motion } from "motion/react";

import sobreImg from "@/assets/Sobre-Padre-Kelmon.webp";
import { PageShell } from "./primitives";

// Dados resumidos em cards
const HIGHLIGHTS_SOBRE = [
  {
    icon: Calendar,
    year: "1976-1995",
    title: "Raízes e Formação Católica",
    description: "Nascimento em Salvador (21/10/1976). Batismo, Eucaristia, Crisma. Liderança na Legião de Maria e cofundador do grupo JUSPE.",
  },
  {
    icon: BookOpen,
    year: "1996-2003",
    title: "Convento e Seminário",
    description: "Convento dos Capuchinhos em Maceió. Seminário Maria Mater Ecclesiae em SP. Formação em Filosofia, Teologia e Pedagogia.",
  },
  {
    icon: GraduationCap,
    year: "2014-2015",
    title: "Ordenação Sacerdotal",
    description: "Funda a associação Theotokos. Ordenado diácono (2014) e sacerdote (2015) na Igreja Ortodoxa da América.",
  },
  {
    icon: Heart,
    year: "2010-2017",
    title: "Ativismo e Missões",
    description: "Campanha pró-vida em 2010. Missão humanitária em Roraima (2017) auxiliando refugiados venezuelanos.",
  },
  {
    icon: Users,
    year: "2019-2021",
    title: "Movimento Cristão Conservador",
    description: "Conhece Roberto Jefferson. Funda o MCC a pedido do PTB, tornando-se seu primeiro presidente nacional.",
  },
  {
    icon: Megaphone,
    year: "2022",
    title: "Candidatura Presidencial",
    description: "Candidato à Presidência pelo PTB. Debates nacionais no SBT e Globo. Obtém 81.129 votos em 19 dias de campanha.",
  },
  {
    icon: Scale,
    year: "2023-2024",
    title: "Foro do Brasil e Livro",
    description: "Funda o Foro do Brasil (29/06/2023). Lança o livro 'Fé e Política de Mãos Dadas'. Filia-se ao PL em agosto/2024.",
  },
  {
    icon: Tv,
    year: "2025-2026",
    title: "TV e Deputado Federal",
    description: "Programas na VV8 TV: 'Confessionário' e 'Oração pelo Brasil'. Pré-candidato a Deputado Federal por São Paulo (PL).",
  },
];

export function About() {
  return (
    <section
      id="historia"
      className="section-pad relative"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}
    >
      <PageShell>
          <div className="mb-10 grid items-stretch gap-8 sm:mb-14 lg:mb-16 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl lg:h-full">
                <img
                  src={sobreImg}
                  alt="Padre Kelmon — biografia e trajetória"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto h-auto w-full object-contain object-center lg:h-full lg:object-cover lg:object-top"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/10" />
              </div>
            </motion.div>

            <div className="flex h-full flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-5 sm:mb-6"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--yellow-primary)' }}>
                  Sobre Padre Kelmon
                </p>
                <h2 className="text-[1.75rem] font-black sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
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
                <p className="mb-4 text-base leading-relaxed text-gray-700 text-justify sm:text-lg">
                  Nascido em Salvador em 1976, Padre Kelmon dedicou mais de 30 anos à vida religiosa, à formação da juventude e ao ativismo conservador cristão. Da Legião de Maria ao seminário, do convento à ordenação sacerdotal, de missões humanitárias à fundação do Movimento Cristão Conservador e do Foro do Brasil.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700 text-justify sm:text-lg">
                  Com formação acadêmica em Filosofia, Teologia e Pedagogia, tornou-se nacionalmente conhecido em 2022 ao participar dos debates presidenciais defendendo valores cristãos. Fundou o Foro do Brasil no Congresso Nacional em 2023 e lançou o livro "Fé e Política de Mãos Dadas" em 2024.
                </p>
                <p className="text-base leading-relaxed text-gray-700 text-justify sm:text-lg">
                  Hoje apresenta programas na VV8 TV e confirma sua pré-candidatura a Deputado Federal por São Paulo pelo Partido Liberal, afirmando cumprir "a missão de Deus" para representar a fé, a família e o Brasil no Congresso Nacional.
                </p>
              </motion.div>

              {/* Citação Azul - Abaixo do Texto */}
              <motion.blockquote 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative mt-6 overflow-hidden rounded-2xl p-6 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--blue-primary), #0052a3)' }}
              >
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)',
                  backgroundSize: '60px 60px'
                }} />
                <Quote className="relative mx-auto mb-3 size-6 text-yellow-400" aria-hidden="true" />
                <p className="relative text-lg font-black leading-relaxed text-white sm:text-xl lg:text-2xl text-center" style={{ fontFamily: 'var(--font-display)' }}>
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
                  
                  {/* Título */}
                  <h3 className="mb-3 text-lg font-black leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                    {item.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-sm leading-relaxed text-gray-700">
                    {item.description}
                  </p>

                  {/* Efeito de hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.05), transparent)'
                  }} />
                </motion.div>
              );
            })}
          </div>

          {/* Rodapé */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-gray-500">
              <span className="font-semibold" style={{ color: 'var(--blue-primary)' }}>Fontes:</span> Foro Brasil (biografia oficial), Wikipédia e veículos de imprensa
            </p>
          </motion.div>
      </PageShell>
    </section>
  );
}
