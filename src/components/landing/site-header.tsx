import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGoToCadastro } from "@/hooks/use-go-to-cadastro";
import { NAV_LINKS, TOP_NAV_LINKS, type NavLink } from "@/lib/nav";
import { scrollToPageTop } from "@/lib/scroll-to-section";
import { PageShell } from "./primitives";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const goToCadastro = useGoToCadastro();
  const [scrolled, setScrolled] = useState(false);
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeKey = navActiveKey(pathname);

  useEffect(() => {
    const el = itemRefs.current[activeKey];
    const nav = bottomNavRef.current;
    if (!el || !nav) return;
    const target = el.offsetLeft - nav.clientWidth / 2 + el.offsetWidth / 2;
    nav.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeKey]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
          scrolled ? "border-b border-blue-200 bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <nav aria-label="Navegação principal" className="w-full">
          <PageShell className="flex min-w-0 items-center gap-3 py-2 sm:py-2.5 md:gap-4 md:py-[0.6rem]">
            <Link to="/" onClick={() => scrollToPageTop()} className="flex shrink-0 items-center">
              <img
                src="/Logo-Site-Padre-kelmon-campanha.png"
                alt="Padre Kelmon 2202 — Deputado Federal"
                width={220}
                height={50}
                decoding="async"
                className="h-10 w-auto max-w-[42vw] rounded-md object-contain object-left sm:h-11 md:h-11 md:max-w-[11rem] lg:h-12 lg:max-w-none"
              />
            </Link>

            <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-3 md:gap-4 lg:gap-5">
              <ul className="hidden min-w-0 items-center justify-end gap-[0.95rem] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] md:flex lg:gap-6 xl:gap-7 [&::-webkit-scrollbar]:hidden">
                {TOP_NAV_LINKS.map((l) => {
                  const Icon = l.icon;
                  const isActive = isNavActive(l, pathname);
                  return (
                    <li key={l.sectionId} className="flex shrink-0">
                      <Link
                        to={l.to}
                        onClick={() => scrollToPageTop()}
                        className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 transition-colors lg:gap-2 lg:px-3 lg:py-2 ${
                          isActive
                            ? "bg-blue-50 text-[var(--blue-primary)]"
                            : "text-gray-600 hover:bg-blue-50 hover:text-[var(--blue-primary)]"
                        }`}
                        style={{ zoom: 0.98 }}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <Icon className="size-4 shrink-0 stroke-[2.25] lg:size-[1.15rem]" aria-hidden="true" />
                        <span className="whitespace-nowrap text-xs font-bold leading-none tracking-wide lg:text-sm">
                          {l.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Button
                asChild
                variant="campaign"
                size="sm"
                className="relative z-10 inline-flex h-9 shrink-0 px-3 text-xs font-bold md:h-9 md:px-4 md:text-sm"
              >
                <Link to="/" hash="cadastro" onClick={goToCadastro}>
                  Quero apoiar
                </Link>
              </Button>
            </div>
          </PageShell>
        </nav>
      </header>

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
          {NAV_LINKS.map((l) => {
            const Icon = l.icon;
            const isActive = isNavActive(l, pathname);
            const isAccent = Boolean(l.accent);

            return (
              <Link
                key={l.sectionId}
                ref={(node) => {
                  itemRefs.current[l.sectionId] = node;
                }}
                to={l.to}
                hash={l.hash}
                onClick={l.hash === "cadastro" ? goToCadastro : () => scrollToPageTop()}
                className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-1 outline-none transition-colors ${
                  isActive
                    ? isAccent
                      ? "bg-amber-50 text-[var(--yellow-dark)]"
                      : "bg-blue-50 text-[var(--blue-primary)]"
                    : isAccent
                      ? "text-amber-600/70"
                      : "text-gray-500"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="size-4 stroke-[2.25]" aria-hidden="true" />
                <span className="text-[9px] font-bold leading-none tracking-tight">{l.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

function isNavActive(link: NavLink, pathname: string) {
  if (link.hash === "cadastro") return false;
  return pathname === link.to;
}

function navActiveKey(pathname: string) {
  const current = NAV_LINKS.find((l) => !l.hash && l.to === pathname);
  return current?.sectionId ?? "inicio";
}
