import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystemById, kimgeniusSystems } from "@/lib/system-catalog";
import styles from "./system.module.css";

type SystemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return kimgeniusSystems.map((system) => ({
    id: system.id,
  }));
}

export default async function SystemPage({
  params,
}: SystemPageProps) {
  const { id } = await params;
  const system = getSystemById(id);

  if (!system) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/systems" className={styles.back}>
            ← SYSTEM REGISTRY
          </Link>

          <div className={styles.meta}>
            <span>{system.number}</span>

            <span className={styles.status}>
              <span className={styles.statusDot} />
              {system.status}
            </span>
          </div>

          <p className={styles.category}>
            {system.category}
          </p>

          <h1>{system.name}</h1>

          <p className={styles.description}>
            {system.description}
          </p>
        </header>

        <section className={styles.flow}>
          <article className={styles.flowStage}>
            <div className={styles.stageHeader}>
              <span>01</span>
              <h2>INPUT</h2>
            </div>

            <p>
              Information entering the system.
            </p>

            <ul>
              {system.input.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className={styles.connector} aria-hidden="true">
            ↓
          </div>

          <article className={styles.flowStage}>
            <div className={styles.stageHeader}>
              <span>02</span>
              <h2>ENGINE</h2>
            </div>

            <p>
              The intelligence layer transforming
              input into useful computation.
            </p>

            <ul>
              {system.engine.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className={styles.connector} aria-hidden="true">
            ↓
          </div>

          <article className={styles.flowStage}>
            <div className={styles.stageHeader}>
              <span>03</span>
              <h2>OUTPUT</h2>
            </div>

            <p>
              The information and intelligence
              produced by the system.
            </p>

            <ul>
              {system.output.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className={styles.capabilitySection}>
          <div>
            <p className={styles.sectionLabel}>
              SYSTEM CAPABILITIES
            </p>

            <h2>
              WHAT THIS SYSTEM
              <br />
              CAN DO.
            </h2>
          </div>

          <div className={styles.capabilityGrid}>
            {system.capabilities.map((capability) => (
              <div
                key={capability}
                className={styles.capability}
              >
                <span>→</span>
                {capability}
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <Link href="/systems">
            ← ALL SYSTEMS
          </Link>

          <span>
            KIMGENIUS / XYZ
          </span>
        </footer>
      </div>
    </main>
  );
}