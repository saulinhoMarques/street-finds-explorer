/** Dados públicos da Visão Prime Ótica (espelham public/data.js). */
export const STORE = {
  name: "Visão Prime Ótica",
  address: "Rua das Óticas, 1234 · Jardins · São Paulo/SP",
  hours: "Seg a Sex 9h–19h · Sáb 9h–14h",
  phone: "(11) 4002-8922",
  whatsapp: "(11) 99999-8888",
  email: "contato@visaoprime.com.br",
  instagram: "@visaoprime",
};

export const CATEGORIES = ["Masculino", "Feminino", "Infantil", "Esportivo", "Premium"] as const;

export type Product = { id: number; name: string; brand: string; price: number; categories: string[] };

export const PRODUCTS: Product[] = [
  { id: 1, name: "Milano Tortoise", brand: "Prime Studio", price: 890, categories: ["Feminino", "Premium"] },
  { id: 2, name: "Aureo Round Gold", brand: "Prime Studio", price: 1290, categories: ["Feminino", "Premium"] },
  { id: 3, name: "Aviator Verde", brand: "Ray-Ban", price: 1590, categories: ["Masculino"] },
  { id: 4, name: "Sport Matte Black", brand: "Oakley", price: 1890, categories: ["Masculino", "Esportivo"] },
  { id: 5, name: "Kids Play Blue", brand: "Vogue Jr.", price: 490, categories: ["Infantil"] },
  { id: 6, name: "Cat-Eye Bordeaux", brand: "Prada", price: 2190, categories: ["Feminino", "Premium"] },
  { id: 7, name: "Classic Wayfarer", brand: "Ray-Ban", price: 990, categories: ["Masculino"] },
  { id: 8, name: "Round Rose", brand: "Vogue", price: 690, categories: ["Feminino"] },
  { id: 9, name: "Trail Runner", brand: "Oakley", price: 1690, categories: ["Esportivo"] },
  { id: 10, name: "Little Star", brand: "Arnette Kids", price: 420, categories: ["Infantil"] },
  { id: 11, name: "Executive Titan", brand: "Emporio Armani", price: 2390, categories: ["Masculino", "Premium"] },
  { id: 12, name: "Riviera Sun", brand: "Persol", price: 2090, categories: ["Feminino", "Premium"] },
];

export const BRANDS = ["Ray-Ban", "Oakley", "Prada", "Vogue", "Carrera", "Arnette", "Persol", "Emporio Armani"];

export const SERVICES = [
  { name: "Exame de Vista", description: "Avaliação completa da sua acuidade visual em ambiente equipado." },
  { name: "Lentes de Grau", description: "Antirreflexo, transitions, alta definição e proteção UV." },
  { name: "Lentes Multifocais", description: "Enxergue perto, longe e intermediário com uma única lente." },
  { name: "Lentes para Computador", description: "Filtro azul para conforto em longas horas de tela." },
  { name: "Lentes de Contato", description: "Diárias, mensais e coloridas com adaptação profissional." },
  { name: "Óculos de Sol", description: "Modelos originais com proteção UV400 comprovada." },
  { name: "Ajuste de Armações", description: "Regulagem gratuita e reparos rápidos no balcão." },
  { name: "Troca de Lentes", description: "Aproveitamos sua armação favorita com lentes novas." },
];

export const FAQ = [
  { question: "Quanto custa o exame de vista?", answer: "O exame é gratuito para clientes que adquirem óculos conosco. Avulso, custa R$ 80." },
  { question: "Vocês aceitam convênio?", answer: "Sim! Trabalhamos com os principais convênios ópticos do país. Consulte-nos." },
  { question: "Quanto tempo demora para ficar pronto?", answer: "Em média, 3 a 5 dias úteis, dependendo do tipo de lente escolhida." },
  { question: "Tem garantia?", answer: "Sim. 12 meses de garantia contra defeitos de fabricação, nas armações e nas lentes." },
  { question: "Posso parcelar?", answer: "Sim, em até 12x sem juros no cartão de crédito ou boleto." },
  { question: "Vocês fazem manutenção?", answer: "Sim! Ajustes, aperto de parafusos e troca de plaquetas são gratuitos por toda a vida do produto." },
  { question: "Trocam lentes de armações antigas?", answer: "Trocamos! Trazemos sua armação favorita de volta à vida com lentes novas." },
];
