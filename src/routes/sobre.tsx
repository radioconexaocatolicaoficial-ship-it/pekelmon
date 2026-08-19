import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/landing/about";
import { InnerPage } from "@/components/landing/inner-page";
import { PAGE_SEO, buildPageHead } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => buildPageHead(PAGE_SEO.sobre),
});

function SobrePage() {
  return (
    <InnerPage>
      <About headingAs="h1" standalone />
    </InnerPage>
  );
}
