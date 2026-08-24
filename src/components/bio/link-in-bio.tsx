import { Facebook, Globe, Instagram, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ComponentType } from "react";

import bioRetrato from "@/assets/bio-padre-kelmon.jpg";
import { CANDIDATE } from "@/lib/campaign-data";

function XIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.19 8.21L22.5 22h-6.66l-5.22-6.82L4.66 22H1.4l7.69-8.78L1.5 2h6.83l4.72 6.24L18.244 2Zm-1.17 18h1.83L7.02 3.9H5.06L17.074 20Z" />
    </svg>
  );
}

function TikTokIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11Z" />
    </svg>
  );
}

type BioLink = {
  label: string;
  handle: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  featured?: boolean;
  internal?: boolean;
};

const LINKS: BioLink[] = [
  {
    label: "Site oficial",
    handle: "padrekelmon.com.br",
    href: "/",
    Icon: Globe,
    featured: true,
    internal: true,
  },
  {
    label: "Instagram",
    handle: "@pekelmon",
    href: CANDIDATE.instagram,
    Icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "@pekelmon",
    href: CANDIDATE.tiktok,
    Icon: TikTokIcon,
  },
  {
    label: "YouTube",
    handle: "@PadreKelmonBr",
    href: CANDIDATE.youtube,
    Icon: Youtube,
  },
  {
    label: "Facebook",
    handle: "PadreKelmon",
    href: CANDIDATE.facebook,
    Icon: Facebook,
  },
  {
    label: "X",
    handle: "@PeKelmon",
    href: CANDIDATE.x,
    Icon: XIcon,
  },
];

function BioButton({ link }: { link: BioLink }) {
  const className = `group flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ${
    link.featured ? "text-[var(--blue-primary)]" : "bg-white text-gray-900"
  }`;
  const style = link.featured
    ? { backgroundColor: "var(--yellow-primary)" }
    : undefined;

  const inner = (
    <>
      <span
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${
          link.featured ? "bg-[var(--blue-primary)] text-white" : "text-white"
        }`}
        style={link.featured ? undefined : { backgroundColor: "var(--blue-primary)" }}
      >
        <link.Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate text-sm font-black">{link.label}</span>
        <span
          className={`block truncate text-xs font-semibold ${
            link.featured ? "text-[var(--blue-primary)]/70" : "text-gray-500"
          }`}
        >
          {link.handle}
        </span>
      </span>
    </>
  );

  if (link.internal) {
    return (
      <Link to="/" className={className} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {inner}
    </a>
  );
}

export function LinkInBio() {
  return (
    <div
      data-cnpj-on-dark
      className="relative flex min-h-dvh flex-col overflow-x-clip"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <header className="w-full px-5 pt-6">
          <h1 className="sr-only">Padre Kelmon, candidato a Deputado Federal por São Paulo, 2202</h1>
          <div className="mx-auto aspect-square w-[min(92vw,26rem)] overflow-hidden rounded-full">
            <img
              src={bioRetrato}
              alt="Padre Kelmon, Deputado Federal por São Paulo, 2202"
              width={1024}
              height={1024}
              decoding="sync"
              className="h-full w-full scale-[1.08] object-cover"
            />
          </div>
        </header>

        <main className="flex flex-1 flex-col px-5 pb-24 pt-6">
        <nav aria-label="Redes oficiais" className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <BioButton key={link.label} link={link} />
          ))}
        </nav>

          <p className="mt-auto pt-8 text-center text-[10px] font-semibold leading-relaxed tracking-wide text-white/55">
            {CANDIDATE.razaoSocial}
          </p>
      </main>
      </div>
    </div>
  );
}
