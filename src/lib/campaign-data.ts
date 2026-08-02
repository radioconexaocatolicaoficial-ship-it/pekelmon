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
  facebook: "https://www.facebook.com/padrekelmonoficial",
  youtube: "https://www.youtube.com/@padrekelmon",
  x: "https://x.com/padrekelmon",
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
      "A família como base da sociedade brasileira, com respeito ao papel dos pais na formação e na educação dos filhos.",
  },
  {
    icon: Shield,
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
  {
    icon: Users,
    title: "Valorização da Juventude",
    description:
      "Apoio aos jovens brasileiros com oportunidades de educação, emprego e participação na construção do país.",
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
