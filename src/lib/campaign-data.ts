import {
  Heart,
  Church,
  Shield,
  Flag,
  TrendingUp,
  ShieldCheck,
  Scale,
  Users,
  Landmark,
  type LucideIcon,
} from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroPortrait from "@/assets/hero-portrait.webp";

export const CANDIDATE = {
  name: "Padre Kelmon",
  fullName: "Kelmon Luís da Silva Souza",
  role: "Candidato a Deputado Federal por São Paulo",
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
      "Confirma candidatura à Câmara dos Deputados por São Paulo pelo PL. Com formação em Filosofia, Teologia e Pedagogia, afirma cumprir 'a missão de Deus'. Mensagem: 'Juntos vamos resgatar o Brasil.'",
  },
];

export type Bandeira = {
  icon: LucideIcon;
  title: string;
  badge: string;
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
    badge: "Família",
    description:
      "Fortalecer a família tradicional brasileira como núcleo fundamental da sociedade. Defender o direito dos pais na educação dos filhos, proteção da infância e juventude contra ideologias nocivas, e promoção de políticas públicas que valorizem o casamento e a maternidade.",
  },
  {
    icon: Shield,
    title: "Defesa da Vida",
    badge: "Segurança",
    description:
      "Proteção incondicional da vida humana desde a concepção até a morte natural. Combate ao aborto em todas as suas formas, apoio a mães em situação de vulnerabilidade, e defesa de uma cultura que valorize e proteja a vida em todas as suas fases.",
  },
  {
    icon: Church,
    title: "Liberdade Religiosa",
    badge: "Livre arbítrio",
    description:
      "Garantia plena da liberdade de culto, expressão da fé e manifestação religiosa. Proteção dos templos, ministros religiosos e fiéis contra perseguições, censura ou restrições injustas. Defesa do direito de viver e anunciar os valores cristãos no espaço público.",
  },
  {
    icon: Flag,
    title: "Patriotismo",
    badge: "Brasil",
    description:
      "Valorização dos símbolos nacionais, resgate da história do Brasil e promoção do amor à pátria. Defesa da soberania nacional, fortalecimento das Forças Armadas, e combate a ideologias que desvalorizam a identidade e os valores do povo brasileiro.",
  },
  {
    icon: TrendingUp,
    title: "Liberdade Econômica",
    badge: "Seu dinheiro",
    description:
      "Redução da burocracia e do peso do Estado sobre empreendedores e trabalhadores. Defesa da livre iniciativa, simplificação tributária, incentivo à geração de empregos e apoio aos pequenos e médios empresários que sustentam suas famílias e movem a economia do país.",
  },
  {
    icon: ShieldCheck,
    title: "Combate à Corrupção",
    badge: "Fora esquerda",
    description:
      "Rigor absoluto contra desvios de recursos públicos e transparência total no uso do dinheiro do cidadão. Punição severa para políticos corruptos, fortalecimento dos órgãos de controle e fiscalização, e compromisso com a ética e honestidade na gestão pública.",
  },
  {
    icon: Scale,
    title: "Defesa da Constituição",
    badge: "Respeito",
    description:
      "Respeito irrestrito ao Estado Democrático de Direito e à separação dos Poderes. Defesa das liberdades individuais, direitos fundamentais e garantias constitucionais. Combate a abusos de autoridade e preservação do equilíbrio institucional da República.",
  },
  {
    icon: Users,
    title: "Valorização da Juventude",
    badge: "Futuro",
    description:
      "Investimento na formação integral dos jovens brasileiros com educação de qualidade, oportunidades de primeiro emprego e incentivos ao empreendedorismo juvenil. Proteção contra drogas, violência e ideologias destrutivas, promovendo valores sólidos e esperança no futuro.",
  },
  {
    icon: Landmark,
    title: "Foro do Brasil",
    badge: "Conservadorismo",
    description:
      "Fortalecer o Foro do Brasil, movimento fundado por Padre Kelmon em 29 de junho de 2023 no Congresso Nacional, do qual é Presidente Nacional. Unir cidadãos em defesa da liberdade, da fé cristã, da ordem e do progresso, com diretórios em todo o país e no exterior. Levar à Câmara dos Deputados a mesma missão: articular o pensamento conservador e resgatar o Brasil com valores cristãos, soberania nacional e dignidade da pessoa humana.",
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
    title: "Anúncio da candidatura",
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
      "Candidato a Deputado Federal por São Paulo pelo Partido Liberal, alinhado ao projeto de resgate do Brasil e à representação do povo paulista.",
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
  newsUrl: "https://forobrasil.org/noticias/",
  aboutUrl: "https://forobrasil.org/sobre/",
  directoriesUrl: "https://forobrasil.org/diretorios/",
  contactUrl: "https://forobrasil.org/contato/",
  founded: "29 de junho de 2023",
  role: "Presidente Nacional",
  slogan: "Liberdade, Humanidade, Cristianismo e a União entre povos",
  tagline: "Pelo Brasil que acreditamos, pelos direitos que defendemos",
  description:
    "O Foro do Brasil é um espaço de representação e defesa dos valores que sustentam uma sociedade livre e justa. Atua em prol da liberdade, da propriedade, da livre expressão e do direito dos cidadãos, promovendo iniciativas que fortalecem a cultura, a educação, a saúde e a dignidade humana.",
  quote:
    "O Brasil precisa de uma organização política que una cidadãos comprometidos com a liberdade, a ordem e o progresso. O Foro do Brasil é esse espaço.",
  quoteAuthor: "Padre Kelmon, Presidente Nacional",
  values: [
    {
      title: "Liberdade",
      description: "Defesa das liberdades fundamentais e dos direitos individuais.",
    },
    {
      title: "Propriedade",
      description: "Proteção da propriedade e da livre iniciativa das famílias brasileiras.",
    },
    {
      title: "Livre expressão",
      description: "Direito de falar, crer e participar da vida pública sem censura.",
    },
    {
      title: "Dignidade humana",
      description: "Cultura, educação, saúde e respeito à pessoa humana em primeiro lugar.",
    },
  ],
  pillars: [
    {
      title: "Defendendo valores, fortalecendo a sociedade",
      description:
        "Conheça a missão, os princípios e a atuação do Foro em defesa da liberdade, da justiça e dos direitos individuais.",
      href: "https://forobrasil.org/sobre/",
      cta: "Conheça o Foro",
    },
    {
      title: "Presença em todo o Brasil e no mundo",
      description:
        "Diretórios e lideranças em cada região, com frentes de juventude, mulheres, indígenas e presença no Equador e no Peru.",
      href: "https://forobrasil.org/diretorios/",
      cta: "Conheça os Diretórios",
    },
    {
      title: "Junte-se a nós e apoie o Foro do Brasil",
      description:
        "Seja parte dessa transformação. Descubra como contribuir e fortalecer a missão pelo Brasil que acreditamos.",
      href: "https://forobrasil.org/contato/",
      cta: "Faça Parte",
    },
  ],
  fronts: [
    { label: "Diretórios Estaduais", href: "https://forobrasil.org/diretorios/" },
    { label: "Juventude", href: "https://forobrasil.org/foro-do-brasil-juventude/" },
    { label: "Mulher", href: "https://forobrasil.org/foro-do-brasil-mulher/" },
    { label: "Indígena", href: "https://forobrasil.org/foro-do-brasil-indigena/" },
    { label: "Equador", href: "https://forobrasil.org/foro-do-brasil-equador/" },
    { label: "Peru", href: "https://forobrasil.org/foro-do-brasil-peru/" },
  ],
};

export const PARTIDO_LIBERAL = {
  name: "Partido Liberal",
  shortName: "PL",
  number: "22",
  url: "https://partidoliberal.org.br/",
  affiliationUrl:
    "https://partidoliberal.org.br/valdemar-assina-ficha-de-filiacao-de-padre-kelmon-ao-pl/",
  joinUrl: "https://queromefiliaraopl.com.br/",
  donateUrl: "https://www.partidoliberal.org.br/doacao/",
  joined: "14 de agosto de 2024",
  role: "Filiado ao PL 22",
  photoCredit: "Foto: Beto Barata/PL",
  slogan: "Liberdade, Verdade e Fé, pelo bem do Brasil",
  description:
    "Em 14 de agosto de 2024, na sede do Partido Liberal em Brasília, o presidente nacional Valdemar Costa Neto assinou a ficha de filiação de Padre Kelmon. A chegada do sacerdote fortalece o partido e reafirma o compromisso da sigla com o futuro do Brasil. Na cerimônia, Kelmon destacou 25 anos dedicados à juventude e o chamado a líderes comprometidos com Deus, pátria, família, vida e liberdade.",
  quote:
    "Como padre, meu compromisso é servir ao povo, e na política, não é diferente. Estamos aqui para servir à comunidade, ao povo, à nação. No PL, pretendo me dedicar com o mesmo zelo, pois precisamos de líderes comprometidos com Deus, pátria, família, vida e liberdade.",
  quoteAuthor: "Padre Kelmon, na filiação ao PL",
  values: [
    {
      title: "Deus",
      description: "Fé cristã na vida pública e liberdade religiosa como compromisso inegociável.",
    },
    {
      title: "Pátria",
      description: "Servir à nação com zelo, responsabilidade e amor ao Brasil.",
    },
    {
      title: "Família e vida",
      description: "Defesa da família e da vida, do nascimento à dignidade de cada pessoa.",
    },
    {
      title: "Liberdade",
      description: "Líderes comprometidos com a liberdade do povo e com o futuro do Brasil.",
    },
  ],
  news: [
    {
      source: "PL 22",
      date: "16/08/2026",
      title: "Flávio Bolsonaro vai honrar a escolha do pai com o lema “O Brasil Vai Vencer”",
      description:
        "O candidato do PL à Presidência reafirma o lema da campanha e o compromisso de honrar a escolha de Jair Bolsonaro.",
      href: "https://partidoliberal.org.br/flavio-bolsonaro-vai-honrar-a-escolha-do-pai-com-o-lema-o-brasil-vai-vencer/",
      image: "/news/flavio-brasil-vai-vencer.jpg",
    },
    {
      source: "PL 22",
      date: "11/08/2026",
      title:
        "“Juntos com este time para resgatar o Brasil”, diz Flávio Bolsonaro ao lado dos candidatos ao Senado",
      description:
        "O senador recebe candidatos conservadores ao Senado e reforça a união para resgatar o Brasil.",
      href: "https://partidoliberal.org.br/juntos-com-este-time-para-resgatar-o-brasil-diz-flavio-bolsonaro-ao-lado-dos-candidatos-conservadores-ao-senado/",
      image: "/news/flavio-time-senado.jpg",
    },
    {
      source: "PL 22",
      date: "25/07/2026",
      title: "Flávio Bolsonaro fala em resgatar o Brasil e varrer o PT na Convenção do PL",
      description:
        "A Convenção Nacional do PL, em São Paulo, oficializa a candidatura de Flávio Bolsonaro à Presidência.",
      href: "https://partidoliberal.org.br/flavio-bolsonaro-fala-em-resgatar-o-brasil-e-varrer-o-pt-na-convencao-do-pl/",
      image: "/news/flavio-convencao-pl.jpg",
    },
    {
      source: "PL 22",
      date: "07/07/2026",
      title:
        "Valdemar Costa Neto anuncia o lançamento da candidatura de Flávio Bolsonaro à Presidência",
      description:
        "O presidente nacional do PL convoca o Brasil para a Convenção que lança a chapa presidencial da legenda.",
      href: "https://partidoliberal.org.br/valdemar-costa-neto-anuncia-lancamento-da-candidatura-do-senador-flavio-bolsonaro-a-presidencia-da-republica/",
      image: "/news/flavio-valdemar-lancamento.jpg",
    },
  ],
  fronts: [
    {
      label: "Matéria da filiação",
      href: "https://partidoliberal.org.br/valdemar-assina-ficha-de-filiacao-de-padre-kelmon-ao-pl/",
    },
    { label: "Site oficial", href: "https://partidoliberal.org.br/" },
    { label: "Filie-se", href: "https://queromefiliaraopl.com.br/" },
    { label: "Doação", href: "https://www.partidoliberal.org.br/doacao/" },
  ],
};
