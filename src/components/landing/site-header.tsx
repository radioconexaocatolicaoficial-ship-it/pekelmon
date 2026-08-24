import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { TOP_NAV_LINKS, type NavLink } from "@/lib/nav";
import { scrollToPageTop } from "@/lib/scroll-to-section";
import { PageShell } from "./primitives";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
              alt="Padre Kelmon 2202, Deputado Federal"
              width={220}
              height={50}
              decoding="async"
              className="h-10 w-auto max-w-[42vw] rounded-md object-contain object-left sm:h-11 md:h-11 md:max-w-[11rem] lg:h-12 lg:max-w-none"
            />
          </Link>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-3 md:gap-4 lg:gap-5">
            <ul className="hidden min-w-0 items-center justify-end gap-[0.9rem] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] md:flex lg:gap-[1.425rem] xl:gap-[1.66rem] [&::-webkit-scrollbar]:hidden">
              {TOP_NAV_LINKS.map((l) => {
                const Icon = l.icon;
                const isActive = isNavActive(l, pathname);
                return (
                  <li key={l.sectionId} className="flex shrink-0">
                    <Link
                      to={l.to}
                      onClick={() => scrollToPageTop()}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-[0.594rem] py-1.5 transition-colors lg:gap-[0.475rem] lg:px-[0.713rem] lg:py-2 ${
                        isActive
                          ? "bg-blue-50 text-[var(--blue-primary)]"
                          : "text-gray-600 hover:bg-blue-50 hover:text-[var(--blue-primary)]"
                      }`}
                      style={{ zoom: 0.98 }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="size-4 shrink-0 stroke-[2.25] lg:size-[1.15rem]" aria-hidden="true" />
                      <span className="whitespace-nowrap text-[11.4px] font-bold leading-none tracking-wide lg:text-[13.3px]">
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
              <Link to="/links" onClick={() => scrollToPageTop()} aria-current={pathname === "/links" ? "page" : undefined}>
                Links da Bio
              </Link>
            </Button>
          </div>
        </PageShell>
      </nav>
    </header>
  );
}

function isNavActive(link: NavLink, pathname: string) {
  if (link.hash === "cadastro") return false;
  return pathname === link.to;
}
