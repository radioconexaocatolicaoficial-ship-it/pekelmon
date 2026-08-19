import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/landing/about";
import { ChapaNews } from "@/components/landing/chapa-news";
import { InnerPage } from "@/components/landing/inner-page";
import { PAGE_SEO, buildPageHead } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => buildPageHead(PAGE_SEO.sobre),
});

function SobrePage() {
  return (
    <InnerPage afterCta={<ChapaNews />}>
      <About headingAs="h1" standalone />
    </InnerPage>
  );
}
