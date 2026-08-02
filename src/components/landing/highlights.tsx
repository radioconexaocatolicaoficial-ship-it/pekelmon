import { BookOpen, Users, Flag } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: "Livro: Minha História",
    description: "Conheça a trajetória de fé, dedicação e compromisso com o povo brasileiro. Uma história de vida dedicada a servir.",
    link: "https://www.instagram.com/stories/highlights/18045041203609288/",
    linkText: "Saiba mais",
    color: "var(--blue-primary)",
  },
  {
    icon: Users,
    title: "Foro do Brasil",
    description: "Participação ativa nos debates mais importantes do país. Compromisso com o diálogo e as transformações necessárias.",
    link: "https://www.instagram.com/stories/highlights/17920916735842429/",
    linkText: "Ver histórias",
    color: "var(--blue-primary)",
  },
  {
    icon: Flag,
    title: "Partido Liberal",
    description: "Filiado ao PL 22, partido comprometido com a liberdade, família e valores conservadores do povo brasileiro.",
    link: "https://partidoliberal.org.br/",
    linkText: "Conheça o PL",
    color: "var(--blue-primary)",
  },
];

export function Highlights() {
  return (
    <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
              Destaques da Campanha
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Conheça mais sobre nossa trajetória e compromissos
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="group overflow-hidden border-2 transition-all hover:border-blue-500 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div 
                      className="mb-4 inline-flex rounded-full p-4 transition-transform group-hover:scale-110" 
                      style={{ backgroundColor: 'rgba(0, 102, 204, 0.1)' }}
                    >
                      <Icon className="size-8 stroke-[2.5]" style={{ color: item.color }} />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                      {item.title}
                    </h3>
                    
                    <p className="mb-6 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-2 font-bold transition-colors hover:bg-blue-600 hover:text-white"
                      style={{ borderColor: 'var(--blue-primary)', color: 'var(--blue-primary)' }}
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
        </div>
      </div>
    </section>
  );
}
