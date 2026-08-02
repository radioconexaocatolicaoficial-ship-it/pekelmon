import { Instagram, Youtube, Music, Facebook, ExternalLink } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";

export function Media() {

  // Redes Sociais com 4 posts placeholder cada
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: Instagram,
      color: "#E4405F",
      posts: [
        { id: 1, title: "Post Instagram 1", description: "Substituir por imagem real do último post do Instagram @pekelmon", image: "" },
        { id: 2, title: "Post Instagram 2", description: "Substituir por imagem real do penúltimo post do Instagram @pekelmon", image: "" },
        { id: 3, title: "Post Instagram 3", description: "Substituir por imagem real do antepenúltimo post do Instagram @pekelmon", image: "" },
        { id: 4, title: "Post Instagram 4", description: "Substituir por imagem real do 4º último post do Instagram @pekelmon", image: "" },
      ]
    },
    {
      name: "YouTube",
      handle: "@PadreKelmonBr",
      url: "https://www.youtube.com/@PadreKelmonBr",
      icon: Youtube,
      color: "#FF0000",
      posts: [
        { id: 1, title: "Vídeo YouTube 1", description: "Substituir por thumbnail do último vídeo do YouTube @PadreKelmonBr", image: "" },
        { id: 2, title: "Vídeo YouTube 2", description: "Substituir por thumbnail do penúltimo vídeo do YouTube @PadreKelmonBr", image: "" },
        { id: 3, title: "Vídeo YouTube 3", description: "Substituir por thumbnail do antepenúltimo vídeo do YouTube @PadreKelmonBr", image: "" },
        { id: 4, title: "Vídeo YouTube 4", description: "Substituir por thumbnail do 4º último vídeo do YouTube @PadreKelmonBr", image: "" },
      ]
    },
    {
      name: "TikTok",
      handle: "@pekelmon",
      url: "https://www.tiktok.com/@pekelmon",
      icon: Music,
      color: "#000000",
      posts: [
        { id: 1, title: "Vídeo TikTok 1", description: "Substituir por thumbnail do último vídeo do TikTok @pekelmon", image: "" },
        { id: 2, title: "Vídeo TikTok 2", description: "Substituir por thumbnail do penúltimo vídeo do TikTok @pekelmon", image: "" },
        { id: 3, title: "Vídeo TikTok 3", description: "Substituir por thumbnail do antepenúltimo vídeo do TikTok @pekelmon", image: "" },
        { id: 4, title: "Vídeo TikTok 4", description: "Substituir por thumbnail do 4º último vídeo do TikTok @pekelmon", image: "" },
      ]
    },
    {
      name: "Facebook",
      handle: "PadreKelmon",
      url: "https://www.facebook.com/PadreKelmon",
      icon: Facebook,
      color: "#1877F2",
      posts: [
        { id: 1, title: "Post Facebook 1", description: "Substituir por imagem do último post do Facebook PadreKelmon", image: "" },
        { id: 2, title: "Post Facebook 2", description: "Substituir por imagem do penúltimo post do Facebook PadreKelmon", image: "" },
        { id: 3, title: "Post Facebook 3", description: "Substituir por imagem do antepenúltimo post do Facebook PadreKelmon", image: "" },
        { id: 4, title: "Post Facebook 4", description: "Substituir por imagem do 4º último post do Facebook PadreKelmon", image: "" },
      ]
    },
  ];

  return (
    <section id="midia" className="bg-card/30" style={{ scrollMarginTop: '80px', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          <SectionHeading
            eyebrow="Mídia"
            title="Padre Kelmon nas Redes Sociais"
            subtitle="Acompanhe as publicações, vídeos e mensagens do Padre Kelmon nas principais plataformas digitais."
          />

          {/* Seção de Redes Sociais */}
          <div className="mt-10">
            <h3 className="mb-6 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
              Redes Sociais
            </h3>
            
            {socialMedia.map((social, socialIndex) => {
              const Icon = social.icon;
              return (
                <div key={social.name} className="mb-10">
                  {/* Cabeçalho da Rede Social */}
                  <div className="mb-4 flex items-center gap-3">
                    <div 
                      className="inline-flex size-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: social.color }}
                    >
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold" style={{ color: 'var(--blue-primary)' }}>
                        {social.name}
                      </h4>
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {social.handle}
                      </a>
                    </div>
                  </div>

                  {/* Grid 4 Cards por Linha */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {social.posts.map((post, postIndex) => (
                      <Reveal key={`${social.name}-${post.id}`} delay={0.05 * postIndex}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                        >
                          {/* Imagem Placeholder */}
                          <div 
                            className="relative flex aspect-square items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' }}
                          >
                            <div className="text-center p-4">
                              <Icon className="mx-auto size-12 mb-2" style={{ color: social.color, opacity: 0.3 }} />
                              <div className="text-xs font-bold text-gray-500">
                                PLACEHOLDER
                              </div>
                              <div className="text-[10px] text-gray-400 mt-1">
                                Post {post.id}
                              </div>
                              <div className="mt-2 text-[9px] text-gray-400 leading-tight">
                                Substituir por imagem real
                              </div>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="p-3 bg-gray-50">
                            <p className="text-xs text-gray-600 line-clamp-2 font-medium">
                              {post.description}
                            </p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-semibold" style={{ color: social.color }}>
                              <ExternalLink className="size-3" />
                              Acessar {social.name}
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" style={{
                            background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.08), transparent)'
                          }} />
                        </a>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
