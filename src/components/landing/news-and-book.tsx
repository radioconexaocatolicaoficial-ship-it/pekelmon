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
    description:
      "Candidato a deputado federal reforça mobilização marcada para as 15h deste Dia da Independência. O ato ocorre em plena reta final da campanha presidencial e terá Flávio Bolsonaro entre seus protagonistas. O chamado acontece em um dos momentos mais intensos da campanha eleitoral de 2026.",
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
      "Após a disputa presidencial e o destaque nos debates de 2022, o religioso é candidato a deputado federal por São Paulo pelo PL. A matéria acompanha a tentativa de chegar à Câmara dos Deputados.",
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
      "A matéria inclui Padre Kelmon na memória eleitoral de 2022, com os debates e os 81 mil votos, entre candidatos que marcaram eleições no Brasil. O texto relembra o destaque do religioso naquela disputa.",
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
      "Padre Kelmon reúne lideranças cristãs em apoio a Flávio Bolsonaro, reforça a pré-campanha e celebra 11 anos de sacerdócio. O encontro marca mais um ano de ministério e a mobilização em torno da pré-campanha.",
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
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-neutral-200">
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
      <div className="imprensa-news-copy">
        <p className="imprensa-news-meta">
          <Newspaper className="mr-1 inline size-3 align-[-2px]" aria-hidden="true" />
          {item.source} · {item.date}
        </p>
        <h3
          className="imprensa-news-title"
          style={{ color: "var(--blue-primary)" }}
          title={item.title}
        >
          {item.title}
        </h3>
        <p className="imprensa-news-desc">{item.description}</p>
      </div>
    </>
  );
}

const newsCardClassName =
  "imprensa-news-card group transition hover:border-blue-500 hover:shadow-md";

export function NewsAndBook() {
  const [articleOpen, setArticleOpen] = useState(false);

  return (
    <div className="imprensa-block">
      <div className="mb-4 shrink-0">
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

      <div className="imprensa-row">
        <div className="imprensa-news-grid">
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
          className="mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-lg transition hover:border-blue-500 hover:shadow-xl md:mx-0 md:max-w-lg"
        >
          <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden bg-white">
            <img
              src={livroImg}
              alt="Livro Fé e Política de Mãos Dadas, de Padre Kelmon"
              width={500}
              height={500}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
              style={{ objectFit: "contain" }}
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
