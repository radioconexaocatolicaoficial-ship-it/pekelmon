import { CANDIDATE, FORO_BRASIL } from "./campaign-data";

/** URL canônica do site. Defina VITE_SITE_URL no .env de produção (ex.: https://www.dominio.com.br). */
export const SITE_URL = (
  typeof import.meta.env.VITE_SITE_URL === "string"
    ? import.meta.env.VITE_SITE_URL
    : ""
).replace(/\/$/, "");

export const SITE_NAME = "Padre Kelmon";

export const SITE_TITLE = "Padre Kelmon — Candidato a Deputado Federal";

/** Meta description distinta do title (~150–160 caracteres) para SEO e redes. */
export const SITE_DESCRIPTION =
  "Padre Kelmon, candidato a Deputado Federal por São Paulo pelo PL. Fé, família e liberdade religiosa. Conheça a trajetória, as pautas e apoie a campanha.";

export const SITE_KEYWORDS =
  "Padre Kelmon, Deputado Federal, São Paulo, PL, Partido Liberal, candidato 2026, fé, família, liberdade religiosa, Foro do Brasil";

/** Query v= força WhatsApp/Facebook a buscar a imagem nova (cache agressivo). */
export const OG_IMAGE_PATH = "/og-image.png?v=14";
export const OG_IMAGE_WIDTH = "1140";
export const OG_IMAGE_HEIGHT = "500";

export const TWITTER_HANDLE = "@PeKelmon";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!SITE_URL) return normalized;
  return `${SITE_URL}${normalized}`;
}

export const PAGE_SEO = {
  sobre: {
    path: "/sobre",
    title: "Sobre Padre Kelmon — Trajetória e candidatura a Deputado Federal",
    description:
      "Conheça a biografia de Padre Kelmon: vida religiosa, atuação pública, Foro do Brasil e candidatura a Deputado Federal por São Paulo pelo PL em 2026.",
  },
  pautas: {
    path: "/pautas",
    title: "Pautas de Padre Kelmon — Fé, família e liberdade em São Paulo",
    description:
      "As pautas que Padre Kelmon defende como candidato a Deputado Federal por São Paulo: família, liberdade religiosa, valores cristãos e dignidade humana.",
  },
  midia: {
    path: "/midia",
    title: "Mídia — Padre Kelmon nas redes, imprensa e vídeos",
    description:
      "Acompanhe Padre Kelmon na imprensa, YouTube, Instagram, TikTok e demais redes. Notícias, vídeos e presença digital da campanha.",
  },
  numeros: {
    path: "/numeros",
    title: "Números da trajetória de Padre Kelmon — votos, fé e confiança",
    description:
      "Indicadores públicos da trajetória de Padre Kelmon: votos em 2022, décadas de fé e serviço, Foro do Brasil e candidatura a Deputado Federal por SP.",
  },
} as const;

export function buildPageHead({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const pageUrl = absoluteUrl(path);
  const ogImage = absoluteUrl(OG_IMAGE_PATH);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: SITE_KEYWORDS },
      { name: "author", content: SITE_NAME },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "São Paulo" },
      { name: "language", content: "pt-BR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { property: "og:image:secure_url", content: ogImage },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: OG_IMAGE_WIDTH },
      { property: "og:image:height", content: OG_IMAGE_HEIGHT },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      { rel: "alternate", hrefLang: "pt-BR", href: pageUrl },
      { rel: "alternate", hrefLang: "x-default", href: pageUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildWebPageJsonLd({ path, title, description })),
      },
    ],
  };
}

export function buildPersonJsonLd() {
  const url = absoluteUrl("/");
  const image = absoluteUrl(OG_IMAGE_PATH);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: CANDIDATE.name,
    alternateName: CANDIDATE.fullName,
    jobTitle: CANDIDATE.role,
    description: SITE_DESCRIPTION,
    url,
    image,
    birthDate: "1976-10-21",
    birthPlace: {
      "@type": "Place",
      name: "Salvador, Bahia, Brasil",
    },
    nationality: {
      "@type": "Country",
      name: "Brasil",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Política",
      "Liberdade religiosa",
      "Família",
      "Conservadorismo",
      "Deputado Federal",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Partido Liberal (PL)",
        sameAs: "https://partidoliberal.org.br/",
      },
      {
        "@type": "Organization",
        name: FORO_BRASIL.name,
        sameAs: FORO_BRASIL.url,
      },
    ],
    sameAs: [
      CANDIDATE.instagram,
      CANDIDATE.facebook,
      CANDIDATE.youtube,
      CANDIDATE.x,
      CANDIDATE.tiktok,
      "https://pt.wikipedia.org/wiki/Padre_Kelmon",
      FORO_BRASIL.url,
    ],
  };
}

export function buildWebSiteJsonLd() {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: SITE_NAME,
    alternateName: SITE_TITLE,
    url,
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${url}#person`,
    },
  };
}

export function buildWebPageJsonLd(page?: {
  path?: string;
  title?: string;
  description?: string;
}) {
  const url = absoluteUrl(page?.path ?? "/");
  const name = page?.title ?? SITE_TITLE;
  const description = page?.description ?? SITE_DESCRIPTION;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: "pt-BR",
    isPartOf: {
      "@id": `${url}#website`,
    },
    about: {
      "@id": `${url}#person`,
    },
    primaryEntity: {
      "@id": `${url}#person`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(OG_IMAGE_PATH),
      width: Number(OG_IMAGE_WIDTH),
      height: Number(OG_IMAGE_HEIGHT),
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "#historia"],
    },
  };
}

export function buildOrganizationJsonLd() {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: SITE_NAME,
    alternateName: CANDIDATE.fullName,
    url,
    logo: absoluteUrl("/Logo-Site-PAdre-kelmon.png"),
    description: SITE_DESCRIPTION,
    foundingDate: "2023-06-29",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "São Paulo, Brasil",
    },
    sameAs: [
      CANDIDATE.instagram,
      CANDIDATE.facebook,
      CANDIDATE.youtube,
      CANDIDATE.x,
      CANDIDATE.tiktok,
    ],
  };
}
