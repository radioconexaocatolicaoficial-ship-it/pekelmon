import { CANDIDATE, FORO_BRASIL } from "./campaign-data";

/** URL canônica do site. Defina VITE_SITE_URL no .env de produção (ex.: https://www.dominio.com.br). */
export const SITE_URL = (
  typeof import.meta.env.VITE_SITE_URL === "string"
    ? import.meta.env.VITE_SITE_URL
    : ""
).replace(/\/$/, "");

export const SITE_NAME = "Padre Kelmon";

export const SITE_TITLE =
  "Padre Kelmon — Candidato a Deputado Federal, aprovado em convenção";

/** Meta description distinta do title (~150–160 caracteres) para SEO e redes. */
export const SITE_DESCRIPTION =
  "Padre Kelmon, candidato a Deputado Federal por São Paulo pelo PL. Fé, família e liberdade religiosa. Conheça a trajetória, as pautas e apoie a campanha.";

export const SITE_KEYWORDS =
  "Padre Kelmon, Deputado Federal, São Paulo, PL, Partido Liberal, candidato 2026, fé, família, liberdade religiosa, Foro do Brasil";

/** Query v= força WhatsApp/Facebook a buscar a imagem nova (cache agressivo). */
export const OG_IMAGE_PATH = "/og-image.jpg?v=10";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";

export const TWITTER_HANDLE = "@PeKelmon";

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

export function buildWebPageJsonLd() {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    logo: absoluteUrl("/favicon.png?v=5"),
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
