import { useEffect, useState } from "react";
import { Menu, X, Home, BookText, Flag, Film, TrendingUp, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";
import { scrollToSection } from "@/lib/scroll-to-section";
import logo from "@/assets/Logo-Site-PAdre-kelmon.webp";
import { PageShell } from "./primitives";

const LINKS = [
  { href: "inicio", label: "Início", icon: Home },
  { href: "historia", label: "Sobre", icon: BookText },
  { href: "bandeiras", label: "Pautas", icon: Flag },
  { href: "midia", label: "Mídia", icon: Film },
  { href: "numeros", label: "Indicadores", icon: TrendingUp },
  { href: "cadastro", label: "Faça parte", icon: UserPlus },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function goTo(id: string) {
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), 60);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled ? "border-b border-blue-200 bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav aria-label="Navegação principal" className="w-full">
        <PageShell className="flex items-center justify-between py-2.5 sm:py-3">
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
              alt="Padre Kelmon - Por São Paulo, pelo Brasil"
              className="h-11 w-auto sm:h-12 md:h-14"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <ul className="hidden items-center gap-[calc(0.25rem*1.02)] lg:flex">
              {LINKS.map((l) => {
                const Icon = l.icon;
                return (
                  <li key={l.href}>
                    <a
                      href={`#${l.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(l.href);
                      }}
                      className="flex items-center gap-1 rounded-md px-[calc(0.5rem*1.02)] py-[calc(0.25rem*1.02)] text-sm font-bold text-gray-700 transition-colors hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
                    >
                      <Icon className="size-4 stroke-[2.5]" />
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button asChild variant="campaign" size="sm" className="hidden sm:inline-flex">
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

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl text-blue-700 hover:bg-blue-50 lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </PageShell>
      </nav>

      {/* Menu mobile estilo app */}
      {open ? (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-40 bg-black/35 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="relative z-50 max-h-[min(78dvh,560px)] overflow-y-auto border-t border-blue-100 bg-white px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-2 shadow-xl sm:px-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => {
                const Icon = l.icon;
                return (
                  <li key={l.href}>
                    <a
                      href={`#${l.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(l.href);
                      }}
                      className="group flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-base font-bold text-gray-700 transition-colors hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-white/20 group-hover:text-white group-active:bg-white/20 group-active:text-white">
                        <Icon className="size-5 stroke-[2.5]" />
                      </span>
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button asChild variant="campaign" className="mt-4 h-12 w-full text-base">
              <a
                href="#cadastro"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("cadastro");
                }}
              >
                Quero apoiar {CANDIDATE.name}
              </a>
            </Button>
          </div>
        </>
      ) : null}
    </header>
  );
}
