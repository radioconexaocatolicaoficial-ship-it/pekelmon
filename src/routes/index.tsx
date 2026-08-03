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

export const Route = createFileRoute("/")({
  // Feeds sociais carregam na seção Mídia — não bloqueiam a abertura da página.
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
        { rel: "icon", href: "/favicon.ico?v=2", type: "image/x-icon", sizes: "any" },
        { rel: "icon", href: "/favicon.png?v=2", type: "image/png", sizes: "512x512" },
        { rel: "shortcut icon", href: "/favicon.ico?v=2", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=2" },
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
