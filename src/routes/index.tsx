import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Bandeiras } from "@/components/landing/bandeiras";
import { Gallery } from "@/components/landing/gallery";
import { Videos } from "@/components/landing/videos";
import { Stats } from "@/components/landing/stats";
import { CallToAction } from "@/components/landing/call-to-action";
import { SignupForm } from "@/components/landing/signup-form";
import { SocialLinks } from "@/components/landing/social-links";
import { SiteFooter } from "@/components/landing/site-footer";

const TITLE = "Padre Kelmon — Deputado Federal por São Paulo";
const DESCRIPTION =
  "Padre Kelmon, pré-candidato a Deputado Federal por São Paulo pelo PL. Conheça sua história, suas bandeiras e cadastre-se para apoiar a campanha.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Padre Kelmon",
          alternateName: "Kelmon Luís da Silva Souza",
          jobTitle: "Pré-candidato a Deputado Federal por São Paulo",
          birthDate: "1976-10-21",
          birthPlace: { "@type": "Place", name: "Acajutiba, Bahia, Brasil" },
          memberOf: { "@type": "Organization", name: "Partido Liberal (PL)" },
          sameAs: [
            "https://www.instagram.com/pekelmon/",
            "https://pt.wikipedia.org/wiki/Padre_Kelmon",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#historia"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2"
        style={{ backgroundColor: 'var(--blue-primary)', color: 'white' }}
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Bandeiras />
        <Gallery />
        <Videos />
        <Stats />
        <CallToAction />
        <SignupForm />
        <SocialLinks />
      </main>
      <SiteFooter />
    </div>
  );
}
