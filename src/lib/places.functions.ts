import { createServerFn } from "@tanstack/react-start";

export type Business = {
  id: string;
  name: string;
  address: string;
  category: string;
  phone: string | null;
  mapsUri: string | null;
  lat: number;
  lng: number;
  distanceMeters: number;
};

type PlacesResponse = {
  places?: Array<{
    id: string;
    displayName?: { text?: string };
    formattedAddress?: string;
    location?: { latitude: number; longitude: number };
    websiteUri?: string;
    nationalPhoneNumber?: string;
    internationalPhoneNumber?: string;
    primaryTypeDisplayName?: { text?: string };
    googleMapsUri?: string;
  }>;
};

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371000;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export const findNearbyNoWebsite = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      lat: number;
      lng: number;
      radius?: number;
      types?: string[];
    }) => {
      if (
        typeof data.lat !== "number" ||
        typeof data.lng !== "number" ||
        Number.isNaN(data.lat) ||
        Number.isNaN(data.lng)
      ) {
        throw new Error("Coordenadas inválidas");
      }
      return {
        lat: data.lat,
        lng: data.lng,
        radius: Math.min(Math.max(data.radius ?? 2500, 100), 50000),
        types: Array.isArray(data.types) ? data.types.slice(0, 10) : [],
      };
    },
  )
  .handler(async ({ data }): Promise<{ businesses: Business[] }> => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      throw new Error("Credenciais do Google Maps não configuradas");
    }

    const url =
      "https://connector-gateway.lovable.dev/google_maps/places/v1/places:searchNearby";

    const body: Record<string, unknown> = {
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: { latitude: data.lat, longitude: data.lng },
          radius: data.radius,
        },
      },
      rankPreference: "DISTANCE",
    };
    if (data.types.length > 0) body.includedTypes = data.types;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_MAPS_API_KEY,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress,places.location,places.websiteUri,places.nationalPhoneNumber,places.internationalPhoneNumber,places.primaryTypeDisplayName,places.googleMapsUri",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Places searchNearby failed [${response.status}]: ${text}`);
      throw new Error(`Falha ao buscar comércios [${response.status}]`);
    }

    const json = (await response.json()) as PlacesResponse;
    const places = json.places ?? [];

    const businesses: Business[] = places
      .filter((p) => !p.websiteUri && p.location)
      .map((p) => {
        const lat = p.location!.latitude;
        const lng = p.location!.longitude;
        return {
          id: p.id,
          name: p.displayName?.text ?? "Sem nome",
          address: p.formattedAddress ?? "",
          category: p.primaryTypeDisplayName?.text ?? "Comércio",
          phone: p.nationalPhoneNumber ?? p.internationalPhoneNumber ?? null,
          mapsUri: p.googleMapsUri ?? null,
          lat,
          lng,
          distanceMeters: Math.round(haversine(data.lat, data.lng, lat, lng)),
        };
      })
      .sort((a, b) => a.distanceMeters - b.distanceMeters);

    return { businesses };
  });