import Link from "next/link";
import { kimgeniusSystems } from "@/lib/system-catalog";
import styles from "./systems.module.css";

export default function SystemsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            ← XYZ CORE
          </Link>

          <p className={styles.eyebrow}>
            KIMGENIUS / SYSTEM REGISTRY
          </p>

          <h1 className={styles.title}>
            INTELLIGENCE
            <br />
            IN MOTION.
          </h1>

          <p className={styles.intro}>
            A connected registry of KIMGENIUS systems, products,
            engines, productions, and future intelligence infrastructure.
          </p>
        </header>

        <section className={styles.systemGrid}>
          {kimgeniusSystems.map((system) => (
            <article
              key={system.id}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {system.number}
                </span>

                <span
                  className={`${styles.status} ${
                    styles[system.status.toLowerCase()]
                  }`}
                >
                  <span
                    className={styles.statusDot}
                    aria-hidden="true"
                  />

                  {system.status}
                </span>
              </div>

              <div className={styles.cardHeading}>
                <p className={styles.category}>
                  {system.category}
                </p>

                <h2>{system.name}</h2>

                <p className={styles.description}>
                  {system.description}
                </p>
              </div>

              <div className={styles.flow}>
                <div className={styles.flowBlock}>
                  <span>INPUT</span>

                  <ul>
                    {system.input.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.flowArrow}>↓</div>

                <div className={styles.flowBlock}>
                  <span>ENGINE</span>

                  <ul>
                    {system.engine.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.flowArrow}>↓</div>

                <div className={styles.flowBlock}>
                  <span>OUTPUT</span>

                  <ul>
                    {system.output.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.capabilities}>
                {system.capabilities.map((capability) => (
                  <span key={capability}>
                    {capability}
                  </span>
                ))}
              </div>

              {system.href ? (
                <Link
                  href={system.href}
                  className={styles.action}
                >
                  OPEN SYSTEM <span>↗</span>
                </Link>
              ) : (
                <span className={styles.actionDisabled}>
                  SYSTEM IN DEVELOPMENT
                </span>
              )}
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <span>KIMGENIUS / XYZ</span>
          <span>INPUT → INTELLIGENCE → OUTPUT</span>
        </footer>
      </div>
    </main>
  );
}