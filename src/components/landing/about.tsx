import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import sobreRotating1 from "@/assets/sobre-rotating-1.webp";
import sobreRotating2 from "@/assets/sobre-rotating-2.webp";
import sobreRotating3 from "@/assets/sobre-rotating-3.webp";
import { Button } from "@/components/ui/button";
import { PageShell } from "./primitives";
import { TimelineCards } from "./timeline-cards";
import { cn } from "@/lib/utils";

const SOBRE_PORTRAITS = [
  {
    src: sobreRotating1,
    alt: "Padre Kelmon, retrato com fundo amarelo",
  },
  {
    src: sobreRotating2,
    alt: "Padre Kelmon, retrato com fundo azul",
  },
  {
    src: sobreRotating3,
    alt: "Padre Kelmon, retrato com fundo verde",
  },
] as const;

const SOBRE_ROTATE_MS = 5500;

/** Preview curto — mesma altura aproximada do bloco atual (3 parágrafos). */
const BIO_PREVIEW = [
  "Padre Kelmon nasceu em Salvador, na Bahia, em 1976. Há mais de 30 anos vive a fé no dia a dia: formação, pastoral e o debate público.",
  "Começou na juventude, na Legião de Maria. Depois estudou Filosofia, Teologia e Pedagogia e atuou em missões e ações humanitárias.",
  "Em 2026, confirma a candidatura a Deputado Federal por São Paulo pelo Partido Liberal (PL).",
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

export function About({
  headingAs = "h2",
  standalone = false,
}: {
  headingAs?: "h1" | "h2";
  standalone?: boolean;
}) {
  const Heading = headingAs;
  return (
    <section
      id="historia"
      className={cn(
        "section-pad relative",
        standalone
          ? "bg-white"
          : "max-sm:!pt-3 md:-mt-[7%] md:scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))] lg:mt-0 lg:scroll-mt-[calc(4.5rem+env(safe-area-inset-top,0px))]",
      )}
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
              <Heading
                className="text-[1.75rem] font-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
              >
                Uma Vida de Fé e Serviço
              </Heading>
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

              <Button asChild variant="yellow" className="h-11 px-6 text-base font-bold">
                <Link to="/saiba-mais">Saiba mais</Link>
              </Button>
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
                Padre Kelmon, São Paulo, 2026
              </footer>
            </motion.blockquote>
          </div>
        </div>

        <TimelineCards />
      </PageShell>
    </section>
  );
}
