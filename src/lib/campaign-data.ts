import {
  Heart,
  Church,
  Shield,
  Flag,
  TrendingUp,
  ShieldCheck,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroPortrait from "@/assets/hero-portrait.png";

export const CANDIDATE = {
  name: "Padre Kelmon",
  fullName: "Kelmon Luís da Silva Souza",
  role: "Pré-candidato a Deputado Federal por São Paulo",
  party: "PL",
  instagram: "https://www.instagram.com/pekelmon/",
  facebook: "https://www.facebook.com/PadreKelmon",
  youtube: "https://www.youtube.com/@PadreKelmonBr",
  x: "https://x.com/PeKelmon",
  tiktok: "https://www.tiktok.com/@pekelmon",
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

/** Fontes: Foro Brasil (biografia oficial), Wikipédia, veículos de imprensa. Informações condensadas para divulgação política. */
export const TIMELINE: TimelineItem[] = [
  {
    year: "1976",
    title: "Nascimento em Salvador, Bahia",
    description:
      "Nasce em 21 de outubro de 1976, às 14h45, em Salvador, Bahia. Primogênito de Risoldete da Silva Souza e José Gomes de Souza, cresce com mais três irmãos em uma família católica tradicional.",
  },
  {
    year: "1977-1995",
    title: "Formação católica e liderança juvenil",
    description:
      "Batizado em 25 de dezembro de 1977, recebe a Primeira Eucaristia aos 10 anos (1986) e a Crisma aos 19 anos (1995). Aos 20, passa a servir ativamente na Legião de Maria, Pastoral da Criança e Escola da Fé da Comunidade de Taizé. É cofundador do grupo JUSPE (Jovens Unidos Semeando Paz e Esperança).",
  },
  {
    year: "1996",
    title: "Convento dos Capuchinhos",
    description:
      "Vive no convento dos Frades Capuchinhos em Maceió, onde estabelece vínculo com o frei Severino Batista França (hoje bispo emérito no Recife) e aprofunda seu chamado ao sacerdócio.",
  },
  {
    year: "2000-2003",
    title: "Seminário e formação acadêmica",
    description:
      "Em 23 de fevereiro de 2000, inicia formação seminarista em São Paulo com os Legionários de Cristo. Torna-se membro fundador do Seminário Maria Mater Ecclesiae do Brasil, cursando Filosofia, Teologia e Pedagogia. Conhece a tradição católica oriental melquita.",
  },
  {
    year: "2010",
    title: "Ativismo pró-vida",
    description:
      "Coordena ação nacional de conscientização contra a então candidata Dilma Rousseff, baseada em documento da CNBB Regional Sul 1, com apoio de Dom Luiz Gonzaga Bergonzini. Consolida-se como voz conservadora cristã.",
  },
  {
    year: "2014-2015",
    title: "Ordenação sacerdotal",
    description:
      "Funda a associação missionária Theotokos. Em 2014, é ordenado diácono pela Igreja Ortodoxa Sirian de Antioquia. Em 2 de agosto de 2015, é ordenado sacerdote na Igreja Ortodoxa da América por Dom Ioannes de Santa Catarina.",
  },
  {
    year: "2017",
    title: "Missão humanitária em Roraima",
    description:
      "Viaja a Roraima para testemunhar e auxiliar refugiados venezuelanos na crise humanitária, fortalecendo sua oposição aos regimes socialistas na América Latina.",
  },
  {
    year: "2019-2021",
    title: "Fundação do Movimento Cristão Conservador",
    description:
      "Conhece Roberto Jefferson, que o convida para colaborar com o PTB. A pedido de Jefferson, funda o Movimento Cristão Conservador (MCC), tornando-se seu primeiro presidente nacional.",
  },
  {
    year: "2022",
    title: "Candidatura presidencial pelo PTB",
    description:
      "Com impedimento de Jefferson, é indicado candidato à Presidência tendo pastor Gamonal como vice. Em 19 dias de campanha, percorre quase todo o país e participa de debates nacionais (SBT e Globo). Obtém 81.129 votos.",
  },
  {
    year: "2023",
    title: "Fundação do Foro do Brasil",
    description:
      "Funda o Foro do Brasil em cerimônia no Congresso Nacional (29/06/2023). O movimento articula o pensamento conservador nacional, com diretórios em diversos estados.",
  },
  {
    year: "2024",
    title: "Livro e filiação ao PL",
    description:
      "Lança 'Fé e Política de Mãos Dadas' na Livraria Drummond. Em agosto, filia-se ao Partido Liberal (PL 22), partido do ex-presidente Jair Bolsonaro.",
  },
  {
    year: "2025",
    title: "Programas na VV8 TV",
    description:
      "Estreia em 2 de junho o talk show 'Confessionário com Padre Kelmon' e 'Oração pelo Brasil' na VV8 TV (Valinhos/SP), abordando fé, política e cultura sob perspectiva conservadora.",
  },
  {
    year: "2026",
    title: "Deputado Federal por São Paulo",
    description:
      "Confirma pré-candidatura à Câmara dos Deputados por São Paulo pelo PL. Com formação em Filosofia, Teologia e Pedagogia, afirma cumprir 'a missão de Deus'. Mensagem: 'Juntos vamos resgatar o Brasil.'",
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
    icon: Heart,
    title: "Defesa da Família",
    description:
      "Fortalecer a família tradicional brasileira como núcleo fundamental da sociedade. Defender o direito dos pais na educação dos filhos, proteção da infância e juventude contra ideologias nocivas, e promoção de políticas públicas que valorizem o casamento e a maternidade.",
  },
  {
    icon: Shield,
    title: "Defesa da Vida",
    description:
      "Proteção incondicional da vida humana desde a concepção até a morte natural. Combate ao aborto em todas as suas formas, apoio a mães em situação de vulnerabilidade, e defesa de uma cultura que valorize e proteja a vida em todas as suas fases.",
  },
  {
    icon: Church,
    title: "Liberdade Religiosa",
    description:
      "Garantia plena da liberdade de culto, expressão da fé e manifestação religiosa. Proteção dos templos, ministros religiosos e fiéis contra perseguições, censura ou restrições injustas. Defesa do direito de viver e anunciar os valores cristãos no espaço público.",
  },
  {
    icon: Flag,
    title: "Patriotismo",
    description:
      "Valorização dos símbolos nacionais, resgate da história do Brasil e promoção do amor à pátria. Defesa da soberania nacional, fortalecimento das Forças Armadas, e combate a ideologias que desvalorizam a identidade e os valores do povo brasileiro.",
  },
  {
    icon: TrendingUp,
    title: "Liberdade Econômica",
    description:
      "Redução da burocracia e do peso do Estado sobre empreendedores e trabalhadores. Defesa da livre iniciativa, simplificação tributária, incentivo à geração de empregos e apoio aos pequenos e médios empresários que sustentam suas famílias e movem a economia do país.",
  },
  {
    icon: ShieldCheck,
    title: "Combate à Corrupção",
    description:
      "Rigor absoluto contra desvios de recursos públicos e transparência total no uso do dinheiro do cidadão. Punição severa para políticos corruptos, fortalecimento dos órgãos de controle e fiscalização, e compromisso com a ética e honestidade na gestão pública.",
  },
  {
    icon: Scale,
    title: "Defesa da Constituição",
    description:
      "Respeito irrestrito ao Estado Democrático de Direito e à separação dos Poderes. Defesa das liberdades individuais, direitos fundamentais e garantias constitucionais. Combate a abusos de autoridade e preservação do equilíbrio institucional da República.",
  },
  {
    icon: Users,
    title: "Valorização da Juventude",
    description:
      "Investimento na formação integral dos jovens brasileiros com educação de qualidade, oportunidades de primeiro emprego e incentivos ao empreendedorismo juvenil. Proteção contra drogas, violência e ideologias destrutivas, promovendo valores sólidos e esperança no futuro.",
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

export type TrustPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Indicadores públicos e verificáveis — foco em credibilidade e trajetória. */
export const STATS: StatItem[] = [
  {
    value: 81129,
    label: "Votos na eleição presidencial de 2022",
    note: "Alcance nacional em 19 dias de campanha — resultado oficial do TSE",
  },
  {
    value: 2,
    suffix: "+",
    label: "Anos liderando o Foro do Brasil",
    note: "Movimento fundado em 29/06/2023; Instituto constituído em 2025",
  },
  {
    value: 6,
    suffix: "+",
    label: "Estados com presença organizada",
    note: "Diretórios e caravanas em SP, RJ, SC, MG, PR e outros",
  },
  {
    value: 30,
    suffix: "+",
    label: "Anos de fé e serviço comunitário",
    note: "Da formação juvenil e missionária à defesa pública dos valores cristãos",
  },
];

/** Pilares de confiança para o eleitor — sem controvérsias, só qualificações públicas. */
export const TRUST_PILLARS: TrustPillar[] = [
  {
    icon: Flag,
    title: "Experiência nacional",
    description:
      "Ex-candidato à Presidência da República, com participação em debates nacionais e mensagem clara em defesa da família, da liberdade e do Brasil.",
  },
  {
    icon: Users,
    title: "Liderança do Foro do Brasil",
    description:
      "Fundador e Presidente Nacional do Foro do Brasil — articulação conservadora com juventude, mulheres, indígenas e presença internacional.",
  },
  {
    icon: ShieldCheck,
    title: "Candidatura pelo PL em São Paulo",
    description:
      "Pré-candidato a Deputado Federal por São Paulo pelo Partido Liberal, alinhado ao projeto de resgate do Brasil e à representação do povo paulista.",
  },
  {
    icon: Church,
    title: "Voz cristã na vida pública",
    description:
      "Trajetória marcada pela fé ortodoxa, programas de comunicação e defesa da liberdade religiosa, da vida e da dignidade da pessoa humana.",
  },
];

export const FORO_BRASIL = {
  name: "Foro do Brasil",
  url: "https://forobrasil.org/",
  aboutUrl: "https://forobrasil.org/sobre/",
  founded: "29 de junho de 2023",
  role: "Presidente Nacional",
  tagline: "Pelo Brasil que acreditamos, pelos direitos que defendemos",
  description:
    "Espaço de representação e defesa da liberdade, da propriedade, da livre expressão e da dignidade humana. Com caravanas, diretórios estaduais e frentes de juventude, mulheres e indígenas, o Foro fortalece a cultura, a educação e a soberania nacional sob a liderança do Padre Kelmon.",
};
