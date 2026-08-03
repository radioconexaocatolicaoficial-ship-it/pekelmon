import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Highlights } from "@/components/landing/highlights";
import { SiteFooter } from "@/components/landing/site-footer";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroPortraitUrl from "@/assets/hero-portrait.webp?url";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  OG_IMAGE_PATH,
  absoluteUrl,
  buildPersonJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/site";

const About = lazy(() =>
  import("@/components/landing/about").then((m) => ({ default: m.About })),
);
const Bandeiras = lazy(() =>
  import("@/components/landing/bandeiras").then((m) => ({ default: m.Bandeiras })),
);
const Media = lazy(() =>
  import("@/components/landing/media").then((m) => ({ default: m.Media })),
);
const Stats = lazy(() =>
  import("@/components/landing/stats").then((m) => ({ default: m.Stats })),
);
const CallToAction = lazy(() =>
  import("@/components/landing/call-to-action").then((m) => ({ default: m.CallToAction })),
);
const SignupForm = lazy(() =>
  import("@/components/landing/signup-form").then((m) => ({ default: m.SignupForm })),
);
const SocialLinks = lazy(() =>
  import("@/components/landing/social-links").then((m) => ({ default: m.SocialLinks })),
);

export const Route = createFileRoute("/")({
  // Feeds sociais carregam depois (seção Mídia) — não bloqueiam a abertura da página.
  component: Index,
  head: () => {
    const pageUrl = absoluteUrl("/");
    const ogImage = absoluteUrl(OG_IMAGE_PATH);

    return {
      meta: [
        { title: SITE_TITLE },
        { name: "description", content: SITE_DESCRIPTION },
        {
          name: "keywords",
          content:
            "Padre Kelmon, Deputado Federal, São Paulo, PL, pré-candidato, campanha, fé, família",
        },
        { name: "author", content: "Padre Kelmon" },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { property: "og:title", content: SITE_TITLE },
        { property: "og:description", content: SITE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: pageUrl },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "Padre Kelmon" },
        { property: "og:image", content: ogImage },
        { property: "og:image:secure_url", content: ogImage },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Padre Kelmon — pré-candidato a Deputado Federal por São Paulo",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_TITLE },
        { name: "twitter:description", content: SITE_DESCRIPTION },
        { name: "twitter:image", content: ogImage },
        {
          name: "twitter:image:alt",
          content: "Padre Kelmon — pré-candidato a Deputado Federal por São Paulo",
        },
      ],
      links: [
        { rel: "canonical", href: pageUrl },
        {
          rel: "preload",
          as: "image",
          href: heroPortraitUrl,
          type: "image/webp",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildPersonJsonLd()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildWebSiteJsonLd()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildWebPageJsonLd()),
        },
      ],
    };
  },
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
      <main id="conteudo" className="overflow-x-clip">
        <Hero />
        <Highlights />
        <Suspense fallback={null}>
          <About />
          <Bandeiras />
          <Media />
          <Stats />
          <CallToAction />
          <SignupForm />
          <SocialLinks />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
