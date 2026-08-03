import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { getSocialFeeds, type SocialNetworkId, type SocialPost } from "@/lib/social-feeds";

import { PageShell, Reveal } from "./primitives";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ICONS: Record<SocialNetworkId, () => ReactNode> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
  x: XIcon,
  facebook: FacebookIcon,
};

function CoverImageCard({
  post,
  color,
  label,
  aspectClass = "aspect-square",
}: {
  post: SocialPost;
  color: string;
  label: string;
  aspectClass?: string;
}) {
  const imageSrc = post.thumbnail;
  const isFacebook = label === "Facebook";

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block ${aspectClass} overflow-hidden rounded-xl border-2 bg-neutral-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
      style={{ borderColor: color + "40" }}
      aria-label={`Abrir publicação no ${label}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`Publicação recente de ${label} — Padre Kelmon`}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            if (isFacebook && !img.dataset.fallbackTried) {
              img.dataset.fallbackTried = "1";
              img.src = "/facebook/default.jpg";
              return;
            }
            img.style.display = "none";
            const fallback = img.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.hidden = false;
          }}
        />
      ) : null}
      <span
        hidden={Boolean(imageSrc)}
        className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
        style={{ background: `linear-gradient(160deg, ${color}22, ${color}55)` }}
      >
        <span
          className="inline-flex size-12 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          <ExternalLink className="size-5" />
        </span>
        <span className="text-sm font-bold" style={{ color }}>
          Ver no {label}
        </span>
      </span>
      <span className="absolute inset-0 z-10 bg-black/0 transition-colors group-hover:bg-black/15" />
      <span className="absolute bottom-3 right-3 z-20 inline-flex size-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <ExternalLink className="size-4" />
      </span>
    </a>
  );
}

function PostCard({
  post,
  networkId,
  color,
  profileUrl,
}: {
  post: SocialPost | null;
  networkId: SocialNetworkId;
  color: string;
  profileUrl: string;
}) {
  if (!post) {
    return (
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border-2 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:min-h-[280px]"
        style={{ borderColor: color + "40" }}
      >
        <span className="text-sm font-semibold" style={{ color }}>
          Ver perfil
        </span>
        <span className="text-xs text-gray-500">Abrir publicações mais recentes</span>
      </a>
    );
  }

  if (networkId === "instagram") {
    return <CoverImageCard post={post} color={color} label="Instagram" />;
  }

  if (networkId === "tiktok") {
    return (
      <CoverImageCard post={post} color={color} label="TikTok" aspectClass="aspect-[4/5]" />
    );
  }

  if (networkId === "x") {
    return <CoverImageCard post={post} color={color} label="X" aspectClass="aspect-[4/5]" />;
  }

  // Facebook embeds (iframe) often fail on mobile — use image cards like IG/X
  if (networkId === "facebook") {
    return (
      <CoverImageCard post={post} color={color} label="Facebook" aspectClass="aspect-[4/5]" />
    );
  }

  return (
    <div
      className="overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: color + "40" }}
    >
      <div className="aspect-video">
        <iframe
          src={post.embedUrl}
          title={post.title ?? `Publicação ${networkId}`}
          className="h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 border-t px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-700"
      >
        <span className="truncate">{post.title ?? "Abrir publicação"}</span>
        <ExternalLink className="size-3.5 shrink-0" />
      </a>
    </div>
  );
}

function PostSkeleton({ color }: { color: string }) {
  return (
    <div
      className="min-h-[220px] animate-pulse rounded-xl border-2 bg-white sm:min-h-[280px]"
      style={{ borderColor: color + "30" }}
    >
      <div className="aspect-video bg-gray-100" />
      <div className="h-9 bg-gray-50" />
    </div>
  );
}

export function Media() {
  // Importante: SSR e 1º render no cliente devem ser iguais (evita React #418).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["social-feeds", "v12-facebook-official"],
    queryFn: () => getSocialFeeds(),
    staleTime: 15 * 60 * 1000,
    refetchInterval: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: ready,
  });

  const networks = data?.networks ?? [];
  const showPlaceholders = ready && isLoading;
  const featuredVideoId = "EI-bTS70q0U";

  return (
    <section id="midia" className="section-pad bg-card/30">
      <PageShell>
          <div className="mb-8 grid items-stretch gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p
                className="mb-3 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--yellow-primary)" }}
              >
                Mídia
              </p>
              <h2
                className="mb-4 text-[1.75rem] font-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
              >
                Padre Kelmon nas Redes Sociais
              </h2>
              <p className="text-sm leading-relaxed text-gray-700 text-justify sm:text-base">
                Acompanhe diariamente as publicações, vídeos, mensagens e posicionamentos do Padre
                Kelmon nas principais plataformas digitais. Os cards abaixo exibem automaticamente
                as 4 publicações mais recentes de cada rede.
              </p>
              {data?.updatedAt ? (
                <p className="mt-3 text-xs text-gray-500">
                  Atualizado automaticamente
                  {isFetching ? " · buscando novidades…" : ""}
                </p>
              ) : null}
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${featuredVideoId}`}
                title="Padre Kelmon - Vídeo em destaque"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
            {(showPlaceholders ? placeholderNetworks() : networks).map((social) => {
              const IconComponent = ICONS[social.id as SocialNetworkId] ?? InstagramIcon;
              const posts = "posts" in social ? social.posts : [];
              const slots = Array.from({ length: 4 }, (_, i) => posts[i] ?? null);

              return (
                <div key={social.name} className="space-y-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl p-2 text-white"
                        style={{ backgroundColor: social.color }}
                      >
                        <IconComponent />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold" style={{ color: "var(--blue-primary)" }}>
                          {social.name}
                        </h3>
                        <a
                          href={social.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate text-sm text-gray-600 transition-colors hover:text-blue-600"
                        >
                          {social.handle}
                        </a>
                      </div>
                    </div>

                    <a
                      href={social.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 sm:h-auto sm:w-auto"
                      style={{ backgroundColor: social.color }}
                    >
                      <span>Ver todos</span>
                      <ExternalLink className="size-4" />
                    </a>
                  </div>

                  <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
                    {showPlaceholders
                      ? slots.map((_, index) => (
                          <Reveal
                            key={`${social.name}-sk-${index}`}
                            delay={0.05 * index}
                            className="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink"
                          >
                            <PostSkeleton color={social.color} />
                          </Reveal>
                        ))
                      : slots.map((post, index) => (
                          <Reveal
                            key={`${social.name}-${post?.id ?? index}`}
                            delay={0.05 * index}
                            className="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink"
                          >
                            <PostCard
                              post={post}
                              networkId={social.id as SocialNetworkId}
                              color={social.color}
                              profileUrl={social.profileUrl}
                            />
                          </Reveal>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
      </PageShell>
    </section>
  );
}

function placeholderNetworks() {
  return (
    [
      ["instagram", "Instagram", "@pekelmon", "https://www.instagram.com/pekelmon/", "#E4405F"],
      ["youtube", "YouTube", "@PadreKelmonBr", "https://www.youtube.com/@PadreKelmonBr", "#FF0000"],
      ["tiktok", "TikTok", "@pekelmon", "https://www.tiktok.com/@pekelmon", "#000000"],
      ["x", "X", "@PeKelmon", "https://x.com/PeKelmon", "#000000"],
      ["facebook", "Facebook", "facebook.com/PadreKelmon", "https://www.facebook.com/PadreKelmon", "#1877F2"],
    ] as const
  ).map(([id, name, handle, profileUrl, color]) => ({
    id,
    name,
    handle,
    profileUrl,
    color,
    posts: [] as SocialPost[],
  }));
}
