import { Newspaper } from "lucide-react";
import { useState, type CSSProperties } from "react";

import livroImg from "@/assets/livro-fe-e-politica-kelmon.png";
import { SeteSetembroArticleModal } from "@/components/landing/sete-setembro-article-modal";
import { SETE_SETEMBRO_ARTICLE } from "@/data/sete-setembro-article";

const HOME_NEWS = [
  {
    source: SETE_SETEMBRO_ARTICLE.source,
    date: SETE_SETEMBRO_ARTICLE.date,
    title: SETE_SETEMBRO_ARTICLE.title,
    description: SETE_SETEMBRO_ARTICLE.lead,
    url: SETE_SETEMBRO_ARTICLE.url,
    image: SETE_SETEMBRO_ARTICLE.image,
    objectPosition: SETE_SETEMBRO_ARTICLE.imagePosition,
    opensModal: true,
    external: false,
  },
  {
    source: "Acesse Política",
    date: "04/08/2026",
    title: "Baiano, Padre Kelmon tenta chegar à Câmara dos Deputados após destaque nos debates de 2022",
    description:
      "Após a disputa presidencial, o religioso é candidato a deputado federal por São Paulo pelo PL.",
    url: "https://acessepolitica.com.br/noticia/179453/baiano-padre-kelmon-tenta-chegar-a-camara-dos-deputados-apos-destaque-nos-debates-de-2022",
    image: "/news/acesse-politica-kelmon.webp",
    objectPosition: "center 18%",
    opensModal: false,
    external: true,
  },
  {
    source: "ND Mais",
    date: "16/08/2026",
    title: "Eles roubaram a cena: relembre 6 candidatos que marcaram eleições no Brasil",
    description:
      "A matéria inclui Padre Kelmon na memória eleitoral de 2022, com os debates e os 81 mil votos.",
    url: "https://ndmais.com.br/politica/candidatos-curiosos-que-marcaram-eleicoes-no-brasil/",
    image: "/news/ndmais-candidatos.jpg",
    objectPosition: "center 30%",
    opensModal: false,
    external: false,
  },
  {
    source: "7Minutos",
    date: "08/2026",
    title:
      "Padre Kelmon reúne lideranças cristãs em apoio a Flávio Bolsonaro e celebra 11 anos de sacerdócio",
    description:
      "Encontro de lideranças cristãs reforça a pré-campanha e marca mais um ano de ministério.",
    url: "https://7minutos.com.br/noticias/padre-kelmon-reune-liderancas-cristas-em-apoio-a-pre-campanha-de-flavio-bolsonaro-e-celebra-11-anos-de-sacerdocio/",
    image: "/news/7minutos-liderancas.webp",
    objectPosition: "center center",
    opensModal: false,
    external: false,
  },
] as const;

const BOOK_URL =
  "https://7minutos.com.br/variedades/leitura/padre-kelmon-lanca-seu-livro-fe-e-politica-de-maos-dadas/";

function NewsCardMedia({
  item,
}: {
  item: (typeof HOME_NEWS)[number];
}) {
  return (
    <>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200">
        <img
          src={item.image}
          alt=""
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
          style={{ objectPosition: item.objectPosition } as CSSProperties}
        />
      </div>
      <div className="flex flex-col gap-0.5 p-1.5 sm:p-2">
        <p className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500">
          <Newspaper className="size-2.5 shrink-0" aria-hidden="true" />
          {item.source} · {item.date}
        </p>
        <h3
          className="line-clamp-2 text-[11px] font-bold leading-snug sm:text-xs"
          style={{ color: "var(--blue-primary)" }}
          title={item.title}
        >
          {item.title}
        </h3>
        <p className="line-clamp-2 text-[10px] leading-snug text-gray-600">
          {item.description}
        </p>
      </div>
    </>
  );
}

const newsCardClassName =
  "group flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white text-left shadow-sm transition hover:border-blue-500 hover:shadow-md";

export function NewsAndBook() {
  const [articleOpen, setArticleOpen] = useState(false);

  return (
    <div className="mt-8 sm:mt-10">
      <div className="mb-4">
        <h2
          className="text-xl font-black sm:text-2xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
        >
          Padre Kelmon na imprensa
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Matérias recentes e o livro Fé e Política de Mãos Dadas.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-5">
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
          {HOME_NEWS.map((item) => {
            if (item.opensModal) {
              return (
                <button
                  key={item.url}
                  type="button"
                  onClick={() => setArticleOpen(true)}
                  className={newsCardClassName}
                >
                  <NewsCardMedia item={item} />
                </button>
              );
            }

            const isExternal = item.url.startsWith("http");
            return (
              <a
                key={item.url}
                href={item.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={newsCardClassName}
              >
                <NewsCardMedia item={item} />
              </a>
            );
          })}
        </div>

        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-full max-w-[500px] flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-lg transition hover:border-blue-500 hover:shadow-xl md:mx-0 md:w-[500px]"
        >
          <div className="relative min-h-[12rem] w-full flex-1 overflow-hidden bg-[#142016]">
            <img
              src={livroImg}
              alt="Livro Fé e Política de Mãos Dadas, de Padre Kelmon"
              width={500}
              height={500}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 sm:px-5">
            <span
              className="text-sm font-black"
              style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
            >
              Padre Kelmon
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Livro · Fé e Política de Mãos Dadas
            </span>
          </div>
        </a>
      </div>

      <SeteSetembroArticleModal open={articleOpen} onOpenChange={setArticleOpen} />
    </div>
  );
}
