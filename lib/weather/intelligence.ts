import type {
  WeatherEngineResult,
  WeatherIntelligence,
  WeatherIntelligenceSignals,
  WeatherLocation,
} from "./types";

function classifyPrecipitation(
  probability: number,
): WeatherIntelligenceSignals["precipitation"] {
  if (probability >= 80) return "VERY_HIGH";
  if (probability >= 50) return "HIGH";
  if (probability >= 25) return "MODERATE";
  return "LOW";
}

function classifyHumidity(
  humidity: number,
): WeatherIntelligenceSignals["humidity"] {
  if (humidity >= 85) return "VERY_HIGH";
  if (humidity >= 65) return "HIGH";
  if (humidity >= 40) return "MODERATE";
  return "LOW";
}

function classifyTemperature(
  temperature: number,
): WeatherIntelligenceSignals["temperature"] {
  if (temperature >= 30) return "HOT";
  if (temperature >= 24) return "WARM";
  if (temperature >= 18) return "MILD";
  return "COOL";
}

function detectForecastTrend(
  forecast: WeatherEngineResult["forecast"],
): WeatherIntelligenceSignals["forecastTrend"] {
  if (forecast.length < 2) return "STABLE";

  const first = forecast[0];
  const last = forecast[forecast.length - 1];

  const temperatureDelta =
    last.temperatureMax - first.temperatureMax;

  const firstRain = first.precipitationProbability;
  const lastRain = last.precipitationProbability;

  if (lastRain - firstRain >= 20) {
    return "INCREASING_RAIN";
  }

  if (firstRain - lastRain >= 20) {
    return "DECREASING_RAIN";
  }

  if (temperatureDelta >= 2) {
    return "WARMING";
  }

  if (temperatureDelta <= -2) {
    return "COOLING";
  }

  return "STABLE";
}

function buildSummary(
  signals: WeatherIntelligenceSignals,
): string {
  const temperatureText = {
    COOL: "cool",
    MILD: "mild",
    WARM: "warm",
    HOT: "hot",
  }[signals.temperature];

  const humidityText = {
    LOW: "low",
    MODERATE: "moderate",
    HIGH: "high",
    VERY_HIGH: "very high",
  }[signals.humidity];

  const precipitationText = {
    LOW: "low",
    MODERATE: "moderate",
    HIGH: "high",
    VERY_HIGH: "very high",
  }[signals.precipitation];

  const trendText = {
    STABLE: "stable",
    WARMING: "warming",
    COOLING: "cooling",
    INCREASING_RAIN: "increasing rainfall potential",
    DECREASING_RAIN: "decreasing rainfall potential",
  }[signals.forecastTrend];

  return `Current conditions are ${temperatureText}, with ${humidityText} humidity and ${precipitationText} precipitation potential. The forecast trend is ${trendText}.`;
}

export function buildWeatherIntelligence(
  location: WeatherLocation,
  weather: WeatherEngineResult,
): WeatherIntelligence {
  const firstForecast = weather.forecast[0];

  const signals: WeatherIntelligenceSignals = {
    precipitation: classifyPrecipitation(
      firstForecast?.precipitationProbability ?? 0,
    ),
    humidity: classifyHumidity(weather.current.humidity),
    temperature: classifyTemperature(
      weather.current.temperature,
    ),
    forecastTrend: detectForecastTrend(weather.forecast),
  };

  return {
    location,
    current: weather.current,
    forecast: weather.forecast,
    signals,
    summary: buildSummary(signals),
    source: "Open-Meteo",
    generatedAt: new Date().toISOString(),
  };
}