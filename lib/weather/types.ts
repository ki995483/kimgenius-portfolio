export type WeatherLocation = {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
};

export type WeatherCurrent = {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  rain: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
};

export type WeatherForecastDay = {
  date: string;
  weatherCode: number;
  temperatureMax: number;
  temperatureMin: number;
  precipitationProbability: number;
};

export type WeatherEngineResult = {
  current: WeatherCurrent;
  forecast: WeatherForecastDay[];
};

export type WeatherIntelligenceSignals = {
  precipitation: "LOW" | "MODERATE" | "HIGH" | "VERY_HIGH";
  humidity: "LOW" | "MODERATE" | "HIGH" | "VERY_HIGH";
  temperature: "COOL" | "MILD" | "WARM" | "HOT";
  forecastTrend:
    | "STABLE"
    | "WARMING"
    | "COOLING"
    | "INCREASING_RAIN"
    | "DECREASING_RAIN";
};

export type WeatherIntelligence = {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: WeatherForecastDay[];
  signals: WeatherIntelligenceSignals;
  summary: string;
  source: "Open-Meteo";
  generatedAt: string;
};