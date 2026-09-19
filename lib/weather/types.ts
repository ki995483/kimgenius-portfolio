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

export type WeatherIntelligence = {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: WeatherForecastDay[];
  source: "Open-Meteo";
  generatedAt: string;
};