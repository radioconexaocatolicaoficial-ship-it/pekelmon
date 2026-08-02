import { Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

import { CANDIDATE, FORO_BRASIL } from "@/lib/campaign-data";
import logo from "@/assets/Logo-Site-PAdre-kelmon.png";

const QUICK_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Sobre" },
  { href: "#bandeiras", label: "Pautas" },
  { href: "#midia", label: "Mídia" },
  { href: "#numeros", label: "Indicadores" },
  { href: "#cadastro", label: "Faça parte" },
];

const USEFUL_LINKS = [
  { href: FORO_BRASIL.url, label: "Foro do Brasil", external: true },
  { href: FORO_BRASIL.aboutUrl, label: "Sobre o Foro", external: true },
  { href: CANDIDATE.instagram, label: "Instagram", external: true },
  { href: CANDIDATE.youtube, label: "YouTube", external: true },
  { href: "#cadastro", label: "Quero apoiar", external: false },
  { href: "#privacidade", label: "Privacidade", external: false },
];

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

const SOCIALS = [
  { label: "Instagram", href: CANDIDATE.instagram, Icon: Instagram },
  { label: "TikTok", href: CANDIDATE.tiktok, Icon: TikTokIcon },
  { label: "Facebook", href: CANDIDATE.facebook, Icon: Facebook },
  { label: "YouTube", href: CANDIDATE.youtube, Icon: Youtube },
  { label: "X", href: CANDIDATE.x, Icon: XIcon },
];

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)", minHeight: "300px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative mx-auto flex min-h-[300px] w-full flex-col justify-between"
        style={{ maxWidth: "1120px" }}
      >
        {/*
          items-start = topo da logo, "Navegação" e "Privacidade" na mesma linha horizontal.
          Conteúdo logo abaixo do título (mb-1.5), sem faixa alta empurrando para baixo.
        */}
        <div className="grid flex-1 items-start gap-8 px-5 py-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-x-12 lg:px-0 lg:py-7">
          {/* Coluna 1 — logo (não alterar tamanho) */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-md"
            >
              <img src={logo} alt="Padre Kelmon" className="h-8 w-auto" />
            </a>
            <p className="mt-3 text-sm font-bold leading-snug text-white">
              Pré-candidato a Deputado Federal · SP · PL
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Fé, família e coragem para representar São Paulo e resgatar o Brasil. Liderança no
              Foro do Brasil e compromisso com a liberdade religiosa.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-8 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white transition-all hover:bg-white/20"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <nav aria-label="Links rápidos">
            <p
              className="mb-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.2em]"
              style={{ color: "var(--yellow-primary)" }}
            >
              Navegação
            </p>
            <ul className="space-y-1.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3 — Links úteis */}
          <nav aria-label="Links úteis">
            <p
              className="mb-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.2em]"
              style={{ color: "var(--yellow-primary)" }}
            >
              Links úteis
            </p>
            <ul className="space-y-1.5">
              {USEFUL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 4 — Privacidade e LGPD */}
          <div id="privacidade">
            <p
              className="mb-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.2em]"
              style={{ color: "var(--yellow-primary)" }}
            >
              Privacidade e LGPD
            </p>
            <p className="text-sm leading-relaxed text-white/85">
              Dados usados apenas para comunicação da campanha, conforme a LGPD (Lei nº
              13.709/2018). Solicite acesso ou exclusão pelo canal oficial.
            </p>
            <a
              href="#cadastro"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold transition-transform hover:scale-105"
              style={{
                backgroundColor: "var(--yellow-primary)",
                color: "var(--blue-primary)",
              }}
            >
              Quero apoiar
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="flex flex-col items-center justify-between gap-1 px-5 py-2.5 text-center text-[11px] text-white/65 lg:flex-row lg:px-0 lg:text-left">
            <p>
              © {new Date().getFullYear()} Campanha {CANDIDATE.name}. Todos os direitos
              reservados.
            </p>
            <p>Conteúdo informativo de pré-campanha, a partir de fontes públicas.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
