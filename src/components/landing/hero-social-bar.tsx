import { Facebook, Instagram, Youtube } from "lucide-react";

import { CANDIDATE } from "@/lib/campaign-data";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.19 8.21L22.5 22h-6.66l-5.22-6.82L4.66 22H1.4l7.69-8.78L1.5 2h6.83l4.72 6.24L18.244 2Zm-1.17 18h1.83L7.02 3.9H5.06L17.074 20Z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11Z" />
    </svg>
  );
}

const NETWORKS = [
  { label: "Instagram", href: CANDIDATE.instagram, Icon: Instagram, handle: "@pekelmon" },
  { label: "TikTok", href: CANDIDATE.tiktok, Icon: TikTokIcon, handle: "@pekelmon" },
  { label: "Facebook", href: CANDIDATE.facebook, Icon: Facebook, handle: "PadreKelmon" },
  { label: "YouTube", href: CANDIDATE.youtube, Icon: Youtube, handle: "@PadreKelmonBr" },
  { label: "X", href: CANDIDATE.x, Icon: XIcon, handle: "@PeKelmon" },
] as const;

export function HeroSocialBar() {
  return (
    <div
      className="mt-3 overflow-hidden rounded-2xl shadow-lg"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="h-1 w-full" style={{ background: "var(--yellow-primary)" }} />
      <nav
        aria-labelledby="hero-redes-heading"
        className="px-3 py-3 sm:px-5 sm:py-3.5"
      >
        <h2
          id="hero-redes-heading"
          className="mb-2 px-1 text-left text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[10px]"
        >
          Acompanhe o Padre nas redes sociais
        </h2>
        <ul className="grid min-w-0 grid-cols-5">
          {NETWORKS.map(({ label, href, Icon, handle }) => (
            <li key={label} className="min-w-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} de Padre Kelmon, ${handle}`}
                className="group inline-flex min-h-11 max-w-full flex-col items-center justify-center gap-0.5 rounded-lg px-1 text-white transition hover:bg-white/10 sm:flex-row sm:gap-2"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[var(--blue-primary)] shadow-sm transition group-hover:scale-105 sm:size-9">
                  <Icon className="size-4 sm:size-[1.05rem]" aria-hidden="true" />
                </span>
                <span className="truncate leading-none text-[10px] font-semibold tracking-wide sm:text-xs">
                  <span className="sm:hidden">{label}</span>
                  <span className="hidden sm:inline">{handle}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
