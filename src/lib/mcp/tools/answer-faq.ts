import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { FAQ } from "../data";

export default defineTool({
  name: "answer_faq",
  title: "Perguntas frequentes",
  description:
    "Retorna as perguntas frequentes da Visão Prime Ótica (garantia, prazos, convênios, parcelamento). Filtra por termo se informado.",
  inputSchema: { question: z.string().optional().describe("Termo ou pergunta para filtrar o FAQ.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ question }) => {
    const q = question?.trim().toLowerCase();
    const items = q
      ? FAQ.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q))
      : FAQ;
    const list = items.length ? items : FAQ;
    return {
      content: [{ type: "text" as const, text: list.map((f) => `P: ${f.question}\nR: ${f.answer}`).join("\n\n") }],
      structuredContent: { items: list },
    };
  },
});
