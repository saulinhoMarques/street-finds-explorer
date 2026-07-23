import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  Glasses,
  Menu,
  X,
  Moon,
  Sun,
  MessageCircle,
  Calendar,
  Phone,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  ArrowRight,
  ArrowUp,
  ShieldCheck,
  Truck,
  Sparkles,
  Eye,
  Award,
  CreditCard,
  Users,
  Wrench,
  Monitor,
  Sun as SunIcon,
  Contact,
  Palette,
  ChevronRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero.jpg";
import loja from "@/assets/loja.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const SITE_URL = "https://street-finds-explorer.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão Prime Ótica — Óculos, Lentes e Exame de Vista" },
      {
        name: "description",
        content:
          "Armações modernas, lentes de alta tecnologia e atendimento especializado. Agende seu exame de vista na Visão Prime Ótica.",
      },
      { property: "og:title", content: "Visão Prime Ótica — Óculos, Lentes e Exame de Vista" },
      {
        property: "og:description",
        content:
          "Armações modernas, lentes de alta tecnologia e atendimento especializado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Visão Prime Ótica" },
      {
        name: "twitter:description",
        content: "Enxergue o mundo com mais estilo, conforto e qualidade.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: Index,
});

/* ---------------- data ---------------- */

const NAV = [
  ["inicio", "Início"],
  ["sobre", "Sobre"],
  ["produtos", "Produtos"],
  ["servicos", "Serviços"],
  ["marcas", "Marcas"],
  ["depoimentos", "Depoimentos"],
  ["faq", "FAQ"],
  ["contato", "Contato"],
] as const;

const BENEFITS = [
  { icon: Glasses, title: "Armações Originais", body: "Marcas premium com nota fiscal e garantia de autenticidade." },
  { icon: Eye, title: "Exame de Vista", body: "Avaliação completa com oftalmologistas parceiros credenciados." },
  { icon: ShieldCheck, title: "Garantia nas Lentes", body: "12 meses de garantia contra defeitos de fabricação." },
  { icon: Truck, title: "Entrega Rápida", body: "Seus óculos prontos em até 5 dias úteis, retirada ou delivery." },
];

const SERVICES = [
  { icon: Eye, title: "Exame de Vista", body: "Avaliação completa da sua acuidade visual em ambiente equipado." },
  { icon: Glasses, title: "Lentes de Grau", body: "Antirreflexo, transitions, alta definição e proteção UV." },
  { icon: Sparkles, title: "Lentes Multifocais", body: "Enxergue perto, longe e intermediário com uma única lente." },
  { icon: Monitor, title: "Lentes para Computador", body: "Filtro azul para conforto em longas horas de tela." },
  { icon: Contact, title: "Lentes de Contato", body: "Diárias, mensais e coloridas com adaptação profissional." },
  { icon: SunIcon, title: "Óculos de Sol", body: "Modelos originais com proteção UV400 comprovada." },
  { icon: Wrench, title: "Ajuste de Armações", body: "Regulagem gratuita e reparos rápidos no balcão." },
  { icon: Palette, title: "Troca de Lentes", body: "Aproveitamos sua armação favorita com lentes novas." },
];

const CATEGORIES = ["Todos", "Masculino", "Feminino", "Infantil", "Esportivo", "Premium"] as const;

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  cat: (typeof CATEGORIES)[number][];
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Milano Tortoise", brand: "Prime Studio", price: 890, image: p1, cat: ["Feminino", "Premium"] },
  { id: 2, name: "Aureo Round Gold", brand: "Prime Studio", price: 1290, image: p2, cat: ["Feminino", "Premium"] },
  { id: 3, name: "Aviator Verde", brand: "Ray-Ban", price: 1590, image: p3, cat: ["Masculino"] },
  { id: 4, name: "Sport Matte Black", brand: "Oakley", price: 1890, image: p4, cat: ["Masculino", "Esportivo"] },
  { id: 5, name: "Kids Play Blue", brand: "Vogue Jr.", price: 490, image: p5, cat: ["Infantil"] },
  { id: 6, name: "Cat-Eye Bordeaux", brand: "Prada", price: 2190, image: p6, cat: ["Feminino", "Premium"] },
  { id: 7, name: "Classic Wayfarer", brand: "Ray-Ban", price: 990, image: p1, cat: ["Masculino"] },
  { id: 8, name: "Round Rose", brand: "Vogue", price: 690, image: p2, cat: ["Feminino"] },
  { id: 9, name: "Trail Runner", brand: "Oakley", price: 1690, image: p4, cat: ["Esportivo"] },
  { id: 10, name: "Little Star", brand: "Arnette Kids", price: 420, image: p5, cat: ["Infantil"] },
  { id: 11, name: "Executive Titan", brand: "Emporio Armani", price: 2390, image: p1, cat: ["Masculino", "Premium"] },
  { id: 12, name: "Riviera Sun", brand: "Persol", price: 2090, image: p3, cat: ["Feminino", "Premium"] },
];

const BRANDS = ["Ray-Ban", "Oakley", "Prada", "Vogue", "Carrera", "Arnette", "Persol", "Emporio Armani"];

const STEPS = [
  { n: "01", title: "Agende seu exame", body: "Escolha o melhor horário pelo WhatsApp ou pelo site." },
  { n: "02", title: "Faça sua avaliação", body: "Exame completo com nossos especialistas parceiros." },
  { n: "03", title: "Escolha sua armação", body: "Consultoria de estilo entre 2.500+ modelos." },
  { n: "04", title: "Receba seus óculos", body: "Em até 5 dias úteis, com ajuste gratuito." },
];

const DIFFERENTIALS = [
  { icon: Sparkles, title: "Tecnologia nas lentes" },
  { icon: Award, title: "Especialistas certificados" },
  { icon: CreditCard, title: "Parcelamento facilitado" },
  { icon: Users, title: "Atendimento humanizado" },
  { icon: ShieldCheck, title: "Garantia estendida" },
  { icon: Glasses, title: "Produtos originais" },
  { icon: Wrench, title: "Ajustes gratuitos" },
  { icon: Truck, title: "Entrega rápida" },
];

const TESTIMONIALS = [
  { name: "Mariana Alves", role: "Cliente desde 2021", text: "Excelente atendimento! Encontrei uma armação linda e minhas lentes ficaram prontas antes do prazo." },
  { name: "Ricardo Menezes", role: "Cliente desde 2019", text: "Melhor ótica que já conheci. Atendimento personalizado e produtos de altíssima qualidade." },
  { name: "Fernanda Lima", role: "Cliente desde 2023", text: "Adorei a consultoria de estilo. Saí de lá com o óculos perfeito para o meu rosto." },
  { name: "Paulo Henrique", role: "Cliente desde 2020", text: "Preço justo, parcelamento tranquilo e lentes multifocais impecáveis. Recomendo demais!" },
];

const STATS = [
  { value: 15, suffix: "+", label: "Anos de mercado" },
  { value: 8000, suffix: "+", label: "Clientes atendidos" },
  { value: 2500, suffix: "+", label: "Óculos vendidos" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

const FAQ = [
  { q: "Quanto custa o exame de vista?", a: "O exame é gratuito para clientes que adquirem óculos conosco. Avulso, custa R$ 80." },
  { q: "Vocês aceitam convênio?", a: "Sim! Trabalhamos com os principais convênios ópticos do país. Consulte-nos." },
  { q: "Quanto tempo demora para ficar pronto?", a: "Em média, 3 a 5 dias úteis, dependendo do tipo de lente escolhida." },
  { q: "Tem garantia?", a: "Sim. 12 meses de garantia contra defeitos de fabricação, tanto nas armações quanto nas lentes." },
  { q: "Posso parcelar?", a: "Sim, em até 12x sem juros no cartão de crédito ou boleto." },
  { q: "Vocês fazem manutenção?", a: "Sim! Ajustes, aperto de parafusos e troca de plaquetas são gratuitos por toda a vida do produto." },
  { q: "Trocam lentes de armações antigas?", a: "Trocamos! Trazemos sua armação favorita de volta à vida com lentes novas." },
];

const POSTS = [
  { title: "Como escolher a armação ideal para o seu rosto", excerpt: "Redondo, oval, quadrado — cada formato pede uma armação. Descubra a sua.", image: b1, tag: "Estilo" },
  { title: "Lentes com filtro azul funcionam mesmo?", excerpt: "Entenda a ciência por trás do filtro de luz azul e quando ele faz diferença.", image: b2, tag: "Saúde" },
  { title: "5 cuidados essenciais com seus óculos", excerpt: "Pequenos hábitos que aumentam a vida útil do seu investimento em visão.", image: b3, tag: "Dicas" },
];

/* ---------------- hooks ---------------- */

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

/* ---------------- components ---------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={"flex items-center gap-2 " + className}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
        <Glasses className="h-5 w-5" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Visão <span className="text-accent-foreground/80">Prime</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("vp-theme");
    const isDark = saved === "dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("vp-theme", next ? "dark" : "light");
  };

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all " +
        (scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleDark}
            aria-label="Alternar tema"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://wa.me/5511999998888"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground hover:border-primary/40"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Calendar className="h-4 w-4" /> Agendar Exame
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="#agendamento"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Agendar Exame
              </a>
              <button
                onClick={toggleDark}
                className="grid h-10 w-10 place-items-center rounded-full border border-border"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/60 via-background to-background" />
      <div className="absolute -top-24 right-1/3 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Ótica premium desde 2010
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Enxergue o mundo com mais{" "}
            <span className="italic text-accent-foreground">estilo</span>, conforto e qualidade.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na Visão Prime Ótica você encontra armações modernas, lentes de alta tecnologia
            e atendimento especializado para cuidar da sua visão.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
            >
              <Calendar className="h-4 w-4" /> Agendar exame
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40"
            >
              Conhecer produtos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-accent to-primary"
                  />
                ))}
              </div>
              <span>+8.000 clientes atendidos</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1">4.9 · Google</span>
            </div>
          </div>
        </div>
        <div className="relative reveal">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={hero}
              alt="Mulher usando óculos modernos da Visão Prime"
              width={1600}
              height={1200}
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 rounded-2xl border border-border bg-card p-3 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Award className="h-4 w-4 text-accent-foreground" /> Óculos Premium
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Users className="h-4 w-4 text-accent-foreground" /> Atendimento Especializado
            </div>
          </div>
          <div className="absolute -bottom-4 left-8 rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-accent-foreground" /> Garantia nas lentes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border sm:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="reveal bg-card p-6 sm:p-8">
            <Icon className="h-6 w-6 text-accent-foreground" />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const years = useCountUp(15, inView);
  const clients = useCountUp(8000, inView);
  const sat = useCountUp(98, inView);
  const frames = useCountUp(2500, inView);
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <img src={loja} alt="Interior da Visão Prime Ótica" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nossa loja</p>
            <p className="font-display text-lg font-semibold">São Paulo · SP</p>
          </div>
        </div>
        <div ref={ref} className="reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Sobre a Visão Prime</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Quinze anos cuidando da visão de quem confia no melhor.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nascemos em 2010 com uma missão clara: entregar produtos ópticos de alta
            qualidade com um atendimento verdadeiramente humano. Cada cliente é único —
            e cada par de óculos é escolhido a dedo para acompanhar sua rotina, seu
            estilo e sua saúde visual.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trabalhamos com as principais marcas do mundo, tecnologia de ponta em
            lentes e uma equipe certificada pronta para transformar sua experiência.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { v: `${years}`, l: "Anos de experiência" },
              { v: `+${clients.toLocaleString("pt-BR")}`, l: "Clientes atendidos" },
              { v: `${sat}%`, l: "Satisfação" },
              { v: `+${frames.toLocaleString("pt-BR")}`, l: "Armações disponíveis" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-3xl font-semibold text-foreground">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Nossos serviços</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Tudo o que sua visão precisa, em um só lugar.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do exame ao ajuste final, uma jornada pensada para o seu conforto.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <a href="#contato" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent-foreground">
                Saiba mais <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [favs, setFavs] = useState<Set<number>>(new Set());
  const filtered = useMemo(
    () => (cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat.includes(cat))),
    [cat],
  );
  const toggleFav = (id: number) =>
    setFavs((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  return (
    <section id="produtos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Catálogo</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Armações selecionadas para todos os estilos.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                "rounded-full border px-4 py-1.5 text-sm font-medium transition " +
                (cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary/50">
              <img
                src={p.image}
                alt={p.name}
                width={900}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <button
                onClick={() => toggleFav(p.id)}
                aria-label="Favoritar"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card/90 backdrop-blur transition hover:bg-card"
              >
                <Heart className={"h-4 w-4 " + (favs.has(p.id) ? "fill-primary text-primary" : "text-foreground/70")} />
              </button>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.brand}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-foreground">
                  R$ {p.price.toLocaleString("pt-BR")}
                </span>
                <a
                  href="#contato"
                  className="text-xs font-semibold uppercase tracking-widest text-accent-foreground hover:underline"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="marcas" className="border-y border-border bg-card/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            Marcas parceiras
          </span>
          <h2 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
            As melhores marcas do mundo, curadas para você.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="reveal grid h-16 place-items-center font-display text-lg font-semibold text-muted-foreground opacity-60 transition hover:text-foreground hover:opacity-100"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Como funciona</span>
        <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          Quatro passos para uma visão perfeita.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.n} className="reveal relative rounded-2xl border border-border bg-card p-6">
            <span className="font-display text-4xl font-semibold text-accent-foreground/70">{s.n}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            {i < STEPS.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 text-border md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Antes e depois</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              A diferença que a armação certa faz.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Arraste o controle para ver a transformação. Nossa consultoria de estilo
              ajuda você a encontrar o modelo que valoriza o seu rosto.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img src={afterImg} alt="Depois" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img src={beforeImg} alt="Antes" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg">
                <ArrowRight className="h-4 w-4 -rotate-45" />
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar antes e depois"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
            <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold">Antes</span>
            <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Depois</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Diferenciais</span>
        <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          Por que escolher a Visão Prime.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DIFFERENTIALS.map(({ icon: Icon, title }) => (
          <div key={title} className="reveal flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <span className="font-medium text-foreground">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="depoimentos" className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Depoimentos</span>
        <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
          Quem confia, recomenda.
        </h2>
        <div className="relative mt-12 min-h-[220px]">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (idx === i ? "opacity-100" : "pointer-events-none opacity-0")
              }
            >
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl italic leading-relaxed sm:text-2xl">
                "{t.text}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-primary-foreground/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Depoimento ${idx + 1}`}
              className={
                "h-2 rounded-full transition-all " +
                (idx === i ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-10 md:grid-cols-4">
        {STATS.map((s) => (
          <StatItem key={s.label} target={s.value} suffix={s.suffix} label={s.label} run={inView} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, run }: { target: number; suffix: string; label: string; run: boolean }) {
  const v = useCountUp(target, run);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
        {v.toLocaleString("pt-BR")}
        <span className="text-accent-foreground">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="reveal text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">FAQ</span>
        <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          Perguntas frequentes.
        </h2>
      </div>
      <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                <span
                  className={
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition " +
                    (isOpen ? "rotate-45 bg-primary text-primary-foreground" : "")
                  }
                >
                  +
                </span>
              </button>
              <div
                className={
                  "grid overflow-hidden transition-all duration-300 " +
                  (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                }
              >
                <div className="min-h-0">
                  <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Blog</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Do nosso diário para a sua visão.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-foreground hover:text-accent-foreground">
            Ver todos →
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="reveal group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} width={1200} height={800} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">{p.tag}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent-foreground">
                  Ler mais <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <section id="agendamento" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Agendamento</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Reserve seu horário em menos de 1 minuto.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e nossa equipe entra em contato para confirmar. Também
            atendemos por WhatsApp para agendamentos expressos.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent-foreground" />
              <div>
                <p className="font-semibold text-foreground">Rua das Óticas, 1234 · Jardins</p>
                <p className="text-sm text-muted-foreground">São Paulo · SP · 01234-567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-accent-foreground" />
              <div>
                <p className="font-semibold text-foreground">Seg a Sex 9h–19h · Sáb 9h–14h</p>
                <p className="text-sm text-muted-foreground">Domingos e feriados fechado</p>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="reveal grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome" name="nome" required />
            <Field label="Telefone" name="telefone" required />
            <Field label="WhatsApp" name="whatsapp" />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Data" name="data" type="date" required />
            <Field label="Horário" name="horario" type="time" required />
          </div>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tipo de atendimento</span>
            <select
              name="tipo"
              required
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            >
              <option>Exame de vista</option>
              <option>Escolha de armação</option>
              <option>Troca de lentes</option>
              <option>Ajuste / manutenção</option>
              <option>Lentes de contato</option>
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mensagem</span>
            <textarea
              name="mensagem"
              rows={3}
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
              placeholder="Alguma observação ou preferência?"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {sent ? "Agendamento enviado ✓" : "Agendar"}
            {!sent && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </label>
  );
}

function Location() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Localização</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Visite nossa loja no coração dos Jardins.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-2">
            <iframe
              title="Mapa Visão Prime"
              src="https://www.google.com/maps?q=Jardins,+S%C3%A3o+Paulo,+SP&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Endereço</p>
              <p className="mt-1 font-display text-lg">Rua das Óticas, 1234 · Jardins · SP</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Telefone</p>
              <p className="mt-1 font-display text-lg">(11) 4002-8922</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Horário</p>
              <p className="mt-1 text-sm">Seg a Sex 9h–19h<br />Sáb 9h–14h</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jardins+S%C3%A3o+Paulo"
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MapPin className="h-4 w-4" /> Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Telefone", value: "(11) 4002-8922", href: "tel:+551140028922" },
    { icon: MessageCircle, label: "WhatsApp", value: "(11) 99999-8888", href: "https://wa.me/5511999998888" },
    { icon: Instagram, label: "Instagram", value: "@visaoprime", href: "#" },
    { icon: Facebook, label: "Facebook", value: "/visaoprime", href: "#" },
    { icon: Mail, label: "E-mail", value: "contato@visaoprime.com.br", href: "mailto:contato@visaoprime.com.br" },
  ];
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal mb-10 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Contato</span>
        <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          Fale com a gente pelo canal que preferir.
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="reveal group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40"
          >
            <Icon className="h-6 w-6 text-accent-foreground" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
            <p className="mt-1 font-display font-semibold text-foreground">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Ótica premium com 15 anos de mercado. Cuidamos da sua visão com produtos originais e atendimento humano.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"><Facebook className="h-4 w-4" /></a>
              <a href="https://wa.me/5511999998888" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <p className="font-display font-semibold">Links</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map(([id, label]) => (
                <li key={id}><a href={"#" + id} className="hover:text-foreground">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-semibold">Horários</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Seg a Sex · 9h – 19h</li>
              <li>Sábado · 9h – 14h</li>
              <li>Domingo · fechado</li>
            </ul>
          </div>
          <div>
            <p className="font-display font-semibold">Newsletter</p>
            <p className="mt-4 text-sm text-muted-foreground">Receba novidades e promoções exclusivas.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-border bg-background"
            >
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none"
              />
              <button className="bg-primary px-4 text-sm font-semibold text-primary-foreground">OK</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Visão Prime Ótica. Todos os direitos reservados.</p>
          <p>CNPJ 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/5511999998888"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {top && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:bg-secondary"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Products />
      <Brands />
      <HowItWorks />
      <BeforeAfter />
      <Differentials />
      <Testimonials />
      <Stats />
      <FAQSection />
      <Blog />
      <Booking />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
