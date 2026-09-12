"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./weather.module.css";

type Unit = "C" | "F";

type ForecastItem = {
  day: string;
  date: string;
  condition: string;
  high: number;
  low: number;
  rain: number;
  code: number;
};

type LocationResult = {
  name: string;
  country?: string;
  admin1?: string;
  latitude: number;
  longitude: number;
};

type WeatherData = {
  location: string;
  country: string;
  currentDate: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  visibility: number;
  weatherCode: number;
  forecast: ForecastItem[];
};

type GeocodingResponse = {
  results?: LocationResult[];
};

type OpenMeteoResponse = {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    visibility: number;
  };

  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };

  timezone: string;
};

function getWeatherCondition(code: number): string {
  if (code === 0) return "Clear Sky";

  if ([1].includes(code)) return "Mainly Clear";
  if ([2].includes(code)) return "Partly Cloudy";
  if ([3].includes(code)) return "Overcast";

  if ([45, 48].includes(code)) return "Foggy";

  if ([51, 53, 55, 56, 57].includes(code)) {
    return "Drizzle";
  }

  if ([61, 63, 65, 66, 67].includes(code)) {
    return "Rain";
  }

  if ([71, 73, 75, 77].includes(code)) {
    return "Snow";
  }

  if ([80, 81, 82].includes(code)) {
    return "Rain Showers";
  }

  if ([85, 86].includes(code)) {
    return "Snow Showers";
  }

  if ([95, 96, 99].includes(code)) {
    return "Thunderstorm";
  }

  return "Variable Conditions";
}

function getWeatherIcon(code: number): string {
  if ([95, 96, 99].includes(code)) return "⚡";

  if (
    [
      51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82,
    ].includes(code)
  ) {
    return "☂";
  }

  if ([0, 1].includes(code)) return "☼";

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "❄";
  }

  return "◒";
}

function getDayLabel(date: string, index: number): string {
  if (index === 0) return "TODAY";

  const parsed = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  })
    .format(parsed)
    .toUpperCase();
}

function getDateLabel(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  })
    .format(parsed)
    .toUpperCase();
}

function getDateLabelLong(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function getWindDirection(degrees: number): string {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  const index = Math.round(degrees / 22.5) % 16;

  return directions[index];
}

function getTemperatureTrend(forecast: ForecastItem[]): string {
  if (forecast.length < 3) {
    return "Stable atmospheric pattern.";
  }

  const first = forecast[0].high;
  const last = forecast[forecast.length - 1].high;
  const difference = last - first;

  if (difference >= 2) {
    return "Temperatures trend warmer.";
  }

  if (difference <= -2) {
    return "Temperatures trend cooler.";
  }

  return "Temperatures remain relatively stable.";
}

function getTemperatureTrendDetail(forecast: ForecastItem[]): string {
  if (forecast.length < 3) {
    return "The available forecast window shows limited temperature movement.";
  }

  const first = forecast[0].high;
  const last = forecast[forecast.length - 1].high;

  if (last > first + 1) {
    return "The forecast develops a gradual warming pattern across the observation window.";
  }

  if (last < first - 1) {
    return "The forecast develops a gradual cooling pattern across the observation window.";
  }

  return "Temperatures remain relatively consistent across the current forecast window.";
}

function getConditionNote(code: number): string {
  if ([0, 1].includes(code)) {
    return "Clear atmospheric conditions with strong visibility potential.";
  }

  if ([2, 3].includes(code)) {
    return "Cloud cover is present while overall atmospheric conditions remain manageable.";
  }

  if ([45, 48].includes(code)) {
    return "Reduced visibility is possible due to fog or low atmospheric moisture.";
  }

  if (
    [
      51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82,
    ].includes(code)
  ) {
    return "Moisture is active in the atmosphere with precipitation currently possible.";
  }

  if ([95, 96, 99].includes(code)) {
    return "Convective activity is present. Atmospheric conditions are currently unstable.";
  }

  return "Atmospheric conditions are currently variable.";
}

async function geocodeLocation(query: string): Promise<LocationResult> {
  const url =
    "https://geocoding-api.open-meteo.com/v1/search" +
    `?name=${encodeURIComponent(query)}` +
    "&count=1" +
    "&language=en" +
    "&format=json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Location service unavailable.");
  }

  const data: GeocodingResponse = await response.json();

  const result = data.results?.[0];

  if (!result) {
    throw new Error(`No location found for "${query}".`);
  }

  return result;
}

async function fetchWeather(
  latitude: number,
  longitude: number,
): Promise<OpenMeteoResponse> {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,visibility" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
    "&forecast_days=5" +
    "&timezone=auto";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather service unavailable.");
  }

  return response.json();
}

async function loadWeatherForLocation(
  location: LocationResult,
): Promise<WeatherData> {
  const weather = await fetchWeather(
    location.latitude,
    location.longitude,
  );

  const forecast: ForecastItem[] = weather.daily.time.map(
    (date, index) => ({
      day: getDayLabel(date, index),
      date: getDateLabel(date),
      condition: getWeatherCondition(
        weather.daily.weather_code[index],
      ),
      high: Math.round(
        weather.daily.temperature_2m_max[index],
      ),
      low: Math.round(
        weather.daily.temperature_2m_min[index],
      ),
      rain: Math.round(
        weather.daily.precipitation_probability_max[index] ?? 0,
      ),
      code: weather.daily.weather_code[index],
    }),
  );

  return {
    location: location.name,
    country: location.country ?? "",
    currentDate: getDateLabelLong(
      weather.current.time.split("T")[0],
    ),
    temperature: Math.round(
      weather.current.temperature_2m,
    ),
    feelsLike: Math.round(
      weather.current.apparent_temperature,
    ),
    humidity: Math.round(
      weather.current.relative_humidity_2m,
    ),
    windSpeed: Math.round(
      weather.current.wind_speed_10m,
    ),
    windDirection: Math.round(
      weather.current.wind_direction_10m,
    ),
    visibility: Math.round(
      weather.current.visibility / 1000,
    ),
    weatherCode: weather.current.weather_code,
    forecast,
  };
}

export default function WeatherPage() {
  const [query, setQuery] = useState("");
  const [unit, setUnit] = useState<Unit>("C");

  const [weather, setWeather] = useState<WeatherData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadCity(city: string) {
    setLoading(true);
    setError("");

    try {
      const location = await geocodeLocation(city);
      const weatherData = await loadWeatherForLocation(location);

      setWeather(weatherData);
      setQuery("");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to load weather data.";

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCity("Nairobi");
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleaned = query.trim();

    if (!cleaned || loading) {
      return;
    }

    void loadCity(cleaned);
  }

  function convertTemperature(value: number): number {
    if (unit === "C") {
      return Math.round(value);
    }

    return Math.round((value * 9) / 5 + 32);
  }

  function formatTemperature(value: number): string {
    return `${convertTemperature(value)}°`;
  }

  const currentTemperature = weather
    ? convertTemperature(weather.temperature)
    : "--";

  const temperatureUnit = `°${unit}`;

  const currentCondition = weather
    ? getWeatherCondition(weather.weatherCode)
    : "Loading Conditions";

  const currentIcon = weather
    ? getWeatherIcon(weather.weatherCode)
    : "◒";

  const windDirection = weather
    ? getWindDirection(weather.windDirection)
    : "--";

  const temperatureTrend = useMemo(
    () =>
      weather
        ? getTemperatureTrend(weather.forecast)
        : "Reading atmospheric pattern.",
    [weather],
  );

  const temperatureTrendDetail = useMemo(
    () =>
      weather
        ? getTemperatureTrendDetail(weather.forecast)
        : "Waiting for forecast intelligence.",
    [weather],
  );

  const peakRain = useMemo(() => {
    if (!weather || weather.forecast.length === 0) {
      return {
        value: 0,
        day: "FORECAST",
      };
    }

    return weather.forecast.reduce(
      (highest, item) =>
        item.rain > highest.value
          ? {
              value: item.rain,
              day: item.day,
            }
          : highest,
      {
        value: 0,
        day: "FORECAST",
      },
    );
  }, [weather]);

  return (
    <main className={styles.weatherPage}>
      <div className={styles.backgroundGlow} />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/portfolio" className={styles.brand}>
            <span className={styles.brandMark}>
              <img src="/icon.png" alt="XYZ" />
            </span>

            <span>
              <strong>KIMGENIUS</strong>
              <small>WEATHER INTELLIGENCE</small>
            </span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/portfolio">PORTFOLIO</Link>
            <Link href="/">XYZ HOME</Link>
          </nav>
        </div>
      </header>

      <section className={styles.commandSection}>
        <div className={styles.shell}>
          <div className={styles.eyebrow}>
            <span />
            WEATHER INTELLIGENCE SYSTEM
          </div>

          <div className={styles.commandHeading}>
            <div>
              <h1>Atmospheric intelligence.</h1>

              <p>
                Observe conditions, forecast movement, and
                understand the atmosphere around you.
              </p>
            </div>

            <div className={styles.systemStatus}>
              <span />

              {loading
                ? "LOADING DATA"
                : error
                  ? "DATA LINK ERROR"
                  : "SYSTEM ONLINE"}
            </div>
          </div>

          <form
            className={styles.searchForm}
            onSubmit={handleSearch}
          >
            <div className={styles.searchIcon}>⌕</div>

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search city or location..."
              aria-label="Search city or location"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "LOADING..." : "SEARCH"}
            </button>
          </form>
        </div>
      </section>

      <section className={styles.currentSection}>
        <div className={styles.shell}>
          <div className={styles.currentHeader}>
            <div>
              <span className={styles.sectionLabel}>
                CURRENT CONDITIONS
              </span>

              <h2>
                {weather
                  ? `${weather.location}${
                      weather.country
                        ? `, ${weather.country}`
                        : ""
                    }`
                  : "Loading location"}
              </h2>

              <p>
                {weather
                  ? weather.currentDate
                  : error || "Connecting to weather intelligence..."}
              </p>
            </div>

            <div className={styles.unitToggle}>
              <button
                type="button"
                className={
                  unit === "C" ? styles.activeUnit : ""
                }
                onClick={() => setUnit("C")}
              >
                °C
              </button>

              <button
                type="button"
                className={
                  unit === "F" ? styles.activeUnit : ""
                }
                onClick={() => setUnit("F")}
              >
                °F
              </button>
            </div>
          </div>

          <div className={styles.currentGrid}>
            <article
              className={`${styles.temperatureCard} ${styles.card}`}
            >
              <div className={styles.cardLabel}>
                TEMPERATURE
              </div>

              <div className={styles.temperature}>
                {currentTemperature}

                <span>{temperatureUnit}</span>
              </div>

              <div className={styles.condition}>
                <span className={styles.weatherOrb}>
                  {currentIcon}
                </span>

                {currentCondition}
              </div>

              <p className={styles.cardNote}>
                {weather
                  ? getConditionNote(weather.weatherCode)
                  : "Establishing live atmospheric connection."}
              </p>
            </article>

            <article
              className={`${styles.metricCard} ${styles.card}`}
            >
              <span className={styles.metricIcon}>≈</span>

              <span className={styles.cardLabel}>
                FEELS LIKE
              </span>

              <strong>
                {weather
                  ? formatTemperature(weather.feelsLike)
                  : "--"}
              </strong>

              <small>
                {weather ? "Apparent temperature" : "Waiting"}
              </small>
            </article>

            <article
              className={`${styles.metricCard} ${styles.card}`}
            >
              <span className={styles.metricIcon}>◌</span>

              <span className={styles.cardLabel}>
                HUMIDITY
              </span>

              <strong>
                {weather ? `${weather.humidity}%` : "--"}
              </strong>

              <small>
                {weather
                  ? weather.humidity >= 70
                    ? "High"
                    : weather.humidity >= 40
                      ? "Moderate"
                      : "Low"
                  : "Waiting"}
              </small>
            </article>

            <article
              className={`${styles.metricCard} ${styles.card}`}
            >
              <span className={styles.metricIcon}>↗</span>

              <span className={styles.cardLabel}>
                WIND
              </span>

              <strong>
                {weather
                  ? `${weather.windSpeed} km/h`
                  : "--"}
              </strong>

              <small>
                {weather
                  ? `${windDirection} · ${getWindDirection(
                      weather.windDirection,
                    )}`
                  : "Waiting"}
              </small>
            </article>

            <article
              className={`${styles.metricCard} ${styles.card}`}
            >
              <span className={styles.metricIcon}>◎</span>

              <span className={styles.cardLabel}>
                VISIBILITY
              </span>

              <strong>
                {weather
                  ? `${weather.visibility} km`
                  : "--"}
              </strong>

              <small>
                {weather
                  ? weather.visibility >= 10
                    ? "Good"
                    : weather.visibility >= 5
                      ? "Moderate"
                      : "Reduced"
                  : "Waiting"}
              </small>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.forecastSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>
                FORECAST MATRIX
              </span>

              <h2>Upcoming conditions</h2>
            </div>

            <span className={styles.liveIndicator}>
              <span />
              LIVE MODEL
            </span>
          </div>

          <div className={styles.forecastGrid}>
            {weather?.forecast.map((item) => (
              <article
                key={`${item.day}-${item.date}`}
                className={`${styles.forecastCard} ${
                  item.day === "TODAY"
                    ? styles.forecastActive
                    : ""
                }`}
              >
                <div className={styles.forecastTop}>
                  <strong>{item.day}</strong>

                  <span>{item.date}</span>
                </div>

                <div className={styles.forecastIcon}>
                  {getWeatherIcon(item.code)}
                </div>

                <div className={styles.forecastCondition}>
                  {item.condition}
                </div>

                <div className={styles.forecastTemps}>
                  <strong>
                    {formatTemperature(item.high)}
                  </strong>

                  <span>
                    {formatTemperature(item.low)}
                  </span>
                </div>

                <div className={styles.rainMeta}>
                  <span>RAIN</span>

                  <strong>{item.rain}%</strong>
                </div>

                <div className={styles.rainBar}>
                  <span
                    style={{
                      width: `${item.rain}%`,
                    }}
                  />
                </div>
              </article>
            ))}

            {!weather && (
              <article className={styles.forecastCard}>
                <div className={styles.forecastTop}>
                  <strong>LIVE</strong>
                  <span>DATA</span>
                </div>

                <div className={styles.forecastIcon}>◒</div>

                <div className={styles.forecastCondition}>
                  Connecting...
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className={styles.intelligenceSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>
                ATMOSPHERIC INTELLIGENCE
              </span>

              <h2>Read the atmosphere.</h2>
            </div>
          </div>

          <div className={styles.intelligenceGrid}>
            <article
              className={`${styles.insightCard} ${styles.card}`}
            >
              <span className={styles.insightNumber}>
                01
              </span>

              <div>
                <span className={styles.cardLabel}>
                  TEMPERATURE TREND
                </span>

                <h3>{temperatureTrend}</h3>

                <p>{temperatureTrendDetail}</p>
              </div>

              <div className={styles.miniChart}>
                {(weather?.forecast ?? []).map(
                  (item, index, array) => {
                    const values = array.map(
                      (forecastItem) => forecastItem.high,
                    );

                    const min = Math.min(...values);
                    const max = Math.max(...values);
                    const range = Math.max(max - min, 1);

                    const height =
                      42 +
                      ((item.high - min) / range) * 46;

                    return (
                      <span
                        key={`${item.date}-${index}`}
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    );
                  },
                )}
              </div>
            </article>

            <article
              className={`${styles.insightCard} ${styles.card}`}
            >
              <span className={styles.insightNumber}>
                02
              </span>

              <div>
                <span className={styles.cardLabel}>
                  PRECIPITATION
                </span>

                <h3>
                  {weather
                    ? `Rain probability peaks ${peakRain.day}.`
                    : "Reading precipitation signal."}
                </h3>

                <p>
                  {weather
                    ? "The current forecast identifies the strongest precipitation signal within the active observation window."
                    : "Waiting for live forecast data."}
                </p>
              </div>

              <div className={styles.precipSignal}>
                <strong>{peakRain.value}%</strong>

                <span>PEAK PROBABILITY</span>
              </div>
            </article>

            <article
              className={`${styles.insightCard} ${styles.card}`}
            >
              <span className={styles.insightNumber}>
                03
              </span>

              <div>
                <span className={styles.cardLabel}>
                  WIND ANALYSIS
                </span>

                <h3>
                  {weather
                    ? `${windDirection} atmospheric flow.`
                    : "Reading wind field."}
                </h3>

                <p>
                  {weather
                    ? `Current wind is moving at ${weather.windSpeed} km/h from the ${windDirection} sector.`
                    : "Waiting for live wind observations."}
                </p>
              </div>

              <div className={styles.windCompass}>
                <span>N</span>
                <span>E</span>
                <span>S</span>
                <span>W</span>

                <i
                  style={{
                    transform: weather
                      ? `translate(-50%, -75%) rotate(${weather.windDirection}deg)`
                      : "translate(-50%, -75%) rotate(0deg)",
                  }}
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.contextSection}>
        <div className={styles.shell}>
          <div className={styles.contextCard}>
            <div>
              <span className={styles.sectionLabel}>
                GEOGRAPHIC CONTEXT
              </span>

              <h2>Weather is spatial.</h2>

              <p>
                Atmospheric conditions change across
                geography. Future iterations of this system
                will connect weather intelligence with spatial
                analysis and geographic data.
              </p>
            </div>

            <div className={styles.contextMark}>
              <span>XYZ</span>

              <small>SPATIAL CORE</small>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div className={styles.footerInner}>
            <span>© 2026 KIMGENIUS</span>

            <span>
              WEATHER INTELLIGENCE · XYZ TECH
            </span>

            <Link href="/portfolio">
              RETURN TO PORTFOLIO →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}