import { createFileRoute } from "@tanstack/react-router";

import { Downloads } from "@/components/landing/downloads";
import { InnerPage } from "@/components/landing/inner-page";
import { PAGE_SEO, buildPageHead } from "@/lib/site";

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
  head: () => buildPageHead(PAGE_SEO.downloads),
});

function DownloadsPage() {
  return (
    <InnerPage>
      <Downloads headingAs="h1" />
    </InnerPage>
  );
}
