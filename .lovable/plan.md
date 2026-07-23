## Visão Prime Ótica — Site portfólio

Vou transformar o projeto atual num site premium de ótica fictícia (Visão Prime), pensado como peça de portfólio. Substituo a home "Perto de mim" por uma landing longa, mantendo a stack (TanStack Start + Tailwind v4 + shadcn).

### Design system

- Paleta sofisticada: azul-marinho profundo (confiança) + dourado suave (premium) + off-white. Atualizo tokens em `src/styles.css` (light + dark).
- Tipografia: Fraunces (display serifada elegante) + Inter (sans), carregadas via `<link>` no `__root.tsx`.
- Componentes reutilizáveis com shadcn (Accordion, Carousel, Tabs, Dialog, Form).
- Dark mode com toggle no header (classe `.dark` no `<html>`, persistência em `localStorage` via `useEffect`).

### Estrutura da home (`src/routes/index.tsx`)

Single-page com âncoras para as seções listadas no brief:

1. **Header fixo** com efeito de blur ao rolar, logo (ícone óculos SVG + wordmark), navegação âncora, botões "Agendar" e "WhatsApp", toggle dark mode.
2. **Hero** split: título display + subcopy + CTAs à esquerda; foto (imagem gerada) de pessoa usando óculos à direita com três badges flutuantes (Premium, Atendimento, Garantia).
3. **Barra de benefícios** — 4 cards com ícones lucide.
4. **Sobre** — imagem da loja + texto + 4 indicadores animados (count-up ao entrar na viewport via IntersectionObserver).
5. **Serviços** — 8 cards com imagem/ícone, título, descrição, link "Saiba mais".
6. **Catálogo** — filtros por categoria (Todos/Masculino/Feminino/Infantil/Esportivo/Premium) com estado local; grid de ~12 produtos fictícios (imagens geradas ou placeholders temáticos), preço, botão favoritar (toggle heart), modal "Ver detalhes".
7. **Marcas** — grid de 8 marcas em wordmark SVG (grayscale → cor no hover).
8. **Como funciona** — 4 etapas com conectores.
9. **Antes/Depois** — slider comparativo (input range que revela imagem por clip-path).
10. **Diferenciais** — grid de 8 cards.
11. **Depoimentos** — carrossel (shadcn Carousel) com foto, nome, 5 estrelas, comentário.
12. **Estatísticas** — 4 contadores animados full-width sobre fundo escuro.
13. **FAQ** — Accordion shadcn com 7 perguntas.
14. **Blog** — 3 cards de artigo (imagem, categoria, título, resumo, "Ler mais").
15. **Agendamento** — form (react-hook-form + zod já disponíveis) com validação; submit fake mostra toast de sucesso.
16. **Localização** — endereço + horário + botão Google Maps (link para Maps com query do endereço fictício); iframe do Google Maps embed usando URL pública (sem key) para São Paulo.
17. **Contato** — 5 cards (tel, WA, IG, FB, email).
18. **Rodapé** — 4 colunas (marca+resumo, links, horários, newsletter) + social + copyright.

### Interações

- Scroll suave nativo (`scroll-behavior: smooth`).
- Botão flutuante do WhatsApp (canto inferior direito) + "Voltar ao topo" que aparece após rolar 400px.
- Animações de entrada com `IntersectionObserver` + classe utilitária `.reveal` (fade+translate). Sem lib externa.
- Hover elegante nos cards (translateY + shadow).
- Contadores animados com `requestAnimationFrame`.

### Imagens

Gero via `imagegen` (fast) para: hero (pessoa com óculos), loja (interior), 6 produtos hero do catálogo, 3 fotos de blog, 3 depoimentos, antes/depois (2 imagens). Total ~15 imagens salvas em `src/assets/` e uploadadas via `lovable-assets` para não pesar no repo.

### SEO / head

- `head()` no route index com título "Visão Prime Ótica — Óculos, Lentes e Exame de Vista", description, og:title/description/type=website, og:image (hero), twitter:card, twitter:image.
- Favicon: gero um ícone de óculos, coloco em `public/favicon.png`, atualizo `__root.tsx` links e removo `public/favicon.ico`.

### Limpeza

- Removo `src/lib/places.functions.ts` (não usado no novo site) e a busca do Google Places.
- Mantenho stack e utilitários existentes (`cn`, shadcn base).

### Arquivos afetados

- `src/styles.css` — nova paleta + utilitários (`.reveal`, `.no-scrollbar`).
- `src/routes/__root.tsx` — fontes Google via `<link>`, favicon novo, meta base.
- `src/routes/index.tsx` — reescrito como landing da ótica.
- `src/components/optica/*` — 15+ componentes de seção.
- `src/hooks/use-reveal.ts`, `src/hooks/use-count-up.ts`, `src/hooks/use-dark-mode.ts`.
- `src/data/optica.ts` — dados fictícios (produtos, depoimentos, FAQ, blog, marcas).
- `src/assets/*.asset.json` — imagens geradas.
- `public/favicon.png` (novo), `public/favicon.ico` (removido).
- `src/lib/places.functions.ts` — removido.

Vou usar componentes shadcn já instalados; se faltar Carousel/Accordion adiciono via `bunx shadcn@latest add`.