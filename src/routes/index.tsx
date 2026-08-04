import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
  component: () => (
    <div>
      Execute esta instrucao no projeto: vamos fazer um site de uma loja de bombons
    </div>
  ),
});
