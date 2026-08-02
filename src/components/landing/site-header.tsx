import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";

const LINKS = [
  { href: "#historia", label: "História" },
  { href: "#bandeiras", label: "Bandeiras" },
  { href: "#galeria", label: "Galeria" },
  { href: "#videos", label: "Vídeos" },
  { href: "#numeros", label: "Números" },
  { href: "#cadastro", label: "Cadastro" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-xl" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <a href="#topo" className="font-display text-lg font-semibold tracking-wide text-gray-900">
          Padre <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Kelmon</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 transition-colors hover:text-purple-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="campaign" size="sm" className="hidden sm:inline-flex">
            <a href="#cadastro">Quero apoiar</a>
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-gray-900 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-white px-5 pb-6 pt-2 shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-gray-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="campaign" className="mt-5 w-full">
            <a href="#cadastro" onClick={() => setOpen(false)}>
              Quero apoiar {CANDIDATE.name}
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
