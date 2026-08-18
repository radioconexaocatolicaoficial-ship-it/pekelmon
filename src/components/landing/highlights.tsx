import { PageShell } from "./primitives";
import { VideoHighlights } from "./video-highlights";
import { NewsAndBook } from "./news-and-book";

export function Highlights() {
  return (
    <section
      id="destaques"
      aria-labelledby="destaques-heading"
      className="relative mt-6 pb-12 sm:mt-8 sm:pb-16 md:mt-[calc(0.5rem-1%)] lg:mt-8"
    >
      <PageShell>
        <h2 id="destaques-heading" className="sr-only">
          Destaques da campanha
        </h2>
        <VideoHighlights />
        <NewsAndBook />
      </PageShell>
    </section>
  );
}
