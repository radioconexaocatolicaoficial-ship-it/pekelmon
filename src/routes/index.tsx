import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Highlights } from "@/components/landing/highlights";
import { ForoDoBrasil } from "@/components/landing/foro-do-brasil";
import { ForoNews } from "@/components/landing/foro-news";
import { SocialStrip } from "@/components/landing/social-strip";
import { PartidoLiberal } from "@/components/landing/partido-liberal";
import { CallToAction } from "@/components/landing/call-to-action";
import { SignupForm } from "@/components/landing/signup-form";
import { SocialLinks } from "@/components/landing/social-links";
import { SiteFooter } from "@/components/landing/site-footer";
import { scrollToSection } from "@/lib/scroll-to-section";
import heroKvUrl from "@/assets/banner-topo-padre-kelmon-4.png?url";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  TWITTER_HANDLE,
  absoluteUrl,
  buildOrganizationJsonLd,
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
        { name: "keywords", content: SITE_KEYWORDS },
        { name: "author", content: SITE_NAME },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },
        { name: "geo.region", content: "BR-SP" },
        { name: "geo.placename", content: "São Paulo" },
        { name: "language", content: "pt-BR" },
        { property: "og:title", content: SITE_TITLE },
        { property: "og:description", content: SITE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: pageUrl },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:image", content: ogImage },
        { property: "og:image:secure_url", content: ogImage },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: OG_IMAGE_WIDTH },
        { property: "og:image:height", content: OG_IMAGE_HEIGHT },
        {
          property: "og:image:alt",
          content: SITE_TITLE,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: TWITTER_HANDLE },
        { name: "twitter:creator", content: TWITTER_HANDLE },
        { name: "twitter:title", content: SITE_TITLE },
        { name: "twitter:description", content: SITE_DESCRIPTION },
        { name: "twitter:image", content: ogImage },
        {
          name: "twitter:image:alt",
          content: SITE_TITLE,
        },
      ],
      links: [
        { rel: "canonical", href: pageUrl },
        { rel: "alternate", hrefLang: "pt-BR", href: pageUrl },
        { rel: "alternate", hrefLang: "x-default", href: pageUrl },
        { rel: "icon", href: "/favicon-campanha.png?v=6", type: "image/png", sizes: "any" },
        { rel: "shortcut icon", href: "/favicon-campanha.png?v=6", type: "image/png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-campanha.png?v=6" },
        {
          rel: "preload",
          as: "image",
          href: heroKvUrl,
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
          children: JSON.stringify(buildOrganizationJsonLd()),
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
        href="#conteudo"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("conteudo");
          if (el) {
            el.focus({ preventScroll: true });
            scrollToSection("inicio");
          }
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2"
        style={{ backgroundColor: "var(--blue-primary)", color: "white" }}
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
        <Highlights />
        <ForoDoBrasil />
        <SocialStrip />
        <CallToAction />
        <ForoNews />
        <PartidoLiberal />
        <SignupForm />
        <SocialLinks />
      </main>
      <SiteFooter />
    </div>
  );
}
