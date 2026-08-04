/* ===== Visão Prime Ótica — JavaScript compartilhado ===== */
const $ = (s) => document.querySelector(s);
const money = (n) => n.toLocaleString("pt-BR");
const PAGE = (location.pathname.split("/").pop() || "index.html");
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- cabeçalho e rodapé ---------- */
const navHtml = (cls) => NAV.map(([h, t]) =>
  `<a href="${h}" class="${cls}${h === PAGE ? " active" : ""}">${t}</a>`).join("");

const headerEl = document.createElement("header");
headerEl.id = "header";
headerEl.innerHTML = `
  <div class="container nav-bar">
    <a href="index.html" class="logo"><span class="logo-mark">◎</span><span class="logo-text">Visão <em>Prime</em></span></a>
    <nav class="nav-links">${navHtml("")}</nav>
    <div class="nav-actions">
      <button id="themeBtn" class="icon-btn" aria-label="Alternar tema">☾</button>
      <a class="btn btn-ghost" href="https://wa.me/5511999998888" target="_blank" rel="noreferrer">WhatsApp</a>
      <a class="btn btn-primary" href="contato.html#agendamento">Agendar Exame</a>
    </div>
    <button id="menuBtn" class="icon-btn menu-btn" aria-label="Menu">☰</button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    ${navHtml("")}
    <a class="btn btn-primary" href="contato.html#agendamento">Agendar Exame</a>
  </div>`;
document.body.prepend(headerEl);

const footerEl = document.createElement("footer");
footerEl.innerHTML = `
  <div class="container footer-grid">
    <div>
      <a href="index.html" class="logo"><span class="logo-mark">◎</span><span class="logo-text">Visão <em>Prime</em></span></a>
      <p class="muted">Ótica premium com 15 anos de mercado. Cuidamos da sua visão com produtos originais e atendimento humano.</p>
      <div class="socials">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Facebook">FB</a>
        <a href="https://wa.me/5511999998888" aria-label="WhatsApp">WA</a>
      </div>
    </div>
    <div><p class="ft">Páginas</p><ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
    <div><p class="ft">Horários</p><ul><li>Seg a Sex · 9h – 19h</li><li>Sábado · 9h – 14h</li><li>Domingo · fechado</li></ul></div>
    <div>
      <p class="ft">Newsletter</p>
      <p class="muted">Receba novidades e promoções exclusivas.</p>
      <form class="news" id="newsForm"><input type="email" required placeholder="seu@email.com" /><button type="submit">OK</button></form>
    </div>
  </div>
  <div class="container copyright">
    <p>© <span id="year"></span> Visão Prime Ótica. Todos os direitos reservados.</p>
    <p>CNPJ 12.345.678/0001-90</p>
  </div>`;
document.body.appendChild(footerEl);

document.body.insertAdjacentHTML("beforeend",
  `<a class="fab wa" href="https://wa.me/5511999998888" target="_blank" rel="noreferrer" aria-label="WhatsApp">✆</a>
   <button class="fab top" id="topBtn" aria-label="Voltar ao topo">↑</button>`);

/* ---------- animações ao rolar ---------- */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealIO.observe(el));
}

/* ---------- blocos opcionais por página ---------- */
const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

set("#benefits", BENEFITS.map(([i, t, b]) =>
  `<div class="reveal"><div class="ico">${i}</div><h3>${t}</h3><p>${b}</p></div>`).join(""));

set("#services", SERVICES.map(([i, t, b]) =>
  `<div class="card hover reveal"><div class="ico">${i}</div><h3>${t}</h3><p>${b}</p>
   <a href="contato.html" class="link-strong" style="margin-top:16px;display:inline-block;font-size:.85rem">Saiba mais ›</a></div>`).join(""));

set("#brands", BRANDS.map((b) => `<span class="reveal">${b}</span>`).join(""));

set("#steps", STEPS.map(([n, t, b]) =>
  `<div class="card step reveal"><strong>${n}</strong><h3>${t}</h3><p>${b}</p></div>`).join(""));

set("#differentials", DIFFERENTIALS.map(([i, t]) =>
  `<div class="diff reveal"><span class="ico">${i}</span>${t}</div>`).join(""));

set("#posts", POSTS.map(([t, e, img, tag]) =>
  `<article class="post reveal"><div class="cover"><img src="${img}" alt="${t}" loading="lazy" /></div>
   <div class="body"><span class="eyebrow">${tag}</span><h3>${t}</h3><p class="muted" style="font-size:.9rem;margin-top:10px">${e}</p>
   <a href="#" class="link-strong" style="display:inline-block;margin-top:14px;font-size:.85rem">Ler mais ›</a></div></article>`).join(""));

set("#contacts", CONTACTS.map(([i, l, v, h]) =>
  `<a class="contact-card reveal" href="${h}"><span class="ico">${i}</span><small>${l}</small><strong>${v}</strong></a>`).join(""));

/* produtos + filtro + favoritos */
if ($("#products")) {
  const favs = new Set();
  let cat = "Todos";
  set("#filters", CATEGORIES.map((c) =>
    `<button class="chip${c === cat ? " active" : ""}" data-cat="${c}">${c}</button>`).join(""));

  const renderProducts = () => {
    const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat.includes(cat));
    set("#products", list.map((p) =>
      `<article class="product reveal">
         <div class="thumb"><img src="${p.image}" alt="${p.name}" loading="lazy" />
           <button class="fav${favs.has(p.id) ? " on" : ""}" data-fav="${p.id}" aria-label="Favoritar">${favs.has(p.id) ? "♥" : "♡"}</button>
         </div>
         <div class="body"><p class="brand">${p.brand}</p><h3>${p.name}</h3>
           <div class="row"><span class="price">R$ ${money(p.price)}</span><a href="contato.html">Ver detalhes</a></div>
         </div>
       </article>`).join(""));
    observeReveals();
  };
  renderProducts();

  $("#filters")?.addEventListener("click", (e) => {
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
}

/* depoimentos */
if ($("#slider")) {
  set("#slider", TESTIMONIALS.map(([n, r, t], i) =>
    `<div class="slide${i === 0 ? " active" : ""}"><div class="stars">★★★★★</div>
     <blockquote>"${t}"</blockquote><p class="who">${n}</p><p class="role">${r}</p></div>`).join(""));
  set("#dots", TESTIMONIALS.map((_, i) =>
    `<button class="${i === 0 ? "active" : ""}" data-i="${i}" aria-label="Depoimento ${i + 1}"></button>`).join(""));

  let slide = 0;
  const goTo = (i) => {
    slide = i;
    document.querySelectorAll(".slide").forEach((s, k) => s.classList.toggle("active", k === i));
    document.querySelectorAll("#dots button").forEach((d, k) => d.classList.toggle("active", k === i));
  };
  const autoplay = () => REDUCED ? null : setInterval(() => goTo((slide + 1) % TESTIMONIALS.length), 6000);
  let timer = autoplay();
  $("#dots").addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (!b) return;
    clearInterval(timer);
    goTo(Number(b.dataset.i));
    timer = autoplay();
  });
}

/* números animados */
if ($("#stats")) {
  set("#stats", STATS.map(([v, s, l], i) =>
    `<div class="stat"><b><span data-count="${v}" data-i="${i}">0</span><i>${s}</i></b><small>${l}</small></div>`).join(""));

  const countUp = (el) => {
    const target = Number(el.dataset.count), dur = 1400, start = performance.now();
    if (REDUCED) { el.textContent = target.toLocaleString("pt-BR"); return; }
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statsIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { document.querySelectorAll("[data-count]").forEach(countUp); statsIO.disconnect(); }
    });
  }, { threshold: 0.3 });
  statsIO.observe($("#stats"));
}

/* FAQ */
if ($("#faqList")) {
  set("#faqList", FAQ.map(([q, a], i) =>
    `<div class="faq-item${i === 0 ? " open" : ""}"><button class="faq-q">${q}<span>+</span></button>
     <div class="faq-a"><p>${a}</p></div></div>`).join(""));
  $("#faqList").addEventListener("click", (e) => {
    const b = e.target.closest(".faq-q");
    if (!b) return;
    const item = b.parentElement, wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((f) => f.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
}

/* antes e depois */
const range = $("#baRange");
if (range) {
  range.addEventListener("input", () => {
    const v = range.value;
    $("#baClip").style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    $("#baLine").style.left = v + "%";
  });
}

/* header, menu, tema */
const onScroll = () => {
  headerEl.classList.toggle("scrolled", window.scrollY > 20);
  $("#topBtn").classList.toggle("show", window.scrollY > 400);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

$("#menuBtn").addEventListener("click", () => $("#mobileMenu").classList.toggle("open"));
$("#mobileMenu").addEventListener("click", (e) => {
  if (e.target.tagName === "A") $("#mobileMenu").classList.remove("open");
});
$("#topBtn").addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }));

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
$("#bookingForm")?.addEventListener("submit", (e) => {
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

$("#year").textContent = new Date().getFullYear();
observeReveals();

/* ---------- camada de movimento delicado ---------- */
(() => {
  if (REDUCED) return;

  /* barra de progresso de leitura */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* título principal animado palavra a palavra */
  const title = document.querySelector(".hero h1.display, .page-hero h1.display");
  if (title && !title.dataset.split) {
    title.dataset.split = "1";
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3 && n.textContent.trim()) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w.trim()) return frag.appendChild(document.createTextNode(w));
            const s = document.createElement("span");
            s.className = "word";
            s.textContent = w;
            frag.appendChild(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(title);
    title.querySelectorAll(".word").forEach((w, i) => w.style.setProperty("--i", i));
  }

  /* efeito de mouse parallax no hero e botões */
  if (!REDUCED) {
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      const buttons = document.querySelectorAll(".btn[data-sheen]");
      buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / 100;
        const dy = (e.clientY - cy) / 100;
        btn.style.setProperty("--light-x", `${cx + dx}px`);
        btn.style.setProperty("--light-y", `${cy + dy}px`);
      });
    }, { passive: true });
  }

  /* parallax sutil na imagem do hero */
  const media = document.querySelector(".hero-media img");
  if (media && !REDUCED) {
    media.setAttribute("data-parallax", "");
    let raf = 0;
    addEventListener("scroll", () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = Math.min(scrollY, 500);
        media.style.transform = `translate3d(0,${y * 0.06}px,0) scale(1.02)`;
      });
    }, { passive: true });
  }

  /* efeito de scroll suave em cards filtrando */
  const produtosGrade = document.querySelector(".products-grid");
  if (produtosGrade && !REDUCED) {
    let tmo;
    const obs = new IntersectionObserver((ents) => {
      ents.forEach(e => {
        if (e.isIntersecting && !e.target.hasAttribute("data-vis")) {
          e.target.setAttribute("data-vis", "");
          const idx = Array.from(e.target.parentChildren).indexOf(e.target);
          e.target.style.animation = `vp-fade-in .5s ease ${idx * 0.08}s both`;
        }
      });
    }, { threshold: 0.1 });
    produtosGrade.querySelectorAll(".product").forEach(p => obs.observe(p));
  }

  /* transição suave ao navegar entre páginas */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("wa.me")) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => (location.href = href), 260);
  });
})()

observeReveals();
