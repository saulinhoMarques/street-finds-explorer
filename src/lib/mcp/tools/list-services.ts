import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES, BRANDS } from "../data";

export default defineTool({
  name: "list_services",
  title: "Listar serviços",
  description: "Lista os serviços ópticos oferecidos pela Visão Prime Ótica e as marcas trabalhadas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text:
          SERVICES.map((s) => `${s.name}: ${s.description}`).join("\n") +
          `\n\nMarcas: ${BRANDS.join(", ")}`,
      },
    ],
    structuredContent: { services: SERVICES, brands: BRANDS },
  }),
});
