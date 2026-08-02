import { useState } from "react";
import { Expand, PlayCircle, Instagram, Youtube, Music, Facebook, ExternalLink } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./primitives";
import { GALLERY, VIDEOS, type GalleryItem } from "@/lib/campaign-data";

export function Media() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  // Redes Sociais com 4 posts placeholder cada
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@pekelmon",
      url: "https://www.instagram.com/pekelmon/",
      icon: Instagram,
      color: "#E4405F",
      posts: [
        { id: 1, title: "Post 1", description: "Conteúdo do Instagram" },
        { id: 2, title: "Post 2", description: "Conteúdo do Instagram" },
        { id: 3, title: "Post 3", description: "Conteúdo do Instagram" },
        { id: 4, title: "Post 4", description: "Conteúdo do Instagram" },
      ]
    },
    {
      name: "YouTube",
      handle: "@PadreKelmonBr",
      url: "https://www.youtube.com/@PadreKelmonBr",
      icon: Youtube,
      color: "#FF0000",
      posts: [
        { id: 1, title: "Vídeo 1", description: "Conteúdo do YouTube" },
        { id: 2, title: "Vídeo 2", description: "Conteúdo do YouTube" },
        { id: 3, title: "Vídeo 3", description: "Conteúdo do YouTube" },
        { id: 4, title: "Vídeo 4", description: "Conteúdo do YouTube" },
      ]
    },
    {
      name: "TikTok",
      handle: "@pekelmon",
      url: "https://www.tiktok.com/@pekelmon",
      icon: Music,
      color: "#000000",
      posts: [
        { id: 1, title: "Vídeo 1", description: "Conteúdo do TikTok" },
        { id: 2, title: "Vídeo 2", description: "Conteúdo do TikTok" },
        { id: 3, title: "Vídeo 3", description: "Conteúdo do TikTok" },
        { id: 4, title: "Vídeo 4", description: "Conteúdo do TikTok" },
      ]
    },
    {
      name: "Facebook",
      handle: "PadreKelmon",
      url: "https://www.facebook.com/PadreKelmon",
      icon: Facebook,
      color: "#1877F2",
      posts: [
        { id: 1, title: "Post 1", description: "Conteúdo do Facebook" },
        { id: 2, title: "Post 2", description: "Conteúdo do Facebook" },
        { id: 3, title: "Post 3", description: "Conteúdo do Facebook" },
        { id: 4, title: "Post 4", description: "Conteúdo do Facebook" },
      ]
    },
  ];

  return (
    <section id="midia" className="bg-card/30" style={{ scrollMarginTop: '80px', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          <SectionHeading
            eyebrow="Mídia"
            title="Galeria e Vídeos"
            subtitle="Registros da caminhada, momentos da agenda e vídeos oficiais da campanha. Acervo completo disponível no Instagram @pekelmon."
          />

          {/* Seção de Vídeos */}
          <div className="mt-10">
            <h3 className="mb-6 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
              Vídeos
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {VIDEOS.map((v, i) => (
                <Reveal key={v.title} delay={0.06 * i}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative flex aspect-video items-center justify-center bg-[image:var(--gradient-hero)]">
                      <PlayCircle
                        className="size-14 text-white transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                        Placeholder
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h4 className="text-base font-semibold">{v.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                      <span className="mt-4 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--blue-primary)' }}>
                        Assistir no perfil oficial
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

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
                            style={{ background: 'linear-gradient(135deg, var(--blue-primary), #0052a3)' }}
                          >
                            <Icon className="size-12 text-white/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-white/80">
                                {social.name} {post.id}
                              </span>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="p-3">
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {post.description}
                            </p>
                            <div className="mt-2 flex items-center gap-1 text-xs font-semibold" style={{ color: social.color }}>
                              <ExternalLink className="size-3" />
                              Ver no {social.name}
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

          {/* Seção de Galeria */}
          <div className="mt-10">
            <h3 className="mb-6 text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--blue-primary)' }}>
              Galeria de Fotos
            </h3>
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {GALLERY.map((item, i) => (
                <Reveal key={item.src} delay={0.04 * i} className="break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setActive(item)}
                    aria-label={`Ampliar imagem: ${item.alt}`}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-border/70 hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 text-left text-xs text-foreground">
                        <Expand className="size-4 shrink-0" style={{ color: 'var(--blue-primary)' }} aria-hidden="true" />
                        {item.caption}
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl border-border bg-card p-2">
          <DialogTitle className="sr-only">{active?.alt ?? "Imagem"}</DialogTitle>
          {active ? (
            <figure>
              <img
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <figcaption className="px-2 py-3 text-center text-xs text-muted-foreground">
                {active.caption}
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
