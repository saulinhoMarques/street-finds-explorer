/* ===== Visão Prime Ótica — dados compartilhados ===== */
const BENEFITS = [
  ["◎", "Armações Originais", "Marcas premium com nota fiscal e garantia de autenticidade."],
  ["◉", "Exame de Vista", "Avaliação completa com oftalmologistas parceiros credenciados."],
  ["✓", "Garantia nas Lentes", "12 meses de garantia contra defeitos de fabricação."],
  ["➤", "Entrega Rápida", "Seus óculos prontos em até 5 dias úteis, retirada ou delivery."],
];

const SERVICES = [
  ["◉", "Exame de Vista", "Avaliação completa da sua acuidade visual em ambiente equipado."],
  ["◎", "Lentes de Grau", "Antirreflexo, transitions, alta definição e proteção UV."],
  ["✧", "Lentes Multifocais", "Enxergue perto, longe e intermediário com uma única lente."],
  ["🖥", "Lentes para Computador", "Filtro azul para conforto em longas horas de tela."],
  ["♡", "Lentes de Contato", "Diárias, mensais e coloridas com adaptação profissional."],
  ["☀", "Óculos de Sol", "Modelos originais com proteção UV400 comprovada."],
  ["✧", "Ajuste de Armações", "Regulagem gratuita e reparos rápidos no balcão."],
  ["🎨", "Troca de Lentes", "Aproveitamos sua armação favorita com lentes novas."],
];

const CATEGORIES = ["Todos", "Masculino", "Feminino", "Infantil", "Esportivo", "Premium"];

const PRODUCTS = [
  { id: 1, name: "Milano Tortoise", brand: "Prime Studio", price: 890, image: "img/p1.jpg", cat: ["Feminino", "Premium"] },
  { id: 2, name: "Aureo Round Gold", brand: "Prime Studio", price: 1290, image: "img/p2.jpg", cat: ["Feminino", "Premium"] },
  { id: 3, name: "Aviator Verde", brand: "Ray-Ban", price: 1590, image: "img/p3.jpg", cat: ["Masculino"] },
  { id: 4, name: "Sport Matte Black", brand: "Oakley", price: 1890, image: "img/p4.jpg", cat: ["Masculino", "Esportivo"] },
  { id: 5, name: "Kids Play Blue", brand: "Vogue Jr.", price: 490, image: "img/p5.jpg", cat: ["Infantil"] },
  { id: 6, name: "Cat-Eye Bordeaux", brand: "Prada", price: 2190, image: "img/p6.jpg", cat: ["Feminino", "Premium"] },
  { id: 7, name: "Classic Wayfarer", brand: "Ray-Ban", price: 990, image: "img/p1.jpg", cat: ["Masculino"] },
  { id: 8, name: "Round Rose", brand: "Vogue", price: 690, image: "img/p2.jpg", cat: ["Feminino"] },
  { id: 9, name: "Trail Runner", brand: "Oakley", price: 1690, image: "img/p4.jpg", cat: ["Esportivo"] },
  { id: 10, name: "Little Star", brand: "Arnette Kids", price: 420, image: "img/p5.jpg", cat: ["Infantil"] },
  { id: 11, name: "Executive Titan", brand: "Emporio Armani", price: 2390, image: "img/p1.jpg", cat: ["Masculino", "Premium"] },
  { id: 12, name: "Riviera Sun", brand: "Persol", price: 2090, image: "img/p3.jpg", cat: ["Feminino", "Premium"] },
];

const BRANDS = ["Ray-Ban", "Oakley", "Prada", "Vogue", "Carrera", "Arnette", "Persol", "Emporio Armani"];

const STEPS = [
  ["01", "Agende seu exame", "Escolha o melhor horário pelo WhatsApp ou pelo site."],
  ["02", "Faça sua avaliação", "Exame completo com nossos especialistas parceiros."],
  ["03", "Escolha sua armação", "Consultoria de estilo entre 2.500+ modelos."],
  ["04", "Receba seus óculos", "Em até 5 dias úteis, com ajuste gratuito."],
];

const DIFFERENTIALS = [
  ["✧", "Tecnologia nas lentes"], ["🏅", "Especialistas certificados"],
  ["💳", "Parcelamento facilitado"], ["👥", "Atendimento humanizado"],
  ["✦", "Garantia estendida"], ["◎", "Produtos originais"],
  ["✧", "Ajustes gratuitos"], ["➤", "Entrega rápida"],
];

const TESTIMONIALS = [
  ["Mariana Alves", "Cliente desde 2021", "Excelente atendimento! Encontrei uma armação linda e minhas lentes ficaram prontas antes do prazo."],
  ["Ricardo Menezes", "Cliente desde 2019", "Melhor ótica que já conheci. Atendimento personalizado e produtos de altíssima qualidade."],
  ["Fernanda Lima", "Cliente desde 2023", "Adorei a consultoria de estilo. Saí de lá com o óculos perfeito para o meu rosto."],
  ["Paulo Henrique", "Cliente desde 2020", "Preço justo, parcelamento tranquilo e lentes multifocais impecáveis. Recomendo demais!"],
];

const STATS = [
  [15, "+", "Anos de mercado"], [8000, "+", "Clientes atendidos"],
  [2500, "+", "Óculos vendidos"], [98, "%", "Satisfação"],
];

const FAQ = [
  ["Quanto custa o exame de vista?", "O exame é gratuito para clientes que adquirem óculos conosco. Avulso, custa R$ 80."],
  ["Vocês aceitam convênio?", "Sim! Trabalhamos com os principais convênios ópticos do país. Consulte-nos."],
  ["Quanto tempo demora para ficar pronto?", "Em média, 3 a 5 dias úteis, dependendo do tipo de lente escolhida."],
  ["Tem garantia?", "Sim. 12 meses de garantia contra defeitos de fabricação, tanto nas armações quanto nas lentes."],
  ["Posso parcelar?", "Sim, em até 12x sem juros no cartão de crédito ou boleto."],
  ["Vocês fazem manutenção?", "Sim! Ajustes, aperto de parafusos e troca de plaquetas são gratuitos por toda a vida do produto."],
  ["Trocam lentes de armações antigas?", "Trocamos! Trazemos sua armação favorita de volta à vida com lentes novas."],
];

const POSTS = [
  ["Como escolher a armação ideal para o seu rosto", "Redondo, oval, quadrado — cada formato pede uma armação. Descubra a sua.", "img/b1.jpg", "Estilo"],
  ["Lentes com filtro azul funcionam mesmo?", "Entenda a ciência por trás do filtro de luz azul e quando ele faz diferença.", "img/b2.jpg", "Saúde"],
  ["5 cuidados essenciais com seus óculos", "Pequenos hábitos que aumentam a vida útil do seu investimento em visão.", "img/b3.jpg", "Dicas"],
];

const CONTACTS = [
  ["✆", "Telefone", "(11) 4002-8922", "tel:+551140028922"],
  ["💬", "WhatsApp", "(11) 99999-8888", "https://wa.me/5511999998888"],
  ["◉", "Instagram", "@visaoprime", "#"],
  ["f", "Facebook", "/visaoprime", "#"],
  ["✉", "E-mail", "contato@visaoprime.com.br", "mailto:contato@visaoprime.com.br"],
];

const NAV = [
  ["index.html", "Início"], ["sobre.html", "Sobre"], ["produtos.html", "Produtos"],
  ["servicos.html", "Serviços"], ["blog.html", "Blog"], ["contato.html", "Contato"],
];
