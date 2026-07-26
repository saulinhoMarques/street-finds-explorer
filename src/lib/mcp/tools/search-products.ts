import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PRODUCTS } from "../data";

export default defineTool({
  name: "search_products",
  title: "Buscar armações",
  description:
    "Busca armações e óculos do catálogo da Visão Prime Ótica por texto, categoria, marca e faixa de preço.",
  inputSchema: {
    query: z.string().optional().describe("Texto livre (nome ou marca)."),
    category: z
      .enum(["Masculino", "Feminino", "Infantil", "Esportivo", "Premium"])
      .optional()
      .describe("Categoria do produto."),
    brand: z.string().optional().describe("Marca, ex.: Ray-Ban."),
    maxPrice: z.number().positive().optional().describe("Preço máximo em reais."),
    limit: z.number().int().min(1).max(50).optional().describe("Máximo de resultados (padrão 12)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, category, brand, maxPrice, limit }) => {
    const q = query?.trim().toLowerCase();
    const results = PRODUCTS.filter((p) => {
      if (q && !`${p.name} ${p.brand}`.toLowerCase().includes(q)) return false;
      if (category && !p.categories.includes(category)) return false;
      if (brand && p.brand.toLowerCase() !== brand.trim().toLowerCase()) return false;
      if (maxPrice && p.price > maxPrice) return false;
      return true;
    }).slice(0, limit ?? 12);

    return {
      content: [
        {
          type: "text" as const,
          text: results.length
            ? results
                .map((p) => `${p.name} — ${p.brand} — R$ ${p.price} (${p.categories.join(", ")})`)
                .join("\n")
            : "Nenhuma armação encontrada com esses filtros.",
        },
      ],
      structuredContent: { count: results.length, products: results },
    };
  },
});
