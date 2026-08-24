import { createFileRoute } from "@tanstack/react-router";

import { LinkInBio } from "@/components/bio/link-in-bio";
import { PAGE_SEO, buildPageHead } from "@/lib/site";

export const Route = createFileRoute("/bio")({
  component: BioPage,
  head: () => buildPageHead(PAGE_SEO.bio),
});

function BioPage() {
  return <LinkInBio />;
}
