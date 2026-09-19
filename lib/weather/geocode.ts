import type { WeatherLocation } from "./types";

type GeocodingResponse = {
  results?: Array<{
    name: string;
    latitude: number;
    longitude: number;
    country?: string;
    admin1?: string;
  }>;
};

export async function geocodeLocation(
  query: string,
): Promise<WeatherLocation | null> {
  const url = new URL(
    "https://geocoding-api.open-meteo.com/v1/search",
  );

  url.searchParams.set("name", query);
  url.searchParams.set("count", "1");
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");

  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Geocoding request failed with status ${response.status}.`,
    );
  }

  const data =
    (await response.json()) as GeocodingResponse;

  const result = data.results?.[0];

  if (!result) {
    return null;
  }

  return {
    name: result.name,
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country,
    admin1: result.admin1,
  };
}