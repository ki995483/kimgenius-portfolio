import Link from "next/link";
import styles from "./ai.module.css";

export default function AILaboratoryPage() {
  return (
    <main className={styles.aiPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>XYZ / KIMGENIUS — SYSTEM 05</p>

          <h1 className={styles.title}>AI / UX-UI LABORATORY</h1>

          <p className={styles.intro}>
            An experimental intelligence system for interfaces, prompt
            systems, workflows, and future AI products.
          </p>
        </header>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <p className={styles.panelLabel}>LAB STATUS</p>
            <h2 className={styles.panelTitle}>FOUNDATION ONLINE</h2>
            <p className={styles.panelText}>
              The laboratory is being built as the intelligence layer of the
              XYZ system.
            </p>
          </article>

          <article className={styles.panel}>
            <p className={styles.panelLabel}>CURRENT PHASE</p>
            <h2 className={styles.panelTitle}>INTERFACE INTELLIGENCE</h2>
            <p className={styles.panelText}>
              Research begins with intelligent interfaces, structured
              workflows, and human-centered interaction systems.
            </p>
          </article>
        </section>

        <section className={styles.systems}>
          <h2 className={styles.sectionTitle}>ACTIVE SYSTEMS</h2>

          <ul className={styles.systemList}>
            <li className={styles.systemItem}>Interface experiments</li>
            <li className={styles.systemItem}>Prompt systems</li>
            <li className={styles.systemItem}>Intelligence workflows</li>
            <li className={styles.systemItem}>UX / UI research</li>
            <li className={styles.systemItem}>Future AI engine</li>
          </ul>
        </section>

        <nav className={styles.nav} aria-label="XYZ systems">
          <Link href="/">XYZ CORE</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/weather">WEATHER</Link>
          <Link href="/data-intelligence">DATA INTELLIGENCE</Link>
        </nav>
      </div>
    </main>
  );
}