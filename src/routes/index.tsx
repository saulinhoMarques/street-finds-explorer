import { createFileRoute, useServerFn } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { findNearbyNoWebsite, type Business } from "@/lib/places.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perto de Mim — Comércios locais sem site" },
      {
        name: "description",
        content:
          "Descubra lojas, restaurantes e serviços perto de você que ainda não têm site na internet.",
      },
      { property: "og:title", content: "Perto de Mim — Comércios locais sem site" },
      {
        property: "og:description",
        content:
          "Descubra lojas, restaurantes e serviços perto de você que ainda não têm site na internet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES: { id: string; label: string; types: string[] }[] = [
  { id: "all", label: "Tudo", types: [] },
  { id: "food", label: "Comida & Bebida", types: ["restaurant", "cafe", "bakery", "bar"] },
  { id: "beauty", label: "Beleza", types: ["beauty_salon", "hair_care", "barber_shop"] },
  { id: "shopping", label: "Lojas", types: ["clothing_store", "shoe_store", "store"] },
  { id: "market", label: "Mercados", types: ["grocery_store", "supermarket", "convenience_store"] },
  { id: "health", label: "Saúde", types: ["pharmacy", "drugstore"] },
  { id: "services", label: "Serviços", types: ["car_repair", "laundry", "florist"] },
  { id: "fitness", label: "Fitness", types: ["gym"] },
];

function formatDistance(m: number) {
  if (m < 1000) return `${m} m`;
  return `${(m / 1000).toFixed(1)} km`;
}

function Index() {
  const [category, setCategory] = useState("all");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);
  const find = useServerFn(findNearbyNoWebsite);

  const mutation = useMutation({
    mutationFn: (input: { lat: number; lng: number; types: string[] }) =>
      find({ data: input }),
  });

  const businesses: Business[] = mutation.data?.businesses ?? [];

  const runSearch = (lat: number, lng: number, cat: string) => {
    const types = CATEGORIES.find((c) => c.id === cat)?.types ?? [];
    mutation.mutate({ lat, lng, types });
  };

  const requestLocation = () => {
    setGeoError(null);
    if (!("geolocation" in navigator)) {
      setGeoError("Seu navegador não suporta geolocalização.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const c = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCoords(c);
        runSearch(c.lat, c.lng, category);
      },
      (err) => {
        setGeoError(
          err.code === err.PERMISSION_DENIED
            ? "Permissão negada. Ative a localização para encontrar comércios perto de você."
            : "Não foi possível obter sua localização.",
        );
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const selectCategory = (id: string) => {
    setCategory(id);
    if (coords) runSearch(coords.lat, coords.lng, id);
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex items-center gap-2 text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Perto de mim
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Comércios do bairro que ainda não estão na internet
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Encontre lojas, restaurantes e serviços perto de você que não têm
            site — ordenados por distância. Ajude o comércio local a ser
            descoberto.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={requestLocation}
              disabled={mutation.isPending}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 disabled:opacity-60"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              {coords ? "Buscar novamente" : "Usar minha localização"}
            </button>
            {coords && (
              <span className="text-xs text-muted-foreground">
                {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
              </span>
            )}
          </div>
          {geoError && (
            <p className="mt-3 text-sm text-destructive">{geoError}</p>
          )}
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                onClick={() => selectCategory(c.id)}
                className={
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50")
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {!coords && !mutation.isPending && (
            <EmptyState
              title="Compartilhe sua localização para começar"
              body="Vamos buscar comércios num raio de 2,5 km ao seu redor que não têm site."
            />
          )}
          {mutation.isPending && <Skeletons />}
          {mutation.isError && (
            <EmptyState
              title="Não conseguimos buscar agora"
              body={(mutation.error as Error).message}
            />
          )}
          {mutation.isSuccess && businesses.length === 0 && (
            <EmptyState
              title="Nenhum comércio sem site por aqui"
              body="Tente outra categoria ou uma área diferente."
            />
          )}
          {businesses.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2">
              {businesses.map((b) => (
                <li
                  key={b.id}
                  className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {b.category}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">
                        {b.name}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                      {formatDistance(b.distanceMeters)}
                    </span>
                  </div>
                  {b.address && (
                    <p className="mt-2 text-sm text-muted-foreground">{b.address}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.phone && (
                      <a
                        href={`tel:${b.phone}`}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground hover:border-primary/50"
                      >
                        {b.phone}
                      </a>
                    )}
                    {b.mapsUri && (
                      <a
                        href={b.mapsUri}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground hover:opacity-90"
                      >
                        Ver rota →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Dados por Google Places · Só listamos comércios sem site cadastrado
      </footer>
    </main>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Skeletons() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <li
          key={i}
          className="h-32 animate-pulse rounded-2xl border border-border bg-card"
        />
      ))}
    </ul>
  );
}
