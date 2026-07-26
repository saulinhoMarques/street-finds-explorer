import { defineMcp } from "@lovable.dev/mcp-js";
import searchProducts from "./tools/search-products";
import listServices from "./tools/list-services";
import answerFaq from "./tools/answer-faq";
import storeInfo from "./tools/store-info";

export default defineMcp({
  name: "visao-prime-otica",
  title: "Visão Prime Ótica",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas da ótica Visão Prime: consultar o catálogo de armações, serviços oferecidos, perguntas frequentes e dados de contato/horário da loja.",
  tools: [searchProducts, listServices, answerFaq, storeInfo],
});
