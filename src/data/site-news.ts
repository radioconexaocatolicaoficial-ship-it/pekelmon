import { SETE_SETEMBRO_ARTICLE } from "@/data/sete-setembro-article";

export type SiteNewsItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateIso: string;
  source: string;
  author: string;
  href: string;
  image: string;
  imageAlt: string;
  internal: boolean;
};

export const SITE_NEWS: SiteNewsItem[] = [
  {
    slug: "7-de-setembro-paulista",
    title: SETE_SETEMBRO_ARTICLE.title,
    description: SETE_SETEMBRO_ARTICLE.lead,
    date: SETE_SETEMBRO_ARTICLE.date,
    dateIso: "2026-09-07",
    source: SETE_SETEMBRO_ARTICLE.source,
    author: "Padre Kelmon",
    href: "/imprensa/7-de-setembro",
    image: SETE_SETEMBRO_ARTICLE.image,
    imageAlt: "Padre Kelmon convoca São Paulo para o ato na Avenida Paulista no 7 de Setembro",
    internal: true,
  },
  {
    slug: "acesse-politica-camara",
    title: "Baiano, Padre Kelmon tenta chegar à Câmara dos Deputados após destaque nos debates de 2022",
    description:
      "Após a disputa presidencial, o religioso é candidato a deputado federal por São Paulo pelo PL.",
    date: "04/08/2026",
    dateIso: "2026-08-04",
    source: "Acesse Política",
    author: "Acesse Política",
    href: "https://acessepolitica.com.br/noticia/179453/baiano-padre-kelmon-tenta-chegar-a-camara-dos-deputados-apos-destaque-nos-debates-de-2022",
    image: "/news/acesse-politica-kelmon.webp",
    imageAlt: "Matéria do portal Acesse Política sobre Padre Kelmon",
    internal: false,
  },
  {
    slug: "ndmais-debates-2022",
    title: "Eles roubaram a cena: relembre 6 candidatos que marcaram eleições no Brasil",
    description:
      "A matéria inclui Padre Kelmon na memória eleitoral de 2022, com os debates e os 81 mil votos.",
    date: "16/08/2026",
    dateIso: "2026-08-16",
    source: "ND Mais",
    author: "ND Mais",
    href: "https://ndmais.com.br/politica/candidatos-curiosos-que-marcaram-eleicoes-no-brasil/",
    image: "/news/ndmais-candidatos.jpg",
    imageAlt: "Matéria do ND Mais sobre candidatos que marcaram eleições no Brasil",
    internal: false,
  },
  {
    slug: "7minutos-liderancas-cristas",
    title:
      "Padre Kelmon reúne lideranças cristãs em apoio a Flávio Bolsonaro e celebra 11 anos de sacerdócio",
    description:
      "Encontro de lideranças cristãs reforça a pré-campanha e marca mais um ano de ministério.",
    date: "08/2026",
    dateIso: "2026-08-01",
    source: "7Minutos",
    author: "7Minutos",
    href: "https://7minutos.com.br/noticias/padre-kelmon-reune-liderancas-cristas-em-apoio-a-pre-campanha-de-flavio-bolsonaro-e-celebra-11-anos-de-sacerdocio/",
    image: "/news/7minutos-liderancas.webp",
    imageAlt: "Padre Kelmon em encontro com lideranças cristãs, matéria do 7Minutos",
    internal: false,
  },
];
