import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Highlights } from "@/components/landing/highlights";
import { About } from "@/components/landing/about";
import { Bandeiras } from "@/components/landing/bandeiras";
import { Media } from "@/components/landing/media";
import { Stats } from "@/components/landing/stats";
import { CallToAction } from "@/components/landing/call-to-action";
import { SignupForm } from "@/components/landing/signup-form";
import { SocialLinks } from "@/components/landing/social-links";
import { SiteFooter } from "@/components/landing/site-footer";
import { getSocialFeeds } from "@/lib/social-feeds";
import { scrollToSection } from "@/lib/scroll-to-section";

const TITLE = "Padre Kelmon — Deputado Federal por São Paulo";
const DESCRIPTION =
  "Padre Kelmon, pré-candidato a Deputado Federal por São Paulo pelo PL. Conheça sua história, suas bandeiras e cadastre-se para apoiar a campanha.";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData({
      queryKey: ["social-feeds", "v12-facebook-official"],
      queryFn: () => getSocialFeeds(),
      staleTime: 15 * 60 * 1000,
    });
  },
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
    <div className="min-h-dvh bg-white md:min-h-screen">
      <a
        href="#historia"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("historia");
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2"
        style={{ backgroundColor: "var(--blue-primary)", color: "white" }}
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <Highlights />
        <About />
        <Bandeiras />
        <Media />
        <Stats />
        <CallToAction />
        <SignupForm />
        <SocialLinks />
      </main>
      <SiteFooter />
    </div>
  );
}
