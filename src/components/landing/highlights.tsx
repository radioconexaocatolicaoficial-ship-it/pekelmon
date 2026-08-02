import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const HIGHLIGHTS = [
  {
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop",
    title: "Livro: Minha História",
    description: "Conheça a trajetória de fé, dedicação e compromisso com o povo brasileiro. Uma história de vida dedicada a servir.",
    link: "https://www.instagram.com/stories/highlights/18045041203609288/",
    linkText: "Saiba mais",
  },
  {
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=250&fit=crop",
    title: "Foro do Brasil",
    description: "Participação ativa nos debates mais importantes do país. Compromisso com o diálogo e as transformações necessárias.",
    link: "https://www.instagram.com/stories/highlights/17920916735842429/",
    linkText: "Ver histórias",
  },
  {
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=250&fit=crop",
    title: "Partido Liberal",
    description: "Filiado ao PL 22, partido comprometido com a liberdade, família e valores conservadores do povo brasileiro.",
    link: "https://partidoliberal.org.br/",
    linkText: "Conheça o PL",
  },
];

export function Highlights() {
  return (
    <section className="relative -mt-20 pb-16">
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => {
              return (
                <Card key={index} className="group overflow-hidden border-2 bg-white shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
                      {item.title}
                    </h3>
                    
                    <p className="mb-6 text-sm text-gray-600 leading-relaxed">
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
