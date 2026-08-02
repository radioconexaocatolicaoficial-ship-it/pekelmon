import { Quote, Calendar, Award } from "lucide-react";
import { motion } from "motion/react";

import { CANDIDATE, TIMELINE } from "@/lib/campaign-data";

export function About() {
  return (
    <section id="historia" className="relative py-24 pt-32" style={{ background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          {/* Título da Seção */}
          <div className="mb-16 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--yellow-primary)' }}
            >
              Quem é Padre Kelmon
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
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              De Salvador a Brasília, do seminário aos debates nacionais: conheça a trajetória de mais de 30 anos dedicados à fé, à família e ao Brasil.
            </motion.p>
          </div>

          {/* Citação Destacada */}
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mb-20 max-w-4xl overflow-hidden rounded-3xl p-10 text-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg, var(--blue-primary), #0052a3)' }}
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)',
              backgroundSize: '60px 60px'
            }} />
            <Quote className="relative mx-auto mb-6 size-12 text-yellow-400" aria-hidden="true" />
            <p className="relative text-2xl font-black leading-relaxed text-white sm:text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              "Juntos vamos resgatar o Brasil."
            </p>
            <footer className="relative mt-6 text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Padre Kelmon — São Paulo, 2026
            </footer>
          </motion.blockquote>

          {/* Timeline Moderna */}
          <div className="relative">
            {/* Linha vertical (desktop) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full md:left-1/2 md:-translate-x-1/2" style={{ background: 'linear-gradient(to bottom, var(--blue-primary), var(--yellow-primary))' }} />
            
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Bolinha na timeline */}
                  <div className="absolute left-0 top-6 z-10 flex size-12 items-center justify-center rounded-full border-4 border-white shadow-lg md:left-1/2 md:-translate-x-1/2" style={{ backgroundColor: 'var(--blue-primary)' }}>
                    <Calendar className="size-5 text-white" />
                  </div>

                  {/* Conteúdo */}
                  <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? 'md:col-start-1 md:text-right md:pr-24' : 'md:col-start-2 md:pl-24'}`}>
                    <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl">
                      {/* Badge do ano */}
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-sm" style={{ backgroundColor: 'var(--yellow-primary)', color: 'var(--blue-primary)' }}>
                        <Award className="size-4" />
                        {item.year}
                      </div>
                      
                      {/* Título */}
                      <h3 className="mb-3 text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                        {item.title}
                      </h3>
                      
                      {/* Descrição */}
                      <p className="leading-relaxed text-gray-700">
                        {item.description}
                      </p>

                      {/* Efeito de hover */}
                      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100" style={{
                        background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.05), transparent)'
                      }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
