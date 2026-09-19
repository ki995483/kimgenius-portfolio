"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./weather.module.css";

type Unit = "C" | "F";

type ForecastItem = {
  date: string;
  weatherCode: number;
  temperatureMax: number;
  temperatureMin: number;
  precipitationProbability: number;
};

type WeatherLocation = {
  name: string;
  country?: string;
  admin1?: string;
};

type WeatherCurrent = {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  rain: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
};

type WeatherResponse = {
  system: string;
  version: string;
  architecture: string;
  data: {
    location: WeatherLocation;
    current: WeatherCurrent;
    forecast: ForecastItem[];
    source: string;
    generatedAt: string;
  };
};

function getWeatherCondition(code: number): string {
  if (code === 0) return "Clear Sky";
  if (code === 1) return "Mainly Clear";
  if (code === 2) return "Partly Cloudy";
  if (code === 3) return "Overcast";

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
      51,
      53,
      55,
      56,
      57,
      61,
      63,
      65,
      66,
      67,
      80,
      81,
      82,
    ].includes(code)
  ) {
    return "☂";
  }

  if ([0, 1].includes(code)) return "☼";

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "❄";
  }

  if ([45, 48].includes(code)) return "≋";

  return "◌";
}

function convertTemperature(
  temperature: number,
  unit: Unit,
): number {
  if (unit === "C") {
    return Math.round(temperature);
  }

  return Math.round((temperature * 9) / 5 + 32);
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(`${date}T12:00:00`));
}

function formatFullDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function WeatherPage() {
  const [query, setQuery] = useState("Nairobi");
  const [location, setLocation] =
    useState<WeatherLocation | null>(null);
  const [current, setCurrent] =
    useState<WeatherCurrent | null>(null);
  const [forecast, setForecast] =
    useState<ForecastItem[]>([]);
  const [source, setSource] = useState("");
  const [generatedAt, setGeneratedAt] = useState("");
  const [unit, setUnit] = useState<Unit>("C");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadWeather(locationQuery: string) {
    const cleanQuery = locationQuery.trim();

    if (!cleanQuery) {
      setError("Enter a location to search.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/weather?location=${encodeURIComponent(cleanQuery)}`,
        {
          method: "GET",
          cache: "no-store",
        },
      );

      const result =
        (await response.json()) as
          | WeatherResponse
          | {
              error?: string;
              message?: string;
            };

      if (!response.ok) {
        throw new Error(
          "message" in result && result.message
            ? result.message
            : "Weather intelligence request failed.",
        );
      }

      const weather = result as WeatherResponse;

      setLocation(weather.data.location);
      setCurrent(weather.data.current);
      setForecast(weather.data.forecast);
      setSource(weather.data.source);
      setGeneratedAt(weather.data.generatedAt);
    } catch (requestError) {
      setLocation(null);
      setCurrent(null);
      setForecast([]);
      setSource("");
      setGeneratedAt("");

      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to load weather intelligence.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadWeather("Nairobi");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void loadWeather(query);
  }

  const temperatureUnit = unit === "C" ? "°C" : "°F";

  const currentCondition = useMemo(
    () =>
      current
        ? getWeatherCondition(current.weatherCode)
        : "Loading Conditions",
    [current],
  );

  const currentIcon = useMemo(
    () =>
      current
        ? getWeatherIcon(current.weatherCode)
        : "◌",
    [current],
  );

  const locationLabel = location
    ? [location.name, location.admin1, location.country]
        .filter(Boolean)
        .join(", ")
    : "Weather Intelligence";

  return (
    <main className={styles.weatherPage}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>
              <img
                src="/XYZ_Official_Icon.png"
                alt="XYZ"
              />
            </span>

            <span>
              <strong>KIMGENIUS</strong>
              <small>WEATHER INTELLIGENCE</small>
            </span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">XYZ</Link>
            <Link href="/systems">SYSTEMS</Link>
          </nav>
        </div>
      </header>

      <div className={styles.shell}>
        <section className={styles.commandSection}>
          <div className={styles.eyebrow}>
            <span />
            LIVE WEATHER INTELLIGENCE
          </div>

          <div className={styles.commandHeading}>
            <div>
              <h1>
                Weather,
                <br />
                intelligently.
              </h1>

              <p>
                Real-time atmospheric data transformed into
                a focused intelligence layer for the world
                around you.
              </p>
            </div>

            <div className={styles.systemStatus}>
              <span />
              {loading ? "PROCESSING" : "SYSTEM ONLINE"}
            </div>
          </div>

          <form
            className={styles.searchForm}
            onSubmit={handleSubmit}
          >
            <div
              className={styles.searchIcon}
              aria-hidden="true"
            >
              ⌕
            </div>

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search city or location..."
              aria-label="Search weather location"
            />

            <button type="submit" disabled={loading}>
              {loading ? "LOADING" : "SEARCH"}
            </button>
          </form>

          {error ? (
            <p
              role="alert"
              style={{
                marginTop: "14px",
                color: "var(--weather-red, #ff6b7a)",
                fontSize: "0.72rem",
              }}
            >
              {error}
            </p>
          ) : null}
        </section>

        <section className={styles.currentSection}>
          <div className={styles.currentHeader}>
            <div>
              <span className={styles.sectionLabel}>
                CURRENT CONDITIONS
              </span>

              <h2>{locationLabel}</h2>

              <p>
                {current
                  ? `Updated ${formatFullDate(
                      forecast[0]?.date ??
                        new Date().toISOString().slice(0, 10),
                    )}`
                  : "Connecting to weather intelligence..."}
              </p>
            </div>

            <div className={styles.unitToggle}>
              <button
                type="button"
                className={
                  unit === "C"
                    ? styles.activeUnit
                    : undefined
                }
                onClick={() => setUnit("C")}
                aria-pressed={unit === "C"}
              >
                °C
              </button>

              <button
                type="button"
                className={
                  unit === "F"
                    ? styles.activeUnit
                    : undefined
                }
                onClick={() => setUnit("F")}
                aria-pressed={unit === "F"}
              >
                °F
              </button>
            </div>
          </div>

          <div className={styles.currentGrid}>
            <article
              className={`${styles.card} ${styles.temperatureCard}`}
            >
              <span className={styles.cardLabel}>
                TEMPERATURE
              </span>

              <div className={styles.temperature}>
                {current
                  ? convertTemperature(
                      current.temperature,
                      unit,
                    )
                  : "--"}
                <span>{temperatureUnit}</span>
              </div>

              <div className={styles.condition}>
                <span
                  className={styles.weatherOrb}
                  aria-hidden="true"
                />

                {currentCondition}
              </div>

              <p className={styles.cardNote}>
                {current
                  ? `Feels like ${convertTemperature(
                      current.apparentTemperature,
                      unit,
                    )}${temperatureUnit}. ${
                      current.isDay
                        ? "Daylight conditions."
                        : "Night conditions."
                    }`
                  : "Waiting for current atmospheric data."}
              </p>
            </article>

            <article
              className={`${styles.card} ${styles.metricCard}`}
            >
              <span
                className={styles.metricIcon}
                aria-hidden="true"
              >
                ◌
              </span>

              <span className={styles.cardLabel}>
                HUMIDITY
              </span>

              <strong>
                {current ? `${current.humidity}%` : "--"}
              </strong>

              <small>RELATIVE HUMIDITY</small>
            </article>

            <article
              className={`${styles.card} ${styles.metricCard}`}
            >
              <span
                className={styles.metricIcon}
                aria-hidden="true"
              >
                ≋
              </span>

              <span className={styles.cardLabel}>
                WIND
              </span>

              <strong>
                {current
                  ? `${Math.round(current.windSpeed)} km/h`
                  : "--"}
              </strong>

              <small>WIND SPEED</small>
            </article>

            <article
              className={`${styles.card} ${styles.metricCard}`}
            >
              <span
                className={styles.metricIcon}
                aria-hidden="true"
              >
                ◉
              </span>

              <span className={styles.cardLabel}>
                PRECIPITATION
              </span>

              <strong>
                {current
                  ? `${current.precipitation.toFixed(1)} mm`
                  : "--"}
              </strong>

              <small>CURRENT PRECIPITATION</small>
            </article>

            <article
              className={`${styles.card} ${styles.metricCard}`}
            >
              <span
                className={styles.metricIcon}
                aria-hidden="true"
              >
                💧
              </span>

              <span className={styles.cardLabel}>
                RAIN
              </span>

              <strong>
                {current
                  ? `${current.rain.toFixed(1)} mm`
                  : "--"}
              </strong>

              <small>CURRENT RAINFALL</small>
            </article>
          </div>
        </section>

        <section className={styles.forecastSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>
                FORECAST
              </span>

              <h2>Seven-day outlook.</h2>
            </div>

            <div className={styles.liveIndicator}>
              <span />
              LIVE DATA
            </div>
          </div>

          <div className={styles.forecastGrid}>
            {forecast.map((item, index) => (
              <article
                key={item.date}
                className={`${styles.forecastCard} ${
                  index === 0
                    ? styles.forecastActive
                    : ""
                }`}
              >
                <div className={styles.forecastTop}>
                  <strong>
                    {index === 0
                      ? "TODAY"
                      : formatDate(item.date).toUpperCase()}
                  </strong>

                  <span>{item.date}</span>
                </div>

                <div
                  className={styles.forecastIcon}
                  aria-hidden="true"
                >
                  {getWeatherIcon(item.weatherCode)}
                </div>

                <div className={styles.forecastCondition}>
                  {getWeatherCondition(item.weatherCode)}
                </div>

                <div className={styles.forecastTemps}>
                  <strong>
                    {convertTemperature(
                      item.temperatureMax,
                      unit,
                    )}
                    {temperatureUnit}
                  </strong>

                  <span>
                    {convertTemperature(
                      item.temperatureMin,
                      unit,
                    )}
                    {temperatureUnit}
                  </span>
                </div>

                <div className={styles.rainMeta}>
                  <span>RAIN PROBABILITY</span>
                  <strong>
                    {item.precipitationProbability}%
                  </strong>
                </div>

                <div className={styles.rainBar}>
                  <span
                    style={{
                      width: `${Math.min(
                        Math.max(
                          item.precipitationProbability,
                          0,
                        ),
                        100,
                      )}%`,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.intelligenceSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>
                INTELLIGENCE LAYER
              </span>

              <h2>Read the atmosphere.</h2>
            </div>
          </div>

          <div className={styles.intelligenceGrid}>
            <article
              className={`${styles.card} ${styles.insightCard}`}
            >
              <span className={styles.insightNumber}>
                01 / TEMPERATURE
              </span>

              <div>
                <h3>
                  {forecast.length
                    ? `${convertTemperature(
                        Math.max(
                          ...forecast.map(
                            (item) =>
                              item.temperatureMax,
                          ),
                        ),
                        unit,
                      )}${temperatureUnit} peak`
                    : "Temperature signal"}
                </h3>

                <p>
                  The seven-day forecast establishes the
                  expected temperature range across the
                  available outlook.
                </p>
              </div>

              <div className={styles.miniChart}>
                {forecast.slice(0, 7).map((item) => (
                  <span
                    key={item.date}
                    style={{
                      height: `${Math.max(
                        12,
                        Math.min(
                          100,
                          item.temperatureMax * 3,
                        ),
                      )}%`,
                    }}
                  />
                ))}
              </div>
            </article>

            <article
              className={`${styles.card} ${styles.insightCard}`}
            >
              <span className={styles.insightNumber}>
                02 / PRECIPITATION
              </span>

              <div>
                <h3>Rain signal</h3>

                <p>
                  Precipitation probability across the
                  forecast window is surfaced directly from
                  the weather engine.
                </p>
              </div>

              <div className={styles.precipSignal}>
                <strong>
                  {forecast.length
                    ? `${Math.max(
                        ...forecast.map(
                          (item) =>
                            item.precipitationProbability,
                        ),
                      )}%`
                    : "--"}
                </strong>

                <span>MAX PROBABILITY</span>
              </div>
            </article>

            <article
              className={`${styles.card} ${styles.insightCard}`}
            >
              <span className={styles.insightNumber}>
                03 / SYSTEM
              </span>

              <div>
                <h3>Intelligence online.</h3>

                <p>
                  Weather data is now routed through the
                  KIMGENIUS Weather Intelligence API rather
                  than being sourced directly by the page.
                </p>
              </div>

              <div className={styles.windCompass}>
                <span>N</span>
                <span>E</span>
                <span>S</span>
                <span>W</span>
                <i />
              </div>
            </article>
          </div>
        </section>

        <section className={styles.contextSection}>
          <div className={styles.contextCard}>
            <div>
              <span className={styles.sectionLabel}>
                KIMGENIUS SYSTEM
              </span>

              <h2>Weather is data.</h2>

              <p>
                KIMGENIUS turns that data into a structured
                intelligence system: location discovery,
                atmospheric retrieval, normalization and
                focused output — all through one reusable
                architecture.
              </p>
            </div>

            <div className={styles.contextMark}>
              <span>XYZ</span>
              <small>INTELLIGENCE</small>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <span>
            © 2026 KIMGENIUS • XYZ TECH
          </span>

          <Link href="/systems">
            SYSTEM REGISTRY →
          </Link>
        </div>
      </footer>
    </main>
  );
}