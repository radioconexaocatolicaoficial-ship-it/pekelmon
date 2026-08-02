import { useState } from "react";
import { Expand, PlayCircle } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./primitives";
import { GALLERY, VIDEOS, type GalleryItem } from "@/lib/campaign-data";

export function Media() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="midia" className="section-y border-t border-border/50" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1120px', paddingLeft: '0', paddingRight: '0' }}>
        <div className="px-5 lg:px-0">
          <SectionHeading
            eyebrow="Mídia"
            title="Galeria e Vídeos"
            subtitle="Registros da caminhada, momentos da agenda e vídeos oficiais da campanha. Acervo completo disponível no Instagram @pekelmon."
          />

          {/* Seção de Vídeos */}
          <div className="mt-12">
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

          {/* Seção de Galeria */}
          <div className="mt-16">
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
