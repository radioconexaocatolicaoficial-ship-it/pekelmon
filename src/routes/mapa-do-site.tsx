import { Link, createFileRoute } from "@tanstack/react-router";

import { InnerPage } from "@/components/landing/inner-page";
import { PageHeading } from "@/components/landing/page-heading";
import { PageShell } from "@/components/landing/primitives";
import { SITE_EVENTS } from "@/data/site-events";
import { SITE_INTERVIEWS } from "@/data/site-interviews";
import { SITE_NEWS } from "@/data/site-news";
import { SITE_SPEECHES } from "@/data/site-speeches";
import { PAGE_SEO, buildPageHead } from "@/lib/site";

export const Route = createFileRoute("/mapa-do-site")({
  component: MapaDoSitePage,
  head: () => buildPageHead(PAGE_SEO.mapaDoSite),
});

const HUBS = [
  { to: "/", label: "Início" },
  { to: "/biografia", label: "Biografia" },
  { to: "/noticias", label: "Notícias" },
  { to: "/agenda", label: "Agenda" },
  { to: "/eventos", label: "Eventos" },
  { to: "/entrevistas", label: "Entrevistas" },
  { to: "/discursos", label: "Discursos" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/redes-sociais", label: "Redes sociais" },
  { to: "/contato", label: "Contato" },
  { to: "/sobre", label: "Sobre o site" },
  { to: "/saiba-mais", label: "Saiba mais" },
  { to: "/pautas", label: "Pautas" },
  { to: "/midia", label: "Mídia" },
  { to: "/numeros", label: "Números" },
] as const;

function MapaDoSitePage() {
  return (
    <InnerPage breadcrumbs={PAGE_SEO.mapaDoSite.breadcrumbs}>
      <section className="section-pad bg-white">
        <PageHeading kicker="Navegação" title="Mapa do site">
          <p>
            Índice das páginas públicas. O sitemap XML para buscadores continua em{" "}
            <a href="/sitemap.xml" className="font-semibold underline underline-offset-4" style={{ color: "var(--blue-primary)" }}>
              /sitemap.xml
            </a>
            .
          </p>
        </PageHeading>

        <PageShell className="mt-10 max-w-3xl space-y-8">
          <div>
            <h2 className="text-lg font-black" style={{ color: "var(--blue-primary)" }}>
              Páginas principais
            </h2>
            <ul className="mt-3 columns-1 gap-x-8 sm:columns-2">
              {HUBS.map((item) => (
                <li key={item.to} className="mb-2">
                  <Link to={item.to} className="font-semibold underline underline-offset-4" style={{ color: "var(--blue-primary)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black" style={{ color: "var(--blue-primary)" }}>
              Notícias internas
            </h2>
            <ul className="mt-3 space-y-2">
              {SITE_NEWS.filter((item) => item.internal).map((item) => (
                <li key={item.slug}>
                  <Link to={item.href} className="underline underline-offset-4" style={{ color: "var(--blue-primary)" }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black" style={{ color: "var(--blue-primary)" }}>
              Eventos
            </h2>
            <ul className="mt-3 space-y-2">
              {SITE_EVENTS.map((item) => (
                <li key={item.slug}>
                  <Link to={item.href} className="underline underline-offset-4" style={{ color: "var(--blue-primary)" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black" style={{ color: "var(--blue-primary)" }}>
              Entrevistas
            </h2>
            <ul className="mt-3 space-y-2">
              {SITE_INTERVIEWS.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/entrevistas/$slug"
                    params={{ slug: item.slug }}
                    className="underline underline-offset-4"
                    style={{ color: "var(--blue-primary)" }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black" style={{ color: "var(--blue-primary)" }}>
              Discursos
            </h2>
            <ul className="mt-3 space-y-2">
              {SITE_SPEECHES.map((item) => (
                <li key={item.slug}>
                  <Link to={item.href} className="underline underline-offset-4" style={{ color: "var(--blue-primary)" }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </PageShell>
      </section>
    </InnerPage>
  );
}
