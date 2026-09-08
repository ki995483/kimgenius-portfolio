"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${styles.page} ${darkMode ? styles.dark : styles.light}`}>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="XYZ Tech home"
          >
            <span className={styles.brandMark}>
              <img
                src="/icon.png"
                alt="XYZ"
                className={styles.brandIcon}
              />
            </span>

            <strong>TECH</strong>
          </Link>

          <nav className={styles.nav} aria-label="Portfolio navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setDarkMode((current) => !current)}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={darkMode}
          >
            <span>
              {darkMode ? "☾" : "☀"}
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero} id="about">
        <div className={styles.shell}>
          <p className={styles.kicker}>KIMGENIUS / XYZ TECH</p>

          <h1 className={styles.heroTitle}>
            <span>Hi, I'm</span>
            <strong>KIMGENIUS</strong>
            <em>I BUILD. I SOLVE. I INNOVATE.</em>
          </h1>

          <p className={styles.heroText}>
            <strong>A forward-thinking Technologist.</strong>{" "}
            A Technologist polymath; a Spatial Intelligence connoisseur;
            an AI Automation savant; and a Web Systems pundit.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.button}>
              Explore Work
            </a>

            <a
              href="#contact"
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY DOMAINS
          ===================================================== */}

      <section className={styles.section} id="skills">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            01 — TECHNOLOGY DOMAINS
          </p>

          <div className={styles.domainGrid}>
            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>01</span>
              <h2>Artificial Intelligence</h2>
              <p>
                AI-assisted workflows, Prompt Engineering, AI research,
                automation concepts and intelligent digital systems.
              </p>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>02</span>
              <h2>Spatial Intelligence</h2>
              <p>
                GIS, ArcGIS, QGIS, digital mapping, spatial analysis,
                cartography, environmental research and remote sensing
                fundamentals.
              </p>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>03</span>
              <h2>Web Systems</h2>
              <p>
                HTML, CSS, JavaScript, Git, GitHub, responsive web
                development, Vercel deployment and Cloudflare DNS.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS — KIMGENIUS PROJECT ENGINE
          ===================================================== */}

      <section className={styles.projectsSection} id="projects">
        <div className={styles.shell}>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>
                KIMGENIUS PROJECT SYSTEM
              </p>

              <h2>Projects</h2>

              <p className={styles.sectionIntro}>
                Intelligent digital systems built through progressive
                experimentation, engineering and continuous refinement.
              </p>
            </div>
          </div>

          <div className={styles.projectGrid}>

            {/* PROJECT 01 */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 01
                </span>

                <span className={styles.projectSignal}>
                  <span className={styles.signalDot} />
                  LIVE SYSTEM
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div>
                  <h3>Weather Dashboard</h3>

                  <p className={styles.projectDescription}>
                    Real-time weather intelligence interface connecting
                    weather data, API systems and responsive user
                    experience.
                  </p>
                </div>

                <div
                  className={styles.projectMark}
                  aria-hidden="true"
                >
                  ∞
                </div>
              </div>

              <div className={styles.progressBlock}>
                <div className={styles.progressMeta}>
                  <span>BUILD PROGRESS</span>
                  <span>72%</span>
                </div>

                <div
                  className={styles.progressTrack}
                  aria-label="Weather Dashboard build progress: 72%"
                >
                  <span className={styles.progressFill} />
                  <span className={styles.progressGrid} />
                </div>

                <div className={styles.progressStatus}>
                  <span>BUILDING</span>
                  <span>
                    WEATHER API • JAVASCRIPT • UI
                  </span>
                </div>
              </div>

              <div className={styles.techCore}>
                <span>WEATHER API</span>
                <span>JAVASCRIPT</span>
                <span>RESPONSIVE UI</span>
                <span>REAL-TIME DATA</span>
              </div>

              <div className={styles.projectActions}>
                <a
                  href="#"
                  className={styles.primaryAction}
                  aria-label="Open Weather Dashboard live demo"
                >
                  <span>[</span> LIVE DEMO <span>]</span>
                </a>

                <a
                  href="#"
                  className={styles.secondaryAction}
                  aria-label="Open Weather Dashboard source code"
                >
                  <span>[</span> SOURCE <span>]</span>
                </a>
              </div>
            </article>

            {/* PROJECT 02 */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 02
                </span>

                <span className={styles.projectSignal}>
                  <span className={styles.signalDot} />
                  IN DEVELOPMENT
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div>
                  <h3>AI Learning Laboratory</h3>

                  <p className={styles.projectDescription}>
                    An experimental environment for Artificial
                    Intelligence, Prompt Engineering, automation
                    concepts and intelligent workflows.
                  </p>
                </div>

                <div
                  className={styles.projectMark}
                  aria-hidden="true"
                >
                  AI
                </div>
              </div>

              <div className={styles.progressBlock}>
                <div className={styles.progressMeta}>
                  <span>BUILD PROGRESS</span>
                  <span>ACTIVE</span>
                </div>

                <div
                  className={styles.progressTrack}
                  aria-label="AI Learning Laboratory active development"
                >
                  <span
                    className={styles.progressFill}
                    style={{ width: "48%" }}
                  />
                  <span className={styles.progressGrid} />
                </div>

                <div className={styles.progressStatus}>
                  <span>EXPERIMENTING</span>
                  <span>
                    AI • PROMPT ENGINEERING • AUTOMATION
                  </span>
                </div>
              </div>

              <div className={styles.techCore}>
                <span>ARTIFICIAL INTELLIGENCE</span>
                <span>PROMPT ENGINEERING</span>
                <span>AUTOMATION</span>
                <span>RESEARCH</span>
              </div>
            </article>

            {/* PROJECT 03 */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 03
                </span>

                <span className={styles.projectSignal}>
                  <span className={styles.signalDot} />
                  BUILDING
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div>
                  <h3>Spatial Intelligence Systems</h3>

                  <p className={styles.projectDescription}>
                    Practical geospatial systems exploring GIS,
                    digital mapping, spatial analysis, environmental
                    interpretation and remote sensing.
                  </p>
                </div>

                <div
                  className={styles.projectMark}
                  aria-hidden="true"
                >
                  GIS
                </div>
              </div>

              <div className={styles.progressBlock}>
                <div className={styles.progressMeta}>
                  <span>BUILD PROGRESS</span>
                  <span>ACTIVE</span>
                </div>

                <div
                  className={styles.progressTrack}
                  aria-label="Spatial Intelligence Systems active development"
                >
                  <span
                    className={styles.progressFill}
                    style={{ width: "36%" }}
                  />
                  <span className={styles.progressGrid} />
                </div>

                <div className={styles.progressStatus}>
                  <span>BUILDING</span>
                  <span>
                    GIS • QGIS • ARCGIS • REMOTE SENSING
                  </span>
                </div>
              </div>

              <div className={styles.techCore}>
                <span>GIS</span>
                <span>QGIS</span>
                <span>ARCGIS</span>
                <span>REMOTE SENSING</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section className={styles.section}>
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            03 — EDUCATION
          </p>

          <h2 className={styles.educationTitle}>
            Kibabii University
          </h2>

          <p className={styles.educationDegree}>
            Bachelor of Education (Arts)
          </p>

          <p className={styles.educationDetail}>
            Geography &amp; Kiswahili
          </p>

          <p className={styles.educationDetail}>
            Graduation: 2027
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section className={styles.section} id="contact">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            04 — CONNECT
          </p>

          <h2 className={styles.contactTitle}>
            Build something intelligent.
          </h2>

          <p className={styles.contactText}>
            For professional, research, technology and collaboration
            enquiries.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:hello@kimgenius.xyz">
              hello@kimgenius.xyz
            </a>

            <a href="tel:+254791896869">
              +254 791 896869
            </a>

            <a
              href="https://github.com/ki995483"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.kimgenius.xyz"
              target="_blank"
              rel="noreferrer"
            >
              kimgenius.xyz
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>
            © 2026 KIMGENIUS • XYZ TECH
          </span>

          <a href="#about">
            Back to the Top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}