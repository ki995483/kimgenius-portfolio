"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./weather.module.css";

type Forecast = {
  day: string;
  date: string;
  condition: string;
  high: number;
  low: number;
  rain: number;
};

const forecast: Forecast[] = [
  {
    day: "TODAY",
    date: "09 SEP",
    condition: "Partly Cloudy",
    high: 24,
    low: 15,
    rain: 18,
  },
  {
    day: "THU",
    date: "10 SEP",
    condition: "Cloudy",
    high: 23,
    low: 15,
    rain: 32,
  },
  {
    day: "FRI",
    date: "11 SEP",
    condition: "Light Rain",
    high: 22,
    low: 14,
    rain: 61,
  },
  {
    day: "SAT",
    date: "12 SEP",
    condition: "Partly Cloudy",
    high: 25,
    low: 14,
    rain: 24,
  },
  {
    day: "SUN",
    date: "13 SEP",
    condition: "Mostly Sunny",
    high: 26,
    low: 15,
    rain: 12,
  },
];

export default function WeatherPage() {
  const [location, setLocation] = useState("Nairobi");
  const [query, setQuery] = useState("");
  const [unit, setUnit] = useState<"C" | "F">("C");

  const temperature = useMemo(() => {
    const celsius = 24;

    if (unit === "C") {
      return celsius;
    }

    return Math.round((celsius * 9) / 5 + 32);
  }, [unit]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleaned = query.trim();

    if (!cleaned) {
      return;
    }

    setLocation(cleaned);
    setQuery("");
  }

  function formatTemperature(value: number) {
    if (unit === "C") {
      return `${value}°`;
    }

    return `${Math.round((value * 9) / 5 + 32)}°`;
  }

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
                Observe conditions, forecast movement, and understand the
                atmosphere around you.
              </p>
            </div>

            <div className={styles.systemStatus}>
              <span />
              SYSTEM ONLINE
            </div>
          </div>

          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.searchIcon}>⌕</div>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search city or location..."
              aria-label="Search city or location"
            />

            <button type="submit">SEARCH</button>
          </form>
        </div>
      </section>

      <section className={styles.currentSection}>
        <div className={styles.shell}>
          <div className={styles.currentHeader}>
            <div>
              <span className={styles.sectionLabel}>CURRENT CONDITIONS</span>

              <h2>{location}</h2>

              <p>Wednesday · 09 September 2026</p>
            </div>

            <div className={styles.unitToggle}>
              <button
                type="button"
                className={unit === "C" ? styles.activeUnit : ""}
                onClick={() => setUnit("C")}
              >
                °C
              </button>

              <button
                type="button"
                className={unit === "F" ? styles.activeUnit : ""}
                onClick={() => setUnit("F")}
              >
                °F
              </button>
            </div>
          </div>

          <div className={styles.currentGrid}>
            <article className={`${styles.temperatureCard} ${styles.card}`}>
              <div className={styles.cardLabel}>TEMPERATURE</div>

              <div className={styles.temperature}>
                {temperature}
                <span>°{unit}</span>
              </div>

              <div className={styles.condition}>
                <span className={styles.weatherOrb} />
                Partly Cloudy
              </div>

              <p className={styles.cardNote}>
                Comfortable conditions with intermittent cloud cover.
              </p>
            </article>

            <article className={`${styles.metricCard} ${styles.card}`}>
              <span className={styles.metricIcon}>≈</span>
              <span className={styles.cardLabel}>FEELS LIKE</span>
              <strong>{formatTemperature(23)}</strong>
              <small>Near ambient</small>
            </article>

            <article className={`${styles.metricCard} ${styles.card}`}>
              <span className={styles.metricIcon}>◌</span>
              <span className={styles.cardLabel}>HUMIDITY</span>
              <strong>62%</strong>
              <small>Moderate</small>
            </article>

            <article className={`${styles.metricCard} ${styles.card}`}>
              <span className={styles.metricIcon}>↗</span>
              <span className={styles.cardLabel}>WIND</span>
              <strong>14 km/h</strong>
              <small>SE · Gentle</small>
            </article>

            <article className={`${styles.metricCard} ${styles.card}`}>
              <span className={styles.metricIcon}>◎</span>
              <span className={styles.cardLabel}>VISIBILITY</span>
              <strong>10 km</strong>
              <small>Good</small>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.forecastSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>FORECAST MATRIX</span>
              <h2>Upcoming conditions</h2>
            </div>

            <span className={styles.liveIndicator}>
              <span />
              LIVE MODEL
            </span>
          </div>

          <div className={styles.forecastGrid}>
            {forecast.map((item) => (
              <article
                key={`${item.day}-${item.date}`}
                className={`${styles.forecastCard} ${
                  item.day === "TODAY" ? styles.forecastActive : ""
                }`}
              >
                <div className={styles.forecastTop}>
                  <strong>{item.day}</strong>
                  <span>{item.date}</span>
                </div>

                <div className={styles.forecastIcon}>
                  {item.rain > 50 ? "☂" : item.high > 25 ? "☼" : "◒"}
                </div>

                <div className={styles.forecastCondition}>
                  {item.condition}
                </div>

                <div className={styles.forecastTemps}>
                  <strong>{formatTemperature(item.high)}</strong>
                  <span>{formatTemperature(item.low)}</span>
                </div>

                <div className={styles.rainMeta}>
                  <span>RAIN</span>
                  <strong>{item.rain}%</strong>
                </div>

                <div className={styles.rainBar}>
                  <span style={{ width: `${item.rain}%` }} />
                </div>
              </article>
            ))}
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
            <article className={`${styles.insightCard} ${styles.card}`}>
              <span className={styles.insightNumber}>01</span>

              <div>
                <span className={styles.cardLabel}>TEMPERATURE TREND</span>

                <h3>Stable with a mild rise.</h3>

                <p>
                  Temperatures remain relatively consistent before a warmer
                  weekend pattern develops.
                </p>
              </div>

              <div className={styles.miniChart}>
                <span style={{ height: "42%" }} />
                <span style={{ height: "54%" }} />
                <span style={{ height: "48%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "74%" }} />
                <span style={{ height: "88%" }} />
              </div>
            </article>

            <article className={`${styles.insightCard} ${styles.card}`}>
              <span className={styles.insightNumber}>02</span>

              <div>
                <span className={styles.cardLabel}>PRECIPITATION</span>

                <h3>Rain probability increases Friday.</h3>

                <p>
                  The strongest precipitation signal in the current forecast
                  window is concentrated toward Friday.
                </p>
              </div>

              <div className={styles.precipSignal}>
                <strong>61%</strong>
                <span>PEAK PROBABILITY</span>
              </div>
            </article>

            <article className={`${styles.insightCard} ${styles.card}`}>
              <span className={styles.insightNumber}>03</span>

              <div>
                <span className={styles.cardLabel}>WIND ANALYSIS</span>

                <h3>Gentle south-easterly flow.</h3>

                <p>
                  Wind remains moderate, producing limited atmospheric
                  disruption across the current observation period.
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
        </div>
      </section>

      <section className={styles.contextSection}>
        <div className={styles.shell}>
          <div className={styles.contextCard}>
            <div>
              <span className={styles.sectionLabel}>GEOGRAPHIC CONTEXT</span>

              <h2>Weather is spatial.</h2>

              <p>
                Atmospheric conditions change across geography. Future
                iterations of this system will connect weather intelligence
                with spatial analysis and geographic data.
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

            <span>WEATHER INTELLIGENCE · XYZ TECH</span>

            <Link href="/portfolio">RETURN TO PORTFOLIO →</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}