import { createFileRoute, redirect } from "@tanstack/react-router";

// O site é 100% HTML/CSS/JS estático e vive em /public/site.
// Esta rota apenas encaminha a raiz para a página estática.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  component: () => null,
});
