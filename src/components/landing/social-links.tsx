import { Facebook, Instagram, Youtube } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";
import { CANDIDATE } from "@/lib/campaign-data";

const NETWORKS = [
  { label: "Instagram", href: CANDIDATE.instagram, Icon: Instagram, handle: "@pekelmon" },
  { label: "Facebook", href: CANDIDATE.facebook, Icon: Facebook, handle: "Padre Kelmon" },
  { label: "YouTube", href: CANDIDATE.youtube, Icon: Youtube, handle: "Padre Kelmon" },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.19 8.21L22.5 22h-6.66l-5.22-6.82L4.66 22H1.4l7.69-8.78L1.5 2h6.83l4.72 6.24L18.244 2Zm-1.17 18h1.83L7.02 3.9H5.06L17.074 20Z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <section id="redes" className="section-y">
      <div className="mx-auto max-w-[1140px] px-5">
        <SectionHeading
          eyebrow="Redes sociais"
          title="Acompanhe de perto"
          subtitle="Confirme os perfis oficiais com a assessoria antes da publicação."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NETWORKS.map(({ label, href, Icon, handle }, i) => (
            <Reveal key={label} delay={0.05 * i}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Icon className="size-6 stroke-[2]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold">{label}</span>
                  <span className="block text-xs text-muted-foreground">{handle}</span>
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a
              href={CANDIDATE.x}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <XIcon className="size-5 stroke-[2]" />
              </span>
              <span>
                <span className="block text-sm font-bold">X (Twitter)</span>
                <span className="block text-xs text-muted-foreground">Perfil oficial</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
