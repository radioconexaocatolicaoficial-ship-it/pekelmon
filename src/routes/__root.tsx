import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "../components/ui/sonner";
import { PwaRegister } from "../components/pwa-register";
import { CookieBanner } from "../components/cookie-banner";
import { CnpjRail } from "../components/landing/cnpj-rail";
import { MobileBottomNav } from "../components/landing/mobile-bottom-nav";
import { scrollToSection } from "../lib/scroll-to-section";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <title>Página não encontrada | Padre Kelmon</title>
      <meta name="robots" content="noindex, follow" />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: "var(--yellow-primary)" }}
          >
            Erro 404
          </p>
          <h1
            className="mt-3 text-3xl font-black sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            Página não encontrada
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Este endereço não existe no site oficial de Padre Kelmon. Volte ao início
            ou escolha uma das páginas abaixo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold text-white"
              style={{ backgroundColor: "var(--blue-primary)" }}
            >
              Ir para o início
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-bold"
              style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)" }}
            >
              Biografia
            </Link>
            <Link
              to="/midia"
              className="inline-flex items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-bold"
              style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)" }}
            >
              Notícias
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-bold"
              style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)" }}
            >
              Contato
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente atualizar a página ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              reset();
              window.location.assign("/");
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5",
      },
      {
        name: "google-site-verification",
        content: "bcJCCb6X2PSfiJUJmaqbMVwrGSQxG0WHzVsjDVgdmxI",
      },
      {
        name: "facebook-domain-verification",
        content: "82m9eas0exktmg3bfd42o6gdjxhpvv",
      },
      { name: "theme-color", content: "#1e5bb8" },
      { name: "color-scheme", content: "light" },
      { name: "format-detection", content: "telephone=no" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Padre Kelmon" },
      { name: "application-name", content: "Padre Kelmon" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/favicon-campanha.png?v=9", type: "image/png", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png?v=9", type: "image/png", sizes: "32x32" },
      { rel: "shortcut icon", href: "/favicon.ico?v=9" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=9" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const locationHref = useRouterState({ select: (s) => s.location.href });

  // Hash (#cadastro) rola até o formulário; sem hash, cada aba abre no topo.
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      const timer = window.setTimeout(() => {
        scrollToSection(hash);
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [locationHref]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CnpjRail />
      <MobileBottomNav />
      <CookieBanner />
      <PwaRegister />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}

