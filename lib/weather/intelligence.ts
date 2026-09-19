import type {
  WeatherEngineResult,
  WeatherLocation,
  WeatherIntelligence,
} from "./types";

export function buildWeatherIntelligence(
  location: WeatherLocation,
  weather: WeatherEngineResult,
): WeatherIntelligence {
  return {
    location,
    current: weather.current,
    forecast: weather.forecast,
    source: "Open-Meteo",
    generatedAt: new Date().toISOString(),
  };
}