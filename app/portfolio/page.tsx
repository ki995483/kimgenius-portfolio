"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  const searchItems = [
    { label: "SYSTEMS", href: "/systems" },
    { label: "PROJECTS", href: "#projects" },
    { label: "TECHNOLOGY DOMAINS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "PAGES", href: "#about" },
  ];

  const filteredSearchItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  const pageStyle = {
    "--portfolio-accent": "#159dff",
    "--portfolio-accent-soft": "#46b5ff",
  } as CSSProperties;

  return (
    <main
      className={`${styles.page} ${darkMode ? styles.dark : styles.light}`}
      style={pageStyle}
    >
      <header className={styles.header}>
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.brand} aria-label="XYZ Home">
              <span className={styles.brandIcon}>
                <img src="/icon.png" alt="XYZ" />
              </span>

              <span className={styles.brandText}>TECH</span>
            </Link>

            <nav className={styles.nav} aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>

            <button
              type="button"
              className={styles.searchToggle}
              onClick={() => setSearchOpen((current) => !current)}
              aria-label="Open search"
              aria-expanded={searchOpen}
            >
              <span className={styles.searchIcon} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={() => setDarkMode((current) => !current)}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? "â˜€ï¸" : "ðŸŒ™"}
            </button>
          </div>
        </div>
      </header>

      <section className={styles.hero} id="about">
        <div className={styles.heroBeam} aria-hidden="true">
          <div className={styles.beamCore} />
          <div className={styles.beamGlow} />
          <div className={styles.beamFlash} />
        </div>

        <div className={styles.shell}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroName}>KIMGENIUS</h1>

            <p className={styles.heroStatement}>
              I BUILD. I SOLVE. I INNOVATE.
            </p>

            <div className={styles.heroIntro}>
              <strong>A forward-thinking technologist:</strong>{" "}
              <span>
                A Technologist polymath; a Spatial Intelligence connoisseur; an
                AI Automation savant; and a Web Systems builder focused on
                intelligent digital experiences.
              </span>
            </div>

            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryButton}>
                Explore Work â†’
              </a>

              <a href="#contact" className={styles.secondaryButton}>
                Connect â†’
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="skills">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>
              01 â€” TECHNOLOGY DOMAINS
            </p>

            <h2 className={styles.sectionTitle}>
              Intelligence across disciplines.
            </h2>
          </div>

          <div className={styles.domainGrid}>
            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>01</span>

              <div>
                <h3>Artificial Intelligence</h3>
                <p>
                  AI systems, prompt engineering, automation concepts and
                  intelligent workflow design.
                </p>
              </div>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>02</span>

              <div>
                <h3>Spatial Intelligence</h3>
                <p>
                  GIS, remote sensing, spatial analysis, mapping and
                  environmental intelligence.
                </p>
              </div>
            </article>

            <article className={styles.domainCard}>
              <span className={styles.domainNumber}>03</span>

              <div>
                <h3>Web Systems</h3>
                <p>
                  Modern web architecture, responsive interfaces, APIs and
                  intelligent digital experiences.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>
              02 â€” PROJECT SYSTEM
            </p>

            <h2 className={styles.sectionTitle}>
              Systems currently in motion.
            </h2>

            <p className={styles.sectionDescription}>
              A portfolio of intelligent systems spanning weather intelligence,
              artificial intelligence, spatial intelligence, data intelligence,
              system discovery and private financial infrastructure.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {/* PROJECT 01 â€” WEATHER */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 01</span>
                  <span className={styles.projectStatus}>
                    SYSTEM IN BUILD
                  </span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  â˜€ï¸
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>Weather Intelligence</h3>

                <p>
                  A live environmental intelligence system combining location
                  search, forecasting, analytical views and conversational
                  exploration of weather data.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>72%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  WEATHER API â€¢ SEARCH â€¢ ANALYTICS â€¢ UI
                </div>

                <div className={styles.projectTech}>
                  <span>WEATHER API</span>
                  <span>SEARCH</span>
                  <span>ANALYTICS</span>
                  <span>RESPONSIVE UI</span>
                  <span>REAL-TIME DATA</span>
                </div>

                <div className={styles.projectActions}>
                  <Link href="/weather" className={styles.projectButton}>
                    OPEN SYSTEM â†’
                  </Link>

                  <a
                    href="https://github.com/ki995483"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectButtonSecondary}
                  >
                    SOURCE â†’
                  </a>
                </div>
              </div>
            </article>

            {/* PROJECT 02 â€” AI */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 02</span>
                  <span className={styles.projectStatus}>
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  AI
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>AI Learning Laboratory</h3>

                <p>
                  An experimental AI environment exploring artificial
                  intelligence, prompt engineering, automation concepts and
                  intelligent workflows.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>48%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "48%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  AI â€¢ PROMPT ENGINEERING â€¢ AUTOMATION
                </div>

                <div className={styles.projectTech}>
                  <span>ARTIFICIAL INTELLIGENCE</span>
                  <span>PROMPT ENGINEERING</span>
                  <span>AUTOMATION</span>
                  <span>RESEARCH</span>
                </div>

                <div className={styles.projectActions}>
                  <Link href="/ai" className={styles.projectButton}>
                    OPEN SYSTEM â†’
                  </Link>
                </div>
              </div>
            </article>

            {/* PROJECT 03 â€” SPATIAL */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 03</span>
                  <span className={styles.projectStatus}>BUILDING</span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  GIS
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>Spatial Intelligence Systems</h3>

                <p>
                  GIS and spatial intelligence work covering digital mapping,
                  spatial analysis, environmental interpretation and remote
                  sensing.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>36%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "36%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  GIS â€¢ QGIS â€¢ ARCGIS â€¢ REMOTE SENSING
                </div>

                <div className={styles.projectTech}>
                  <span>GIS</span>
                  <span>QGIS</span>
                  <span>ARCGIS</span>
                  <span>REMOTE SENSING</span>
                </div>

                <div className={styles.projectActions}>
                  <Link
                    href="/spatial-intelligence"
                    className={styles.projectButton}
                  >
                    OPEN SYSTEM â†’
                  </Link>
                </div>
              </div>
            </article>

            {/* PROJECT 04 â€” DATA INTELLIGENCE */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 04</span>
                  <span className={styles.projectStatus}>
                    SYSTEM IN BUILD
                  </span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  DATA
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>Data Intelligence</h3>

                <p>
                  A data intelligence system focused on transforming structured
                  information into analytical views, patterns, insights and
                  decision-support outputs.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>30%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  DATA â€¢ ANALYTICS â€¢ VISUALIZATION â€¢ INSIGHTS
                </div>

                <div className={styles.projectTech}>
                  <span>DATA ANALYSIS</span>
                  <span>VISUALIZATION</span>
                  <span>INSIGHTS</span>
                  <span>DECISION SUPPORT</span>
                </div>

                <div className={styles.projectActions}>
                  <Link
                    href="/data-intelligence"
                    className={styles.projectButton}
                  >
                    OPEN SYSTEM â†’
                  </Link>
                </div>
              </div>
            </article>

            {/* PROJECT 05 â€” SYSTEM REGISTRY */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 05</span>
                  <span className={styles.projectStatus}>
                    SYSTEM ARCHITECTURE
                  </span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  XYZ
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>System Registry</h3>

                <p>
                  The public discovery layer for KIMGENIUS systems, connecting
                  intelligent applications through a structured system
                  registry and discovery architecture.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>64%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "64%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  SYSTEMS â€¢ DISCOVERY â€¢ REGISTRY â€¢ ARCHITECTURE
                </div>

                <div className={styles.projectTech}>
                  <span>SYSTEM REGISTRY</span>
                  <span>SYSTEM DISCOVERY</span>
                  <span>API</span>
                  <span>ARCHITECTURE</span>
                </div>

                <div className={styles.projectActions}>
                  <Link href="/systems" className={styles.projectButton}>
                    EXPLORE SYSTEMS â†’
                  </Link>
                </div>
              </div>
            </article>

            {/* PROJECT 06 â€” CASHFLOW */}
            <article className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <span className={styles.projectNumber}>PROJECT 06</span>
                  <span className={styles.projectStatus}>PRIVATE</span>
                </div>

                <div className={styles.projectMark} aria-hidden="true">
                  CF
                </div>
              </div>

              <div className={styles.projectBody}>
                <h3>KIMGENIUS CashFlow</h3>

                <p>
                  A private financial and business intelligence platform
                  reserved for authenticated use, with PIN-based access and
                  encrypted data architecture.
                </p>

                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>Architecture Progress</span>
                    <strong>18%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "18%" }}
                    />
                  </div>
                </div>

                <div className={styles.projectMeta}>
                  PRIVATE PLATFORM â€¢ ARCHITECTURE RESERVED
                </div>

                <div className={styles.projectTech}>
                  <span>PIN ACCESS</span>
                  <span>ENCRYPTION</span>
                  <span>PRIVATE DATA</span>
                  <span>AUTHORIZATION</span>
                  <span>PROTECTED API</span>
                </div>

                <div className={styles.projectActions}>
                  <span className={styles.projectButtonSecondary}>
                    PRIVATE SYSTEM
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section} id="education">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>
              03 â€” EDUCATION
            </p>

            <h2 className={styles.sectionTitle}>
              Academic foundation.
            </h2>
          </div>

          <article className={styles.educationCard}>
            <div className={styles.educationYear}>2027</div>

            <div className={styles.educationContent}>
              <p className={styles.educationInstitution}>
                Kibabii University
              </p>

              <h3>Bachelor of Education (Arts)</h3>

              <p>Geography &amp; Kiswahili</p>

              <span>Graduation: 2027</span>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.shell}>
          <div className={styles.contactCard}>
            <div>
              <p className={styles.sectionLabel}>
                04 â€” CONNECT
              </p>

              <h2 className={styles.contactTitle}>
                Build something intelligent.
              </h2>

              <p className={styles.contactText}>
                For collaborations, systems, technology projects or intelligent
                digital experiences, get in touch.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <a href="mailto:hello@kimgenius.xyz">
                hello@kimgenius.xyz
              </a>

              <a href="tel:+254791896869">
                +254 791 896869
              </a>

              <a
                href="https://wa.me/254791896869"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp â†’
              </a>

              <a
                href="https://github.com/ki995483"
                target="_blank"
                rel="noreferrer"
              >
                GitHub â†’
              </a>

              <a
                href="https://www.kimgenius.xyz"
                target="_blank"
                rel="noreferrer"
              >
                kimgenius.xyz â†’
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div className={styles.footerInner}>
            <span>Â© 2026 KIMGENIUS â€¢ XYZ TECH</span>

            <a href="#about">
              Back to the Top â†‘
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
