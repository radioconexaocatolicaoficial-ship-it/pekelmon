import { CANDIDATE } from "./campaign-data";

/** URL canônica do site. Defina VITE_SITE_URL no .env de produção (ex.: https://www.dominio.com.br). */
export const SITE_URL = (
  typeof import.meta.env.VITE_SITE_URL === "string"
    ? import.meta.env.VITE_SITE_URL
    : ""
).replace(/\/$/, "");

export const SITE_NAME = "Padre Kelmon";

export const SITE_TITLE = `${CANDIDATE.name} — Deputado Federal por São Paulo`;

export const SITE_DESCRIPTION =
  "Padre Kelmon, pré-candidato a Deputado Federal por São Paulo pelo PL. Conheça sua história, suas bandeiras e cadastre-se para apoiar a campanha.";

export const OG_IMAGE_PATH = "/og-image.jpg";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!SITE_URL) return normalized;
  return `${SITE_URL}${normalized}`;
}

export function buildPersonJsonLd() {
  const url = absoluteUrl("/");
  const image = absoluteUrl(OG_IMAGE_PATH);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
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
    memberOf: {
      "@type": "Organization",
      name: "Partido Liberal (PL)",
      sameAs: "https://partidoliberal.org.br/",
    },
    sameAs: [
      CANDIDATE.instagram,
      CANDIDATE.facebook,
      CANDIDATE.youtube,
      CANDIDATE.x,
      CANDIDATE.tiktok,
      "https://pt.wikipedia.org/wiki/Padre_Kelmon",
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_TITLE,
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Person",
      name: CANDIDATE.name,
    },
  };
}

export function buildWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(OG_IMAGE_PATH),
    },
    about: {
      "@type": "Person",
      name: CANDIDATE.name,
    },
  };
}
