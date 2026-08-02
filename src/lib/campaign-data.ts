import {
  HeartHandshake,
  Church,
  Cross,
  Flag,
  TrendingUp,
  ShieldCheck,
  Scale,
  type LucideIcon,
} from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const CANDIDATE = {
  name: "Padre Kelmon",
  fullName: "Kelmon Luís da Silva Souza",
  role: "Pré-candidato a Deputado Federal por São Paulo",
  party: "PL",
  instagram: "https://www.instagram.com/pekelmon/",
  facebook: "https://www.facebook.com/padrekelmonoficial",
  youtube: "https://www.youtube.com/@padrekelmon",
  x: "https://x.com/padrekelmon",
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

/** Fontes públicas: Wikipédia (pt), O Globo (19/03/2026), Congresso em Foco (20/03/2026). */
export const TIMELINE: TimelineItem[] = [
  {
    year: "1976",
    title: "Nascimento em Acajutiba (BA)",
    description:
      "Nasce em 21 de outubro de 1976, em Acajutiba, na Bahia, filho de Risoldete e José Gomes, em uma família católica.",
  },
  {
    year: "Anos 1990",
    title: "Juventude e vida comunitária",
    description:
      "Ainda adolescente, lidera grupos de jovens como a Legião de Maria, atua na comunidade ecumênica de Taizé e participa da criação do grupo JUSPE — Jovens Unidos Semeando Paz e Esperança.",
  },
  {
    year: "A partir dos 20 anos",
    title: "Formação no seminário",
    description:
      "Ingressa no seminário Mater Ecclesiae, dos Legionários de Cristo, em São Paulo, seguindo a formação nos seminários Santana (romano) e Santa Catarina de Alexandria (ortodoxo).",
  },
  {
    year: "2003",
    title: "Caminho ortodoxo",
    description:
      "Decide seguir o cristianismo ortodoxo, tradição na qual passa a exercer seu ministério, celebrando missas e batismos na Bahia.",
  },
  {
    year: "2010",
    title: "Vida em Brasília",
    description:
      "Passa a manter em Brasília a loja de artigos religiosos Jabuti, conciliando trabalho e atividade religiosa.",
  },
  {
    year: "2022",
    title: "Candidatura à Presidência da República",
    description:
      "Concorre à Presidência pelo PTB e recebe 81.129 votos (cerca de 0,07%). Torna-se nacionalmente conhecido pelo discurso conservador e pela defesa de pautas cristãs nos debates televisivos.",
  },
  {
    year: "2024",
    title: "Filiação ao Partido Liberal",
    description: "Filia-se ao PL, partido do ex-presidente Jair Bolsonaro, em agosto de 2024.",
  },
  {
    year: "2026",
    title: "Pré-candidatura a Deputado Federal por SP",
    description:
      "Confirma a pré-candidatura à Câmara dos Deputados por São Paulo pelo PL, afirmando cumprir “a missão de Deus” e um chamado do seu líder político. “Juntos vamos resgatar o Brasil.”",
  },
];

export type Bandeira = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Pautas baseadas em posicionamentos públicos amplamente noticiados.
 * Revisar e ajustar com a assessoria antes da publicação oficial.
 */
export const BANDEIRAS: Bandeira[] = [
  {
    icon: HeartHandshake,
    title: "Defesa da Família",
    description:
      "A família como base da sociedade brasileira, com respeito ao papel dos pais na formação e na educação dos filhos.",
  },
  {
    icon: Cross,
    title: "Defesa da Vida",
    description:
      "Posicionamento público e histórico ao lado do movimento pró-vida, da concepção até o fim natural.",
  },
  {
    icon: Church,
    title: "Liberdade Religiosa",
    description:
      "Garantia de que templos, ministros e fiéis possam viver e anunciar sua fé livremente, sem perseguição.",
  },
  {
    icon: Flag,
    title: "Patriotismo",
    description:
      "Amor ao Brasil, valorização dos símbolos nacionais e defesa da soberania do país e do seu povo.",
  },
  {
    icon: TrendingUp,
    title: "Liberdade Econômica",
    description:
      "Menos burocracia e menos peso do Estado sobre quem empreende, gera emprego e sustenta sua família.",
  },
  {
    icon: ShieldCheck,
    title: "Combate à Corrupção",
    description:
      "Transparência no uso do dinheiro público e rigor com quem trai a confiança do cidadão brasileiro.",
  },
  {
    icon: Scale,
    title: "Defesa da Constituição",
    description:
      "Respeito ao Estado Democrático de Direito, às liberdades individuais e aos limites entre os Poderes.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/**
 * PLACEHOLDER: substituir pelas fotos oficiais do acervo da campanha
 * (registros do Instagram @pekelmon, eventos, agenda e apoiadores).
 */
export const GALLERY: GalleryItem[] = [
  {
    src: gallery1,
    alt: "Multidão em ato público com bandeiras do Brasil ao entardecer",
    caption: "Imagem ilustrativa — substituir por foto oficial de ato público",
    width: 1024,
    height: 1280,
  },
  {
    src: gallery2,
    alt: "Interior de igreja cristã com velas acesas e ícones dourados",
    caption: "Imagem ilustrativa — substituir por registro de celebração religiosa",
    width: 1024,
    height: 768,
  },
  {
    src: heroPortrait,
    alt: "Silhueta de sacerdote discursando em um púlpito",
    caption: "Imagem ilustrativa — substituir por foto institucional do Padre Kelmon",
    width: 1024,
    height: 1280,
  },
  {
    src: gallery3,
    alt: "Bandeira do Brasil tremulando contra o céu azul",
    caption: "Imagem ilustrativa — substituir por registro de agenda patriótica",
    width: 1024,
    height: 1024,
  },
  {
    src: gallery4,
    alt: "Mãos de uma família unidas em oração sobre uma mesa de madeira",
    caption: "Imagem ilustrativa — substituir por foto com apoiadores e famílias",
    width: 1024,
    height: 1280,
  },
  {
    src: gallery5,
    alt: "Vista aérea da cidade de São Paulo no fim da tarde",
    caption: "Imagem ilustrativa — substituir por registro de agenda em São Paulo",
    width: 1280,
    height: 853,
  },
];

export type VideoItem = {
  title: string;
  description: string;
  url: string;
};

/**
 * PLACEHOLDER: inserir aqui os vídeos oficiais (YouTube/Instagram).
 * Substituir `url` pelo link de incorporação assim que a assessoria liberar.
 */
export const VIDEOS: VideoItem[] = [
  {
    title: "Anúncio da pré-candidatura",
    description: "Pronunciamento publicado nas redes sociais confirmando a disputa por São Paulo.",
    url: CANDIDATE.instagram,
  },
  {
    title: "Fé, família e Brasil",
    description: "Espaço reservado para o vídeo de apresentação das bandeiras da campanha.",
    url: CANDIDATE.instagram,
  },
  {
    title: "Agenda com apoiadores",
    description: "Espaço reservado para os melhores momentos dos encontros pelo estado.",
    url: CANDIDATE.instagram,
  },
];

export type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note: string;
};

/** Apenas indicadores públicos e verificáveis. */
export const STATS: StatItem[] = [
  {
    value: 81129,
    label: "Votos na eleição presidencial de 2022",
    note: "Fonte: resultado oficial do pleito de 2022",
  },
  {
    value: 30,
    suffix: "+",
    label: "Anos de vida comunitária e religiosa",
    note: "Desde a atuação em grupos de jovens nos anos 1990",
  },
  {
    value: 645,
    label: "Municípios de São Paulo a representar",
    note: "Território alcançado por um mandato federal paulista",
  },
];
