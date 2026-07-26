import { defineTool } from "@lovable.dev/mcp-js";
import { STORE } from "../data";

export default defineTool({
  name: "store_info",
  title: "Informações da loja",
  description: "Endereço, horário de funcionamento e canais de contato públicos da Visão Prime Ótica.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: [
          STORE.name,
          `Endereço: ${STORE.address}`,
          `Horário: ${STORE.hours}`,
          `Telefone: ${STORE.phone}`,
          `WhatsApp: ${STORE.whatsapp}`,
          `E-mail: ${STORE.email}`,
          `Instagram: ${STORE.instagram}`,
        ].join("\n"),
      },
    ],
    structuredContent: { store: STORE },
  }),
});
