import { useEffect, useRef, useState } from "react";
import { Home, BookText, Flag, Film, TrendingUp, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import logo from "@/assets/Logo-Site-PAdre-kelmon.webp";
import { PageShell } from "./primitives";

const LINKS = [
  { href: "inicio", label: "Início", icon: Home },
  { href: "historia", label: "Sobre", icon: BookText },
  { href: "bandeiras", label: "Pautas", icon: Flag },
  { href: "midia", label: "Mídia", icon: Film },
  { href: "numeros", label: "Números", icon: TrendingUp },
  { href: "cadastro", label: "Apoiar", icon: UserPlus, accent: true },
] as const;

/** Menu do topo (tablet/notebook/desktop) — sem Apoiar (já existe o botão Quero apoiar). */
const TOP_LINKS = LINKS.filter((l) => l.href !== "cadastro");

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -42% 0px",
        threshold: [0.12, 0.3, 0.55],
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = itemRefs.current[active];
    const nav = bottomNavRef.current;
    if (!el || !nav) return;
    const target = el.offsetLeft - nav.clientWidth / 2 + el.offsetWidth / 2;
    nav.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  function goTo(id: string) {
    setActive(id);
    scrollToSection(id);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
          scrolled ? "border-b border-blue-200 bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <nav aria-label="Navegação principal" className="w-full">
          <PageShell className="flex min-w-0 items-center gap-3 py-2 sm:py-2.5 md:gap-4 md:py-[0.6rem]">
            <a
              href="#inicio"
              className="flex shrink-0 items-center"
              onClick={(e) => {
                e.preventDefault();
                goTo("inicio");
              }}
            >
              <img
                src={logo}
                alt="Padre Kelmon 2202 — Deputado Federal"
                className="h-10 w-auto max-w-[42vw] object-contain object-left sm:h-11 md:h-11 md:max-w-[11rem] lg:h-12 lg:max-w-none"
              />
            </a>

            <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-3 md:gap-4 lg:gap-5">
              {/* Mesma altura do botão Quero apoiar (h-9) no tablet/notebook/desktop */}
              <ul className="hidden h-9 min-w-0 items-center justify-end gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] md:flex lg:gap-4 [&::-webkit-scrollbar]:hidden">
                {TOP_LINKS.map((l) => {
                  const Icon = l.icon;
                  const isActive = active === l.href;
                  return (
                    <li key={l.href} className="flex h-full shrink-0 items-center">
                      <a
                        href={`#${l.href}`}
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(l.href);
                        }}
                        className={`flex h-9 min-w-[3.75rem] flex-col items-center justify-center gap-0.5 rounded-xl px-3 transition-colors lg:min-w-[4.25rem] lg:px-3.5 ${
                          isActive
                            ? "bg-blue-50 text-[var(--blue-primary)]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <Icon className="size-4 stroke-[2.25]" aria-hidden="true" />
                        <span className="whitespace-nowrap text-[0.65rem] font-bold leading-none tracking-wide">
                          {l.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <Button
                asChild
                variant="campaign"
                size="sm"
                className="relative z-10 inline-flex h-9 shrink-0 items-center px-3 text-xs font-bold md:px-4 md:text-sm"
              >
                <a
                  href="#cadastro"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("cadastro");
                  }}
                >
                  Quero apoiar
                </a>
              </Button>
            </div>
          </PageShell>
        </nav>
      </header>

      {/* Menu inferior — celular: mesmo design do topo, medidas compactas */}
      <nav
        aria-label="Menu de seções"
        data-mobile-bottom-nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/90 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div
          ref={bottomNavRef}
          className="mx-auto flex w-full max-w-md items-stretch justify-center gap-0.5 px-1.5 py-1"
        >
          {LINKS.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.href;
            const isAccent = "accent" in l && l.accent;

            return (
              <a
                key={l.href}
                ref={(node) => {
                  itemRefs.current[l.href] = node;
                }}
                href={`#${l.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(l.href);
                }}
                className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-1 outline-none transition-colors ${
                  isActive
                    ? isAccent
                      ? "bg-amber-50 text-[var(--yellow-dark)]"
                      : "bg-blue-50 text-[var(--blue-primary)]"
                    : isAccent
                      ? "text-amber-600/70"
                      : "text-gray-500"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <Icon className="size-4 stroke-[2.25]" aria-hidden="true" />
                <span className="text-[9px] font-bold leading-none tracking-tight">{l.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
