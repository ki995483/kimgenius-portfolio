"use client";

import { useMemo, useState } from "react";
import styles from "./data-intelligence.module.css";

type DatasetRow = {
  region: string;
  population: number;
  rainfall: number;
  temperature: number;
  development: number;
};

const dataset: DatasetRow[] = [
  {
    region: "Central",
    population: 4200000,
    rainfall: 1180,
    temperature: 19.4,
    development: 78,
  },
  {
    region: "Coast",
    population: 3900000,
    rainfall: 1040,
    temperature: 27.1,
    development: 64,
  },
  {
    region: "Eastern",
    population: 6100000,
    rainfall: 760,
    temperature: 24.8,
    development: 57,
  },
  {
    region: "Nairobi",
    population: 4800000,
    rainfall: 920,
    temperature: 18.9,
    development: 91,
  },
  {
    region: "Western",
    population: 5800000,
    rainfall: 1460,
    temperature: 21.7,
    development: 61,
  },
];

export default function DataIntelligencePage() {
  const [activeMetric, setActiveMetric] = useState<
    "population" | "rainfall" | "temperature" | "development"
  >("development");

  const statistics = useMemo(() => {
    const values = dataset.map((row) => row[activeMetric]);

    const total = values.reduce((sum, value) => sum + value, 0);
    const average = total / values.length;
    const maximum = Math.max(...values);
    const minimum = Math.min(...values);

    return {
      average,
      maximum,
      minimum,
    };
  }, [activeMetric]);

  const formatMetric = (value: number) => {
    if (activeMetric === "population") {
      return `${(value / 1000000).toFixed(1)}M`;
    }

    if (activeMetric === "temperature") {
      return `${value.toFixed(1)}°`;
    }

    return value.toFixed(0);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.brand}>
            <span className={styles.brandMark}>XYZ</span>
            <span>DATA INTELLIGENCE</span>
          </a>

          <span className={styles.status}>
            <span className={styles.statusDot} />
            SYSTEM ONLINE
          </span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <p className={styles.eyebrow}>
            PROJECT 04 / DATA INTELLIGENCE LABORATORY
          </p>

          <h1>
            Data
            <span> → Intelligence</span>
          </h1>

          <p className={styles.heroText}>
            A data analytics laboratory for transforming raw
            information into measurable patterns, visual insight
            and eventually machine-learning intelligence.
          </p>

          <div className={styles.pipeline}>
            <span>DATA</span>
            <i>→</i>
            <span>ANALYTICS</span>
            <i>→</i>
            <span>STATISTICS</span>
            <i>→</i>
            <span>ML</span>
            <i>→</i>
            <span>PREDICTION</span>
          </div>
        </div>
      </section>

      <section className={styles.analytics}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel}>
                01 — ANALYTICS ENGINE
              </p>

              <h2>Explore the dataset.</h2>
            </div>

            <p>
              This first engine establishes the foundation:
              structured data, metrics, comparisons and
              statistical summaries.
            </p>
          </div>

          <div className={styles.metricGrid}>
            <article className={styles.metricCard}>
              <span>AVERAGE</span>
              <strong>
                {formatMetric(statistics.average)}
              </strong>
            </article>

            <article className={styles.metricCard}>
              <span>MAXIMUM</span>
              <strong>
                {formatMetric(statistics.maximum)}
              </strong>
            </article>

            <article className={styles.metricCard}>
              <span>MINIMUM</span>
              <strong>
                {formatMetric(statistics.minimum)}
              </strong>
            </article>

            <article className={styles.metricCard}>
              <span>OBSERVATIONS</span>
              <strong>{dataset.length}</strong>
            </article>
          </div>

          <div className={styles.controlBar}>
            <span>ANALYZE:</span>

            <div className={styles.controls}>
              <button
                type="button"
                className={
                  activeMetric === "development"
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setActiveMetric("development")
                }
              >
                DEVELOPMENT
              </button>

              <button
                type="button"
                className={
                  activeMetric === "population"
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setActiveMetric("population")
                }
              >
                POPULATION
              </button>

              <button
                type="button"
                className={
                  activeMetric === "rainfall"
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setActiveMetric("rainfall")
                }
              >
                RAINFALL
              </button>

              <button
                type="button"
                className={
                  activeMetric === "temperature"
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setActiveMetric("temperature")
                }
              >
                TEMPERATURE
              </button>
            </div>
          </div>

          <div className={styles.tableCard}>
            <div className={styles.tableHeader}>
              <span>REGION</span>
              <span>POPULATION</span>
              <span>RAINFALL</span>
              <span>TEMP.</span>
              <span>INDEX</span>
            </div>

            {dataset.map((row) => (
              <div
                className={styles.tableRow}
                key={row.region}
              >
                <strong>{row.region}</strong>

                <span>
                  {(row.population / 1000000).toFixed(1)}M
                </span>

                <span>{row.rainfall} mm</span>

                <span>{row.temperature}°C</span>

                <span className={styles.index}>
                  {row.development}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.future}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>
            02 — INTELLIGENCE ROADMAP
          </p>

          <div className={styles.roadmap}>
            <article className={styles.roadmapCard}>
              <span>01</span>
              <h3>Data Cleaning</h3>
              <p>
                Missing values, duplicates, inconsistent
                formats and reliable data preparation.
              </p>
            </article>

            <article className={styles.roadmapCard}>
              <span>02</span>
              <h3>Exploratory Analysis</h3>
              <p>
                Distributions, correlations, trends,
                outliers and relationships.
              </p>
            </article>

            <article className={styles.roadmapCard}>
              <span>03</span>
              <h3>Machine Learning</h3>
              <p>
                Classification, regression, clustering
                and predictive modelling.
              </p>
            </article>

            <article className={styles.roadmapCard}>
              <span>04</span>
              <h3>Prediction</h3>
              <p>
                Convert learned patterns into useful
                forecasts and intelligent decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>
            © 2026 KIMGENIUS • XYZ DATA INTELLIGENCE
          </span>

          <a href="/">XYZ HOME ↑</a>
        </div>
      </footer>
    </main>
  );
}