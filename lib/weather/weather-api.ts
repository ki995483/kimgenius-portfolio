import type {
  WeatherCurrent,
  WeatherForecastDay,
  WeatherLocation,
  WeatherEngineResult,
} from "./types";

type OpenMeteoResponse = {
  current?: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    rain: number;
    wind_speed_10m: number;
    weather_code: number;
    is_day: number;
  };

  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

export async function fetchWeather(
  location: WeatherLocation,
): Promise<WeatherEngineResult> {
  const url = new URL(
    "https://api.open-meteo.com/v1/forecast",
  );

  url.searchParams.set(
    "latitude",
    String(location.latitude),
  );

  url.searchParams.set(
    "longitude",
    String(location.longitude),
  );

  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation",
      "rain",
      "wind_speed_10m",
      "weather_code",
      "is_day",
    ].join(","),
  );

  url.searchParams.set(
    "daily",
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
    ].join(","),
  );

  url.searchParams.set("forecast_days", "7");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url, {
    next: {
      revalidate: 900,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Weather request failed with status ${response.status}.`,
    );
  }

  const data =
    (await response.json()) as OpenMeteoResponse;

  if (!data.current || !data.daily) {
    throw new Error("Weather response is incomplete.");
  }

  const current: WeatherCurrent = {
    temperature: data.current.temperature_2m,
    apparentTemperature:
      data.current.apparent_temperature,
    humidity:
      data.current.relative_humidity_2m,
    precipitation:
      data.current.precipitation,
    rain: data.current.rain,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
    isDay: data.current.is_day === 1,
  };

  const forecast: WeatherForecastDay[] =
    data.daily.time.map((date, index) => ({
      date,
      weatherCode: data.daily!.weather_code[index],
      temperatureMax:
        data.daily!.temperature_2m_max[index],
      temperatureMin:
        data.daily!.temperature_2m_min[index],
      precipitationProbability:
        data.daily!.precipitation_probability_max[index],
    }));

  return {
    current,
    forecast,
  };
}