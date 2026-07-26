/* ===== Visão Prime Ótica — JavaScript puro ===== */

/* ---------- dados ---------- */
const BENEFITS = [
  ["◎", "Armações Originais", "Marcas premium com nota fiscal e garantia de autenticidade."],
  ["👁", "Exame de Vista", "Avaliação completa com oftalmologistas parceiros credenciados."],
  ["✓", "Garantia nas Lentes", "12 meses de garantia contra defeitos de fabricação."],
  ["🚚", "Entrega Rápida", "Seus óculos prontos em até 5 dias úteis, retirada ou delivery."],
];

const SERVICES = [
  ["👁", "Exame de Vista", "Avaliação completa da sua acuidade visual em ambiente equipado."],
  ["◎", "Lentes de Grau", "Antirreflexo, transitions, alta definição e proteção UV."],
  ["✧", "Lentes Multifocais", "Enxergue perto, longe e intermediário com uma única lente."],
  ["🖥", "Lentes para Computador", "Filtro azul para conforto em longas horas de tela."],
  ["♡", "Lentes de Contato", "Diárias, mensais e coloridas com adaptação profissional."],
  ["☀", "Óculos de Sol", "Modelos originais com proteção UV400 comprovada."],
  ["🔧", "Ajuste de Armações", "Regulagem gratuita e reparos rápidos no balcão."],
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
  ["🛡", "Garantia estendida"], ["◎", "Produtos originais"],
  ["🔧", "Ajustes gratuitos"], ["🚚", "Entrega rápida"],
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

const $ = (s) => document.querySelector(s);
const money = (n) => n.toLocaleString("pt-BR");

/* ---------- render ---------- */
$("#benefits").innerHTML = BENEFITS.map(([i, t, b]) =>
  `<div class="reveal"><div class="ico">${i}</div><h3>${t}</h3><p>${b}</p></div>`).join("");

$("#services").innerHTML = SERVICES.map(([i, t, b]) =>
  `<div class="card hover reveal"><div class="ico">${i}</div><h3>${t}</h3><p>${b}</p>
   <a href="#contato" class="link-strong" style="margin-top:16px;display:inline-block;font-size:.85rem">Saiba mais ›</a></div>`).join("");

$("#brands").innerHTML = BRANDS.map((b) => `<span class="reveal">${b}</span>`).join("");

$("#steps").innerHTML = STEPS.map(([n, t, b]) =>
  `<div class="card step reveal"><strong>${n}</strong><h3>${t}</h3><p>${b}</p></div>`).join("");

$("#differentials").innerHTML = DIFFERENTIALS.map(([i, t]) =>
  `<div class="diff reveal"><span class="ico">${i}</span>${t}</div>`).join("");

$("#posts").innerHTML = POSTS.map(([t, e, img, tag]) =>
  `<article class="post reveal"><div class="cover"><img src="${img}" alt="${t}" loading="lazy" /></div>
   <div class="body"><span class="eyebrow">${tag}</span><h3>${t}</h3><p class="muted" style="font-size:.9rem;margin-top:10px">${e}</p>
   <a href="#" class="link-strong" style="display:inline-block;margin-top:14px;font-size:.85rem">Ler mais ›</a></div></article>`).join("");

$("#contacts").innerHTML = CONTACTS.map(([i, l, v, h]) =>
  `<a class="contact-card reveal" href="${h}"><span class="ico">${i}</span><small>${l}</small><strong>${v}</strong></a>`).join("");

/* produtos + filtro + favoritos */
const favs = new Set();
let cat = "Todos";
$("#filters").innerHTML = CATEGORIES.map((c) =>
  `<button class="chip${c === cat ? " active" : ""}" data-cat="${c}">${c}</button>`).join("");

function renderProducts() {
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat.includes(cat));
  $("#products").innerHTML = list.map((p) =>
    `<article class="product reveal">
       <div class="thumb"><img src="${p.image}" alt="${p.name}" loading="lazy" />
         <button class="fav${favs.has(p.id) ? " on" : ""}" data-fav="${p.id}" aria-label="Favoritar">${favs.has(p.id) ? "♥" : "♡"}</button>
       </div>
       <div class="body"><p class="brand">${p.brand}</p><h3>${p.name}</h3>
         <div class="row"><span class="price">R$ ${money(p.price)}</span><a href="#contato">Ver detalhes</a></div>
       </div>
     </article>`).join("");
  observeReveals();
}
renderProducts();

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  cat = btn.dataset.cat;
  document.querySelectorAll("#filters .chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === cat));
  renderProducts();
});

$("#products").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-fav]");
  if (!btn) return;
  const id = Number(btn.dataset.fav);
  favs.has(id) ? favs.delete(id) : favs.add(id);
  btn.classList.toggle("on", favs.has(id));
  btn.textContent = favs.has(id) ? "♥" : "♡";
});

/* depoimentos */
$("#slider").innerHTML = TESTIMONIALS.map(([n, r, t], i) =>
  `<div class="slide${i === 0 ? " active" : ""}"><div class="stars">★★★★★</div>
   <blockquote>"${t}"</blockquote><p class="who">${n}</p><p class="role">${r}</p></div>`).join("");
$("#dots").innerHTML = TESTIMONIALS.map((_, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-i="${i}" aria-label="Depoimento ${i + 1}"></button>`).join("");

let slide = 0;
function goTo(i) {
  slide = i;
  document.querySelectorAll(".slide").forEach((s, k) => s.classList.toggle("active", k === i));
  document.querySelectorAll("#dots button").forEach((d, k) => d.classList.toggle("active", k === i));
}
let timer = setInterval(() => goTo((slide + 1) % TESTIMONIALS.length), 6000);
$("#dots").addEventListener("click", (e) => {
  const b = e.target.closest("[data-i]");
  if (!b) return;
  clearInterval(timer);
  goTo(Number(b.dataset.i));
  timer = setInterval(() => goTo((slide + 1) % TESTIMONIALS.length), 6000);
});

/* números animados */
$("#stats").innerHTML = STATS.map(([v, s, l], i) =>
  `<div class="stat"><b><span data-count="${v}" data-i="${i}">0</span><i>${s}</i></b><small>${l}</small></div>`).join("");

function countUp(el) {
  const target = Number(el.dataset.count), dur = 1400, start = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("pt-BR");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const statsIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { document.querySelectorAll("[data-count]").forEach(countUp); statsIO.disconnect(); }
  });
}, { threshold: 0.3 });
statsIO.observe($("#stats"));

/* FAQ */
$("#faqList").innerHTML = FAQ.map(([q, a], i) =>
  `<div class="faq-item${i === 0 ? " open" : ""}"><button class="faq-q">${q}<span>+</span></button>
   <div class="faq-a"><p>${a}</p></div></div>`).join("");
$("#faqList").addEventListener("click", (e) => {
  const b = e.target.closest(".faq-q");
  if (!b) return;
  const item = b.parentElement, wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach((f) => f.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
});

/* antes e depois */
const range = $("#baRange");
range.addEventListener("input", () => {
  const v = range.value;
  $("#baClip").style.clipPath = `inset(0 ${100 - v}% 0 0)`;
  $("#baLine").style.left = v + "%";
});

/* header, menu, tema */
const header = $("#header");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  $("#topBtn").classList.toggle("show", window.scrollY > 400);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

$("#menuBtn").addEventListener("click", () => $("#mobileMenu").classList.toggle("open"));
$("#mobileMenu").addEventListener("click", (e) => {
  if (e.target.tagName === "A") $("#mobileMenu").classList.remove("open");
});
$("#topBtn").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const themeBtn = $("#themeBtn");
function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "☀" : "☾";
  localStorage.setItem("vp-theme", dark ? "dark" : "light");
}
const saved = localStorage.getItem("vp-theme");
applyTheme(saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
themeBtn.addEventListener("click", () => applyTheme(!document.documentElement.classList.contains("dark")));

/* formulários */
$("#bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = $("#submitBtn");
  btn.textContent = "Agendamento enviado ✓";
  e.target.reset();
  setTimeout(() => (btn.textContent = "Agendar"), 4000);
});
$("#newsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.querySelector("button").textContent = "✓";
  e.target.reset();
});

/* animações ao rolar */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealIO.observe(el));
}
observeReveals();

$("#year").textContent = new Date().getFullYear();