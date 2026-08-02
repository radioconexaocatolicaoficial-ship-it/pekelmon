import { useEffect, useState } from "react";
import { Menu, X, Home, BookText, Flag, Images, Play, TrendingUp, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CANDIDATE } from "@/lib/campaign-data";
import logo from "@/assets/Logo-Site-PAdre-kelmon.png";

const LINKS = [
  { href: "inicio", label: "Início", icon: Home },
  { href: "historia", label: "História", icon: BookText },
  { href: "bandeiras", label: "Bandeiras", icon: Flag },
  { href: "galeria", label: "Galeria", icon: Images },
  { href: "videos", label: "Vídeos", icon: Play },
  { href: "numeros", label: "Números", icon: TrendingUp },
  { href: "cadastro", label: "Cadastro", icon: UserPlus },
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
        scrolled ? "border-b border-blue-200 bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto w-full flex items-center justify-between py-3"
        style={{ maxWidth: '1140px', paddingLeft: '0', paddingRight: '0' }}
      >
        <div className="px-5 lg:px-0 flex items-center justify-between w-full">
        <a 
          href="#inicio" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img 
            src={logo} 
            alt="Padre Kelmon - Por São Paulo, pelo Brasil" 
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <li key={l.href}>
                <a
                  href={`#${l.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(l.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-sm font-bold text-gray-700 transition-colors hover:text-blue-600"
                >
                  <Icon className="size-5 stroke-[2.5]" />
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="campaign" size="sm" className="hidden sm:inline-flex">
            <a 
              href="#cadastro"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero apoiar
            </a>
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-blue-700 lg:hidden hover:bg-blue-50"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-blue-100 bg-white px-5 pb-6 pt-2 shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => {
              const Icon = l.icon;
              return (
                <li key={l.href}>
                  <a
                    href={`#${l.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(l.href)?.scrollIntoView({ behavior: 'smooth' });
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm font-bold text-gray-700 hover:text-blue-600"
                  >
                    <Icon className="size-6 stroke-[2.5]" />
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button asChild variant="campaign" className="mt-5 w-full">
            <a 
              href="#cadastro" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
            >
              Quero apoiar {CANDIDATE.name}
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
