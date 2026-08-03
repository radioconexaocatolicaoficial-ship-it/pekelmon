import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { PageShell } from "./primitives";

import livroImg from "@/assets/livro-padre-kelmon.jpg";
import foroImg from "@/assets/foro-do-brasil.jpg";
import plImg from "@/assets/pl-filie-se.jpg";

const HIGHLIGHTS = [
  {
    image: livroImg,
    title: "Livro: Minha História",
    description:
      "Conheça a trajetória de fé, dedicação e compromisso com o povo brasileiro. Uma história de vida dedicada a servir.",
    link: "https://www.instagram.com/stories/highlights/18045041203609288/",
    linkText: "Saiba mais",
  },
  {
    image: foroImg,
    title: "Foro do Brasil",
    description:
      "Participação ativa nos debates mais importantes do país. Compromisso com o diálogo e as transformações necessárias.",
    link: "https://www.instagram.com/stories/highlights/17920916735842429/",
    linkText: "Ver histórias",
  },
  {
    image: plImg,
    title: "Partido Liberal",
    description:
      "Filiado ao PL 22, partido comprometido com a liberdade, família e valores conservadores do povo brasileiro.",
    link: "https://partidoliberal.org.br/",
    linkText: "Conheça o PL",
  },
];

export function Highlights() {
  return (
    <section
      id="destaques"
      aria-labelledby="destaques-heading"
      className="relative -mt-10 pb-12 sm:-mt-12 sm:pb-16"
    >
      <PageShell>
        <h2 id="destaques-heading" className="sr-only">
          Destaques da campanha
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => {
            return (
              <Card
                key={index}
                className="group overflow-hidden border-2 bg-white shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="relative h-40 w-full overflow-hidden sm:h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h3
                    className="mb-2.5 text-lg font-black"
                    style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-600">{item.description}</p>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-11 w-full border-2 font-bold transition-colors hover:bg-blue-600 hover:text-white"
                    style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)" }}
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.linkText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
