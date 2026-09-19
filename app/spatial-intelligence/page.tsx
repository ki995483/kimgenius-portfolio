import Link from "next/link";
import styles from "./spatial-intelligence.module.css";

export default function SpatialIntelligencePage() {
  return (
    <main className={styles.spatialPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            XYZ / KIMGENIUS — SYSTEM 06
          </p>

          <h1 className={styles.title}>
            SPATIAL
            <br />
            INTELLIGENCE
          </h1>

          <p className={styles.intro}>
            A geospatial intelligence system for mapping, spatial analysis,
            remote sensing, cartography, and the deeper relationship between
            data and place.
          </p>
        </header>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <p className={styles.panelLabel}>SYSTEM STATUS</p>
            <h2 className={styles.panelTitle}>FOUNDATION ONLINE</h2>
            <p className={styles.panelText}>
              The spatial intelligence layer is being established as part of
              the broader XYZ research and technology system.
            </p>
          </article>

          <article className={styles.panel}>
            <p className={styles.panelLabel}>CURRENT FOCUS</p>
            <h2 className={styles.panelTitle}>GEOSPATIAL SYSTEMS</h2>
            <p className={styles.panelText}>
              Research begins with geographic information systems, digital
              mapping, spatial reasoning, remote sensing, and analytical
              visualization.
            </p>
          </article>
        </section>

        <section className={styles.systems}>
          <p className={styles.sectionLabel}>ACTIVE DOMAINS</p>

          <div className={styles.systemGrid}>
            <article className={styles.systemCard}>
              <span>01</span>
              <h2>GIS</h2>
              <p>Geographic information systems and spatial databases.</p>
            </article>

            <article className={styles.systemCard}>
              <span>02</span>
              <h2>MAPPING</h2>
              <p>Digital cartography, geographic visualization, and map design.</p>
            </article>

            <article className={styles.systemCard}>
              <span>03</span>
              <h2>SPATIAL ANALYSIS</h2>
              <p>Location-based analysis, patterns, relationships, and models.</p>
            </article>

            <article className={styles.systemCard}>
              <span>04</span>
              <h2>REMOTE SENSING</h2>
              <p>Earth observation, satellite imagery, and environmental intelligence.</p>
            </article>

            <article className={styles.systemCard}>
              <span>05</span>
              <h2>CARTOGRAPHY</h2>
              <p>Spatial communication through structured geographic information.</p>
            </article>

            <article className={styles.systemCard}>
              <span>06</span>
              <h2>SPATIAL AI</h2>
              <p>Future integration of intelligent systems with geographic data.</p>
            </article>
          </div>
        </section>

        <section className={styles.research}>
          <p className={styles.sectionLabel}>RESEARCH DIRECTION</p>

          <div className={styles.researchLine}>
            <span>LOCATION</span>
            <span>→</span>
            <span>DATA</span>
            <span>→</span>
            <span>ANALYSIS</span>
            <span>→</span>
            <span>INTELLIGENCE</span>
          </div>
        </section>

        <nav className={styles.nav} aria-label="XYZ systems">
          <Link href="/">XYZ CORE</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/weather">WEATHER</Link>
          <Link href="/ai">AI LAB</Link>
          <Link href="/data-intelligence">DATA INTELLIGENCE</Link>
        </nav>
      </div>
    </main>
  );
}