import Link from "next/link";
import { kimgeniusSystems } from "@/lib/system-catalog";
import KGLuxuryEngine from "./KGLuxuryEngine";
import styles from "./systems.module.css";

const statusClasses = {
  ONLINE: styles.online,
  BUILDING: styles.building,
  RESEARCH: styles.research,
  PLANNED: styles.planned,
} as const;

export default function SystemsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            ← KIMGENIUS
          </Link>

          <p className={styles.eyebrow}>
            KIMGENIUS SYSTEM REGISTRY
          </p>

          <h1 className={styles.title}>SYSTEMS</h1>

          <p className={styles.intro}>
            A living registry of systems, engines, experiments,
            and intelligence layers built inside the KIMGENIUS
            architecture.
          </p>
        </header>

        <section className={styles.systemGrid}>
          {kimgeniusSystems.map((system) => (
            <article
              key={system.id}
              className={`${styles.card} ${
                system.id === "kg-luxury"
                  ? styles.luxuryCard
                  : ""
              }`}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {system.number}
                </span>

                <span
                  className={`${styles.status} ${
                    statusClasses[system.status]
                  }`}
                >
                  <span className={styles.statusDot} />
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

              {system.id === "kg-luxury" && (
                <KGLuxuryEngine />
              )}

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
                  <span>
                    {system.id === "kg-luxury"
                      ? "OPEN KG LUXURY SYSTEM"
                      : "OPEN SYSTEM"}
                  </span>

                  <span>→</span>
                </Link>
              ) : (
                <div className={styles.actionDisabled}>
                  <span>SYSTEM PLANNED</span>
                </div>
              )}
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <span>KIMGENIUS / SYSTEM ARCHITECTURE</span>
          <span>
            SYSTEM → INPUT → ENGINE → OUTPUT → CAPABILITY
          </span>
        </footer>
      </div>
    </main>
  );
}
