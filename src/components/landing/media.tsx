import { Instagram, Youtube, Music, Facebook, ExternalLink } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";

export function Media() {

  // Redes Sociais - URLs reais dos posts
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: Instagram,
      color: "#E4405F",
      posts: [
        { id: 1, postUrl: "https://www.instagram.com/p/CODIGO_POST_1/", embedUrl: "https://www.instagram.com/p/CODIGO_POST_1/embed" },
        { id: 2, postUrl: "https://www.instagram.com/p/CODIGO_POST_2/", embedUrl: "https://www.instagram.com/p/CODIGO_POST_2/embed" },
        { id: 3, postUrl: "https://www.instagram.com/p/CODIGO_POST_3/", embedUrl: "https://www.instagram.com/p/CODIGO_POST_3/embed" },
        { id: 4, postUrl: "https://www.instagram.com/p/CODIGO_POST_4/", embedUrl: "https://www.instagram.com/p/CODIGO_POST_4/embed" },
      ]
    },
    {
      name: "YouTube",
      handle: "@PadreKelmonBr",
      url: "https://www.youtube.com/@PadreKelmonBr",
      icon: Youtube,
      color: "#FF0000",
      posts: [
        { id: 1, postUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1", embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1" },
        { id: 2, postUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2", embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2" },
        { id: 3, postUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3", embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3" },
        { id: 4, postUrl: "https://www.youtube.com/watch?v=VIDEO_ID_4", embedUrl: "https://www.youtube.com/embed/VIDEO_ID_4" },
      ]
    },
    {
      name: "TikTok",
      handle: "@pekelmon",
      url: "https://www.tiktok.com/@pekelmon",
      icon: Music,
      color: "#000000",
      posts: [
        { id: 1, postUrl: "https://www.tiktok.com/@pekelmon/video/VIDEO_ID_1", embedUrl: "https://www.tiktok.com/embed/VIDEO_ID_1" },
        { id: 2, postUrl: "https://www.tiktok.com/@pekelmon/video/VIDEO_ID_2", embedUrl: "https://www.tiktok.com/embed/VIDEO_ID_2" },
        { id: 3, postUrl: "https://www.tiktok.com/@pekelmon/video/VIDEO_ID_3", embedUrl: "https://www.tiktok.com/embed/VIDEO_ID_3" },
        { id: 4, postUrl: "https://www.tiktok.com/@pekelmon/video/VIDEO_ID_4", embedUrl: "https://www.tiktok.com/embed/VIDEO_ID_4" },
      ]
    },
    {
      name: "Facebook",
      handle: "PadreKelmon",
      url: "https://www.facebook.com/PadreKelmon",
      icon: Facebook,
      color: "#1877F2",
      posts: [
        { id: 1, postUrl: "https://www.facebook.com/PadreKelmon/posts/POST_ID_1", embedUrl: "" },
        { id: 2, postUrl: "https://www.facebook.com/PadreKelmon/posts/POST_ID_2", embedUrl: "" },
        { id: 3, postUrl: "https://www.facebook.com/PadreKelmon/posts/POST_ID_3", embedUrl: "" },
        { id: 4, postUrl: "https://www.facebook.com/PadreKelmon/posts/POST_ID_4", embedUrl: "" },
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
            subtitle="Acompanhe diariamente as publicações, vídeos, mensagens e posicionamentos do Padre Kelmon nas principais plataformas digitais. Fique por dentro da agenda, conheça as propostas e participe ativamente desta caminhada por São Paulo e pelo Brasil através das redes sociais oficiais."
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
                          href={post.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                        >
                          {/* Iframe Embed ou Placeholder */}
                          <div className="relative aspect-square overflow-hidden bg-gray-100">
                            {post.embedUrl && !post.embedUrl.includes('CODIGO') && !post.embedUrl.includes('VIDEO_ID') && !post.embedUrl.includes('POST_ID') ? (
                              <iframe
                                src={post.embedUrl}
                                className="h-full w-full"
                                frameBorder="0"
                                allowFullScreen
                                title={`${social.name} Post ${post.id}`}
                              />
                            ) : (
                              <div 
                                className="flex h-full w-full items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' }}
                              >
                                <div className="text-center p-4">
                                  <Icon className="mx-auto size-16 mb-3" style={{ color: social.color, opacity: 0.4 }} />
                                  <div className="text-xs font-bold text-gray-600 mb-2">
                                    {social.name}
                                  </div>
                                  <div className="text-[10px] text-gray-500 leading-tight px-2">
                                    Substituir CODIGO/VIDEO_ID/POST_ID pela URL real do post
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="p-3 bg-gray-50">
                            <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: social.color }}>
                              <Icon className="size-4" />
                              <span>Ver no {social.name}</span>
                              <ExternalLink className="ml-auto size-3" />
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
