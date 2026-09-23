"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./portfolio.module.css";

const projects = [
  {
    number: "01",
    type: "LIVE SYSTEM",
    title: "Weather Intelligence",
    description:
      "A real-time weather intelligence interface built around live environmental data, clear information hierarchy and responsive system output.",
    tags: ["Weather API", "Real-Time Data", "Responsive UI"],
    href: "/weather",
  },
  {
    number: "02",
    type: "RESEARCH SYSTEM",
    title: "AI / UX-UI Laboratory",
    description:
      "An experimental environment for intelligent workflows, AI interaction design, automation concepts and human-centred digital experiences.",
    tags: ["AI", "UX / UI", "Automation"],
    href: "/ai",
  },
  {
    number: "03",
    type: "SYSTEM IN BUILD",
    title: "Spatial Intelligence",
    description:
      "A geospatial intelligence layer for transforming geographic information, mapping workflows and spatial analysis into useful digital outputs.",
    tags: ["GIS", "Spatial Analysis", "Mapping"],
    href: "/spatial-intelligence",
  },
  {
    number: "04",
    type: "SYSTEM IN BUILD",
    title: "Data Intelligence",
    description:
      "A data-focused system for turning structured information into understandable insights, visual outputs and decision-support experiences.",
    tags: ["Data", "Analysis", "Visualization"],
    href: "/data-intelligence",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Spatial Intelligence",
    text: "Geospatial thinking, GIS, mapping, remote sensing and spatial analysis.",
  },
  {
    number: "02",
    title: "AI & Automation",
    text: "Intelligent workflows, prompt systems, experimentation and automation.",
  },
  {
    number: "03",
    title: "Web Systems",
    text: "Responsive interfaces, modern web architecture and deployed digital systems.",
  },
];

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  const pageStyle = {
    "--page-width": "1180px",
  } as CSSProperties;

  return (
    <main
      className={`${styles.page} ${
        darkMode ? styles.dark : styles.light
      }`}
      style={pageStyle}
    >
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.atmosphereGlow} />
        <div className={styles.atmosphereGrid} />
        <div className={styles.atmosphereOrb} />
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <Link href="/" className={styles.brand} aria-label="XYZ home">
            <span className={styles.brandMark}>
              <Image
                src="/XYZ_Official_Icon.png"
                alt="XYZ"
                width={40}
                height={40}
                priority
              />
            </span>

            <span className={styles.brandName}>XYZ</span>
            <span className={styles.brandDivider}>/</span>
            <span className={styles.brandSub}>TECH</span>
          </Link>

          <nav className={styles.nav} aria-label="Portfolio navigation">
            <a href="#about">About</a>
            <a href="#capability">Capability</a>
            <a href="#projects">Projects</a>
            <a href="#intel">Intel Corner</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setDarkMode((value) => !value)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <span>{darkMode ? "☼" : "☾"}</span>
          </button>
        </div>
      </header>

      <section className={styles.hero} id="about">
        <div className={styles.shell}>
          <div className={styles.heroInner}>
            <div className={styles.heroEyebrow}>
              <span className={styles.statusDot} />
              KIMGENIUS / DIGITAL INTELLIGENCE
            </div>

            <div className={styles.heroTitleWrap}>
              <div className={styles.heroBeam} aria-hidden="true">
                <span className={styles.beamGlow} />
                <span className={styles.beamCore} />
                <span className={styles.beamFlash} />
              </div>

              <h1 className={styles.heroTitle}>KIMGENIUS</h1>
            </div>

            <p className={styles.heroStatement}>
              I BUILD SYSTEMS
              <span>THAT THINK.</span>
            </p>

            <p className={styles.heroIntro}>
              I design intelligent digital systems across{" "}
              <strong>spatial intelligence, artificial intelligence,
              automation and the web</strong> — turning complex ideas into
              clear, useful experiences.
            </p>

            <div className={styles.heroSignal}>
              <span>SPATIAL</span>
              <i />
              <span>AI</span>
              <i />
              <span>SYSTEMS</span>
              <i />
              <span>INTELLIGENCE</span>
            </div>

            <div className={styles.actions}>
              <a
                href="#projects"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                Explore Project Systems
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="capability">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>01 — CAPABILITY</span>
              <h2>THINK IN SYSTEMS.</h2>
            </div>

            <p>
              The work sits at the intersection of technology, spatial
              reasoning, intelligence and interface design.
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <article className={styles.glassCard} key={item.number}>
                <div className={styles.cardTop}>
                  <span>{item.number}</span>
                  <span className={styles.cardArrow}>↗</span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className={styles.cardLine} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>02 — PROJECT SYSTEMS</span>
              <h2>I BUILD SYSTEMS.</h2>
            </div>

            <p>
              Each project is treated as a system with an input, engine,
              intelligence layer and useful output.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.number}>
                <div className={styles.projectTop}>
                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <span className={styles.projectType}>
                    {project.type}
                  </span>
                </div>

                <div className={styles.projectBody}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.href}
                  className={styles.projectLink}
                >
                  Open System
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="intel">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>03 — INTEL CORNER</span>
              <h2>PRIVATE INTELLIGENCE.</h2>
            </div>

            <p>
              Some systems are intentionally outside public discovery.
            </p>
          </div>

          <article className={styles.cashflowCard}>
            <div className={styles.cashflowOrb} aria-hidden="true" />

            <div className={styles.cashflowHeader}>
              <div>
                <span className={styles.privateNumber}>06</span>
                <span className={styles.privateLabel}>
                  PRIVATE PLATFORM SERVICE
                </span>
              </div>

              <span className={styles.restricted}>
                RESTRICTED
              </span>
            </div>

            <div className={styles.cashflowMain}>
              <div>
                <span className={styles.cashflowCategory}>
                  FINANCIAL INTELLIGENCE
                </span>

                <h3>KIMGENIUS CashFlow</h3>

                <p>
                  A private financial intelligence platform designed for
                  understanding cash movement, revenue, expenses,
                  transactions, business analysis and future financial
                  workflows.
                </p>
              </div>

              <div className={styles.lockPanel}>
                <div className={styles.lockIcon}>◈</div>
                <span>PRIVATE ACCESS</span>
                <small>AUTHORIZATION REQUIRED</small>

                <button
                  type="button"
                  className={styles.encryptedButton}
                  disabled
                >
                  ENCRYPTED
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contactSection}`} id="contact">
        <div className={styles.shell}>
          <div className={styles.contactCard}>
            <span className={styles.sectionLabel}>04 — CONNECT</span>

            <h2>
              BUILD SOMETHING
              <span>INTELLIGENT.</span>
            </h2>

            <p>
              Have an idea, system or digital problem worth building around?
              Let&apos;s start the conversation.
            </p>

            <div className={styles.contactActions}>
              <a
                href="mailto:hello@kimgenius.xyz"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                hello@kimgenius.xyz
                <span>↗</span>
              </a>

              <Link
                href="/systems"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                System Registry
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <span>© 2026 KIMGENIUS • XYZ TECH</span>

          <Link href="/" className={styles.footerLink}>
            XYZ
          </Link>
        </div>
      </footer>
    </main>
  );
}