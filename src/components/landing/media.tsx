import { ExternalLink } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";

// Ícones SVG Oficiais das Redes Sociais
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function Media() {

  // Redes Sociais - URLs reais dos posts
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: InstagramIcon,
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
      icon: YoutubeIcon,
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
      icon: TiktokIcon,
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
      icon: FacebookIcon,
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
              const IconComponent = social.icon;
              return (
                <div key={social.name} className="mb-10">
                  {/* Cabeçalho da Rede Social */}
                  <div className="mb-4 flex items-center gap-3">
                    <div 
                      className="inline-flex size-10 items-center justify-center rounded-xl p-2 text-white"
                      style={{ backgroundColor: social.color }}
                    >
                      <IconComponent />
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
                                  <div className="mx-auto size-16 mb-3 flex items-center justify-center" style={{ color: social.color, opacity: 0.4 }}>
                                    <IconComponent />
                                  </div>
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
                              <div className="size-4 flex items-center justify-center">
                                <IconComponent />
                              </div>
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
