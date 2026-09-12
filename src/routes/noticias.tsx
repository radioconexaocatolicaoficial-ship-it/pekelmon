import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/noticias")({
  beforeLoad: () => {
    throw redirect({ to: "/midia" });
  },
});
