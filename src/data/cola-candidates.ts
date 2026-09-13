import kelmonPhoto from "@/assets/padre-kelmon-original.jpg";

export const COLA_DEMO_DISCLAIMER =
  "DADO DE DEMONSTRAÇÃO — confirmar em fonte oficial.";

export type CandidateSource = {
  name: string;
  url: string;
  consultedAt: string;
};

export type Candidate = {
  id: string;
  name: string;
  ballotName: string;
  number: string;
  party: string;
  position: PositionKey;
  state: string;
  photo: string | null;
  biography: string;
  trajectory: string;
  proposals: string[];
  electoralInfo: string;
  status: string;
  sources: CandidateSource[];
  updatedAt: string;
  demo: boolean;
};

export type PositionKey =
  | "federal"
  | "estadual"
  | "senador1"
  | "senador2"
  | "governador"
  | "presidente";

export type PositionSlot = {
  key: PositionKey;
  order: number;
  label: string;
  shortLabel: string;
  digits: number;
};

export const POSITIONS: PositionSlot[] = [
  { key: "federal", order: 1, label: "Deputado Federal", shortLabel: "Dep. Federal", digits: 4 },
  {
    key: "estadual",
    order: 2,
    label: "Deputado Estadual / Distrital",
    shortLabel: "Dep. Estadual",
    digits: 5,
  },
  { key: "senador1", order: 3, label: "Senador — 1ª vaga", shortLabel: "Senador 1", digits: 3 },
  { key: "senador2", order: 4, label: "Senador — 2ª vaga", shortLabel: "Senador 2", digits: 3 },
  { key: "governador", order: 5, label: "Governador", shortLabel: "Governador", digits: 2 },
  { key: "presidente", order: 6, label: "Presidente", shortLabel: "Presidente", digits: 2 },
];

export const EMPTY_SELECTION: Record<PositionKey, string | null> = {
  federal: null,
  estadual: null,
  senador1: null,
  senador2: null,
  governador: null,
  presidente: null,
};

const CONSULTED = "2026-09-13";

export const COLA_CANDIDATES: Candidate[] = [
  {
    id: "kelmon-2202",
    name: "Kelmon Luís da Silva Souza",
    ballotName: "Padre Kelmon",
    number: "2202",
    party: "PL",
    position: "federal",
    state: "SP",
    photo: kelmonPhoto,
    biography:
      "Candidato a Deputado Federal por São Paulo pelo Partido Liberal (PL). Sacerdote, fundador e Presidente Nacional do Foro do Brasil.",
    trajectory:
      "Nasceu em Salvador (BA), em 21 de outubro de 1976. Formação em Filosofia, Teologia e Pedagogia. Em 2022, foi candidato à Presidência e obteve 81.129 votos, segundo o TSE. Em 2023, fundou o Foro do Brasil. Em 2024, filiou-se ao PL.",
    proposals: [
      "Defesa da família",
      "Defesa da vida",
      "Liberdade religiosa",
      "Patriotismo",
      "Liberdade econômica",
    ],
    electoralInfo:
      "Candidatura a Deputado Federal por São Paulo, número 2202, Partido Liberal. Informações de campanha no site oficial.",
    status: "Candidatura divulgada pela campanha. Confirmar registro no TSE.",
    sources: [
      {
        name: "Site oficial do candidato",
        url: "https://padrekelmon.com.br/",
        consultedAt: CONSULTED,
      },
      {
        name: "TSE — resultado eleitoral de 2022",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
  {
    id: "polegar-15084",
    name: "Marcelo Polegar",
    ballotName: "Marcelo Polegar",
    number: "15084",
    party: "MDB",
    position: "estadual",
    state: "SP",
    photo: null,
    biography: "Informação ainda não cadastrada a partir de fonte oficial.",
    trajectory: "Informação ainda não cadastrada a partir de fonte oficial.",
    proposals: [],
    electoralInfo:
      "Candidato a Deputado Estadual por São Paulo, número 15084, MDB. Confirmar registro no TSE.",
    status: "Candidatura de demonstração. Confirmar registro no TSE.",
    sources: [
      {
        name: "TSE",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
  {
    id: "prado-222",
    name: "André do Prado",
    ballotName: "André do Prado",
    number: "222",
    party: "PL",
    position: "senador1",
    state: "SP",
    photo: "/news/andre-prado-oficial.jpg",
    biography: "Candidato a Senador por São Paulo. Número 222.",
    trajectory: "Informação ainda não cadastrada a partir de fonte oficial.",
    proposals: [],
    electoralInfo: "Candidatura a Senador por São Paulo, número 222. Confirmar registro no TSE.",
    status: "Candidatura divulgada pela campanha. Confirmar registro no TSE.",
    sources: [
      {
        name: "Site oficial da campanha",
        url: "https://padrekelmon.com.br/",
        consultedAt: CONSULTED,
      },
      {
        name: "TSE",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
  {
    id: "derrite-111",
    name: "Guilherme Derrite",
    ballotName: "Guilherme Derrite",
    number: "111",
    party: "Republicanos",
    position: "senador2",
    state: "SP",
    photo: "/news/derrite-oficial.jpg",
    biography: "Candidato a Senador por São Paulo. Número 111.",
    trajectory: "Informação ainda não cadastrada a partir de fonte oficial.",
    proposals: [],
    electoralInfo: "Candidatura a Senador por São Paulo, número 111. Confirmar registro no TSE.",
    status: "Candidatura divulgada pela campanha. Confirmar registro no TSE.",
    sources: [
      {
        name: "Site oficial da campanha",
        url: "https://padrekelmon.com.br/",
        consultedAt: CONSULTED,
      },
      {
        name: "TSE",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
  {
    id: "tarcisio-10",
    name: "Tarcísio de Freitas",
    ballotName: "Tarcísio de Freitas",
    number: "10",
    party: "Republicanos",
    position: "governador",
    state: "SP",
    photo: "/news/tarcisio-oficial.jpg",
    biography: "Candidato a Governador de São Paulo. Número 10.",
    trajectory: "Informação ainda não cadastrada a partir de fonte oficial.",
    proposals: [],
    electoralInfo: "Candidatura a Governador de São Paulo, número 10. Confirmar registro no TSE.",
    status: "Candidatura divulgada pela campanha. Confirmar registro no TSE.",
    sources: [
      {
        name: "Site oficial da campanha",
        url: "https://padrekelmon.com.br/",
        consultedAt: CONSULTED,
      },
      {
        name: "TSE",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
  {
    id: "flavio-22",
    name: "Flávio Bolsonaro",
    ballotName: "Flávio Bolsonaro",
    number: "22",
    party: "PL",
    position: "presidente",
    state: "BR",
    photo: "/news/flavio-oficial.jpg",
    biography: "Candidato a Presidente da República. Número 22.",
    trajectory: "Informação ainda não cadastrada a partir de fonte oficial.",
    proposals: [],
    electoralInfo: "Candidatura a Presidente da República, número 22. Confirmar registro no TSE.",
    status: "Candidatura divulgada pela campanha. Confirmar registro no TSE.",
    sources: [
      {
        name: "Site oficial da campanha",
        url: "https://padrekelmon.com.br/",
        consultedAt: CONSULTED,
      },
      {
        name: "TSE",
        url: "https://www.tse.jus.br/",
        consultedAt: CONSULTED,
      },
    ],
    updatedAt: CONSULTED,
    demo: true,
  },
];
