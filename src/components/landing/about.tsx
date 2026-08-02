import { Quote, Calendar, Award, BookOpen, GraduationCap, Heart, Users, Megaphone, Scale, Tv, Vote } from "lucide-react";
import { motion } from "motion/react";

import { CANDIDATE } from "@/lib/campaign-data";
import heroPortrait from "@/assets/hero-portrait.png";

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
    <section id="historia" className="relative py-16" style={{ background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          {/* Título da Seção */}
          <div className="mb-12 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--yellow-primary)' }}
            >
              Sobre Padre Kelmon
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}
            >
              Uma Vida de Fé e Serviço
            </motion.h2>
          </div>

          {/* Layout 2 Colunas: Foto Esquerda + Texto Direita */}
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-[400px_1fr]">
            {/* Foto Esquerda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-sm lg:mx-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Padre Kelmon"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 ring-2 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </motion.div>

            {/* Texto Direita */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
                Nascido em Salvador em 1976, Padre Kelmon dedicou mais de 30 anos à vida religiosa, à formação da juventude e ao ativismo conservador cristão. Da Legião de Maria ao seminário, do convento à ordenação sacerdotal, de missões humanitárias à fundação do Movimento Cristão Conservador e do Foro do Brasil.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
                Em 2022, tornou-se nacionalmente conhecido ao participar dos debates presidenciais defendendo valores cristãos. Hoje, com formação em Filosofia, Teologia e Pedagogia, apresenta programas na VV8 TV e confirma sua pré-candidatura a Deputado Federal por São Paulo pelo PL, afirmando cumprir "a missão de Deus" para representar a fé, a família e o Brasil no Congresso Nacional.
              </p>
            </motion.div>
          </div>

          {/* Citação Destacada - Menor e mais discreta */}
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-2xl p-8 text-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--blue-primary), #0052a3)' }}
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)',
              backgroundSize: '60px 60px'
            }} />
            <Quote className="relative mx-auto mb-4 size-8 text-yellow-400" aria-hidden="true" />
            <p className="relative text-xl font-black leading-relaxed text-white sm:text-2xl lg:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              "Juntos vamos resgatar o Brasil."
            </p>
            <footer className="relative mt-4 text-xs font-semibold uppercase tracking-wider text-yellow-300">
              Padre Kelmon — São Paulo, 2026
            </footer>
          </motion.blockquote>

          {/* Grid de Cards - 2 linhas x 4 colunas */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS_SOBRE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Ícone */}
                  <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--blue-primary)' }}>
                    <Icon className="size-7 stroke-[2] text-white" />
                  </div>

                  {/* Badge do ano */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: 'var(--yellow-primary)', color: 'var(--blue-primary)' }}>
                    <Award className="size-3" />
                    {item.year}
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
            className="mt-20 text-center"
          >
            <p className="text-sm text-gray-500">
              <span className="font-semibold" style={{ color: 'var(--blue-primary)' }}>Fontes:</span> Foro Brasil (biografia oficial), Wikipédia e veículos de imprensa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
