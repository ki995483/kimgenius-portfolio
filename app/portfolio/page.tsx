"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${styles.page} ${darkMode ? styles.dark : styles.light}`}>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className={styles.header}>
        <div className={styles.shell}>
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
                  width={36}
                  height={36}
                />
              </span>

              <strong>TECH</strong>
            </Link>

            <nav className={styles.nav} aria-label="Portfolio navigation">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
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
              <span aria-hidden="true">
                {darkMode ? "☾" : "☀"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className={styles.hero}
        id="about"
        aria-labelledby="hero-title"
      >
        <div className={styles.heroBeam} aria-hidden="true">
          <span className={styles.beamCore} />
          <span className={styles.beamGlow} />
          <span className={styles.beamFlash} />
        </div>

        <div className={styles.heroOrb} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="hero-title">
              <span className={styles.heroGreeting}>
                Hi, I&apos;m
              </span>

              <strong className={styles.heroName}>
                KIMGENIUS
              </strong>

              <em className={styles.heroStatement}>
                I BUILD. I SOLVE. I INNOVATE.
              </em>
            </h1>

            <div className={styles.heroText}>
              <strong className={styles.heroLead}>
                A forward-thinking technologist:
              </strong>

              <p className={styles.heroDescription}>
                A Technologist polymath; a Spatial Intelligence
                connoisseur; an AI Automation savant; and a Web
                Systems builder focused on intelligent digital
                experiences.
              </p>
            </div>

            <div className={styles.actions}>
              <a href="#projects" className={styles.button}>
                Explore Work
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

      {/* =====================================================
          TECHNOLOGY DOMAINS
          ===================================================== */}

      <section
        className={styles.section}
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            01 — TECHNOLOGY DOMAINS
          </p>

          <div className={styles.domainGrid}>
            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>01</span>

              <h2 id="skills-title">
                Artificial Intelligence
              </h2>

              <p>
                AI-assisted workflows, prompt engineering,
                intelligent automation concepts, research
                systems and emerging AI interfaces.
              </p>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>02</span>

              <h2>Spatial Intelligence</h2>

              <p>
                GIS, ArcGIS, QGIS, digital mapping,
                spatial analysis, cartography, environmental
                interpretation and remote sensing fundamentals.
              </p>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>03</span>

              <h2>Web Systems</h2>

              <p>
                HTML, CSS, JavaScript, React, Next.js,
                Git, GitHub, responsive interfaces,
                Vercel deployment and Cloudflare infrastructure.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT SYSTEM
          ===================================================== */}

      <section
        className={styles.projectsSection}
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>
                KIMGENIUS PROJECT SYSTEM
              </p>
            </div>

            <div>
              <h2 id="projects-title">Projects</h2>

              <p className={styles.sectionIntro}>
                Intelligent digital systems built through
                experimentation, engineering and continuous
                refinement.
              </p>
            </div>
          </div>

          <div className={styles.projectGrid}>
            {/* =================================================
                PROJECT 01 — WEATHER
                ================================================= */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 01
                </span>

                <span className={styles.projectSignal}>
                  <span
                    className={styles.signalDot}
                    aria-hidden="true"
                  />
                  SYSTEM IN BUILD
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div className={styles.projectCopy}>
                  <h3>Weather Intelligence</h3>

                  <p className={styles.projectDescription}>
                    A weather intelligence interface designed
                    around live environmental data, location
                    search, forecasting, analytical views and
                    conversational exploration.
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
                  aria-label="Weather Intelligence build progress: 72 percent"
                >
                  <span
                    className={styles.progressFill}
                    style={
                      {
                        "--progress": "72%",
                      } as CSSProperties
                    }
                  />

                  <span
                    className={styles.progressGrid}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.progressStatus}>
                  <span>BUILDING</span>

                  <span>
                    WEATHER API • SEARCH • ANALYTICS • UI
                  </span>
                </div>
              </div>

              <div className={styles.techCore}>
                <span>WEATHER API</span>
                <span>SEARCH</span>
                <span>ANALYTICS</span>
                <span>RESPONSIVE UI</span>
                <span>REAL-TIME DATA</span>
              </div>

              <div className={styles.projectActions}>
                <Link
                  href="/weather"
                  className={styles.primaryAction}
                >
                  <span aria-hidden="true">[</span>
                  OPEN SYSTEM
                  <span aria-hidden="true">]</span>
                </Link>

                <a
                  href="https://github.com/ki995483/kimgenius-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  <span aria-hidden="true">[</span>
                  SOURCE
                  <span aria-hidden="true">]</span>
                </a>
              </div>
            </article>

            {/* =================================================
                PROJECT 02 — AI
                ================================================= */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 02
                </span>

                <span className={styles.projectSignal}>
                  <span
                    className={styles.signalDot}
                    aria-hidden="true"
                  />
                  IN DEVELOPMENT
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div className={styles.projectCopy}>
                  <h3>AI Learning Laboratory</h3>

                  <p className={styles.projectDescription}>
                    An experimental environment for Artificial
                    Intelligence, prompt engineering, automation
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
                  <span>48%</span>
                </div>

                <div className={styles.progressTrack}>
                  <span
                    className={styles.progressFill}
                    style={
                      {
                        "--progress": "48%",
                      } as CSSProperties
                    }
                  />

                  <span
                    className={styles.progressGrid}
                    aria-hidden="true"
                  />
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

              <div className={styles.projectActions}>
                <Link
                  href="/ai"
                  className={styles.primaryAction}
                  aria-label="Enter AI Learning Laboratory"
                >
                  <span aria-hidden="true">[</span>
                  OPEN LAB
                  <span aria-hidden="true">]</span>
                </Link>
              </div>
            </article>

            {/* =================================================
                PROJECT 03 — GIS
                ================================================= */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 03
                </span>

                <span className={styles.projectSignal}>
                  <span
                    className={styles.signalDot}
                    aria-hidden="true"
                  />
                  BUILDING
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div className={styles.projectCopy}>
                  <h3>Spatial Intelligence Systems</h3>

                  <p className={styles.projectDescription}>
                    Practical geospatial systems exploring
                    GIS, digital mapping, spatial analysis,
                    environmental interpretation and
                    remote sensing.
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
                  <span>36%</span>
                </div>

                <div className={styles.progressTrack}>
                  <span
                    className={styles.progressFill}
                    style={
                      {
                        "--progress": "36%",
                      } as CSSProperties
                    }
                  />

                  <span
                    className={styles.progressGrid}
                    aria-hidden="true"
                  />
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

            {/* =================================================
                PROJECT 04 — DATA INTELLIGENCE
                ================================================= */}

            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  PROJECT 04
                </span>

                <span className={styles.projectSignal}>
                  <span
                    className={styles.signalDot}
                    aria-hidden="true"
                  />
                  SYSTEM ONLINE
                </span>
              </div>

              <div className={styles.projectIdentity}>
                <div className={styles.projectCopy}>
                  <h3>Data Intelligence Laboratory</h3>

                  <p className={styles.projectDescription}>
                    A data analytics laboratory exploring
                    structured datasets, statistical analysis,
                    visualization, machine learning and
                    predictive intelligence.
                  </p>
                </div>

                <div
                  className={styles.projectMark}
                  aria-hidden="true"
                >
                  DI
                </div>
              </div>

              <div className={styles.progressBlock}>
                <div className={styles.progressMeta}>
                  <span>BUILD PROGRESS</span>
                  <span>18%</span>
                </div>

                <div className={styles.progressTrack}>
                  <span
                    className={styles.progressFill}
                    style={
                      {
                        "--progress": "18%",
                      } as CSSProperties
                    }
                  />

                  <span
                    className={styles.progressGrid}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.progressStatus}>
                  <span>FOUNDATION</span>

                  <span>
                    DATA • ANALYTICS • STATISTICS • ML
                  </span>
                </div>
              </div>

              <div className={styles.techCore}>
                <span>DATA ANALYTICS</span>
                <span>STATISTICS</span>
                <span>VISUALIZATION</span>
                <span>MACHINE LEARNING</span>
                <span>PREDICTION</span>
              </div>

              <div className={styles.projectActions}>
                <Link
                  href="/data-intelligence"
                  className={styles.primaryAction}
                >
                  <span aria-hidden="true">[</span>
                  OPEN SYSTEM
                  <span aria-hidden="true">]</span>
                </Link>

                <a
                  href="https://github.com/ki995483/kimgenius-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  <span aria-hidden="true">[</span>
                  SOURCE
                  <span aria-hidden="true">]</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section
        className={styles.section}
        id="education"
        aria-labelledby="education-title"
      >
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            03 — EDUCATION
          </p>

          <h2
            className={styles.educationTitle}
            id="education-title"
          >
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

      <section
        className={styles.section}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>
            04 — CONNECT
          </p>

          <h2
            className={styles.contactTitle}
            id="contact-title"
          >
            Build something intelligent.
          </h2>

          <p className={styles.contactText}>
            For professional, research, technology and
            collaboration enquiries.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:hello@kimgenius.xyz">
              hello@kimgenius.xyz
            </a>

            <a href="tel:+254791896869">
              +254 791 896869
            </a>

            <a
              href="https://wa.me/254791896869"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/ki995483"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.kimgenius.xyz"
              target="_blank"
              rel="noopener noreferrer"
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
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <span>© 2026 KIMGENIUS • XYZ TECH</span>

          <a href="#about">
            Back to the Top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}