"use client";

import { useState } from "react";
import Link from "next/link";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`portfolio-page ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
    >
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="portfolio-header">
        <div className="portfolio-shell">
          <Link
            href="/"
            className="portfolio-brand"
            aria-label="XYZ Tech home"
          >
            <span className="portfolio-brand-mark">
              <img
                src="/icon.png"
                alt="XYZ"
                className="portfolio-brand-icon"
              />
            </span>

            <strong>Tech</strong>
          </Link>

          <nav
            className="portfolio-nav"
            aria-label="Portfolio navigation"
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setDarkMode((current) => !current)
            }
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={darkMode}
          >
            <span className="theme-icon">
              {darkMode ? "☾" : "☀"}
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="portfolio-hero"
        id="about"
      >
        <div className="portfolio-shell portfolio-hero-shell">
          <h1 className="portfolio-title">
            <span className="portfolio-greeting">
              Hi, I'm
            </span>

            <span className="kimgenius-glow">
              KIMGENIUS
            </span>

            <span className="portfolio-word">
              I BUILD. I SOLVE. I INNOVATE.
            </span>
          </h1>

          <p className="portfolio-intro">
            <strong>
              A forward-thinking Technologist:
            </strong>{" "}
            <em>
              A Technologist polymath; a Spatial Intelligence
              connoisseur; an AI Automation savant; and a Web
              Systems pundit.
            </em>
          </p>

          <div className="portfolio-actions">
            <a
              href="#projects"
              className="portfolio-button"
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="portfolio-button secondary"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY DOMAINS
          ===================================================== */}

      <section
        className="portfolio-section"
        id="skills"
      >
        <div className="portfolio-shell">
          <p className="section-label">
            01 — TECHNOLOGY DOMAINS
          </p>

          <div className="domain-grid">
            <article className="domain-card">
              <span>01</span>

              <h2>
                Artificial Intelligence
              </h2>

              <p>
                AI-assisted workflows, Prompt Engineering,
                AI research, automation concepts and
                intelligent digital systems.
              </p>
            </article>

            <article className="domain-card">
              <span>02</span>

              <h2>
                Spatial Intelligence
              </h2>

              <p>
                GIS, ArcGIS, QGIS, digital mapping,
                spatial analysis, cartography, environmental
                research and remote sensing fundamentals.
              </p>
            </article>

            <article className="domain-card">
              <span>03</span>

              <h2>
                Web Systems
              </h2>

              <p>
                HTML, CSS, JavaScript, Git, GitHub,
                responsive web development, Vercel deployment
                and Cloudflare DNS.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS — KIMGENIUS PROJECT ENGINE
          ===================================================== */}

      <section
        className="portfolio-section"
        id="projects"
      >
        <div className="portfolio-shell">

          <div className="project-engine-header">

            <div className="project-engine-index">
              01 / 08
            </div>

            <div>
              <p className="section-label">
                KIMGENIUS PROJECT SYSTEM
              </p>

              <h2>
                Projects
              </h2>

              <p className="project-engine-intro">
                Intelligent digital systems built through progressive
                experimentation, engineering and continuous refinement.
              </p>
            </div>

          </div>

          {/* =====================================================
              PROJECT 01 — WEATHER DASHBOARD
              ===================================================== */}

          <article className="project-engine-card">

            <div className="project-engine-top">

              <span className="project-number">
                PROJECT 01
              </span>

              <span className="project-live-status">
                <span className="project-status-dot" />
                LIVE SYSTEM
              </span>

            </div>

            <div className="project-engine-identity">

              <div>

                <h3>
                  Weather Dashboard
                </h3>

                <p className="project-engine-description">
                  Real-time weather intelligence interface connecting
                  weather data, API systems and responsive user experience.
                </p>

              </div>

              <div
                className="project-infinity-mark"
                aria-hidden="true"
              >
                ∞
              </div>

            </div>

            {/* =====================================================
                BUILD PROGRESS
                ===================================================== */}

            <div className="project-progress">

              <div className="project-progress-meta">
                <span>
                  BUILD PROGRESS
                </span>

                <span>
                  01 / 08
                </span>
              </div>

              <div
                className="project-progress-track"
                aria-label="Project build progress"
              >
                <span className="project-progress-fill" />
                <span className="project-progress-grid" />
              </div>

              <div className="project-progress-status">

                <span>
                  BUILDING
                </span>

                <span>
                  WEATHER API • JAVASCRIPT • UI
                </span>

              </div>

            </div>

            {/* =====================================================
                TECHNOLOGY CORE
                ===================================================== */}

            <div className="project-tech-core">

              <span>WEATHER API</span>
              <span>JAVASCRIPT</span>
              <span>RESPONSIVE UI</span>
              <span>REAL-TIME DATA</span>

            </div>

            {/* =====================================================
                PROJECT ACTIONS
                ===================================================== */}

            <div className="project-engine-actions">

              <a
                href="#"
                className="project-primary-action"
                aria-label="Open Weather Dashboard live demo"
              >
                <span>[</span>
                LIVE DEMO
                <span>]</span>
              </a>

              <a
                href="#"
                className="project-secondary-action"
                aria-label="Open Weather Dashboard source code"
              >
                <span>[</span>
                SOURCE
                <span>]</span>
              </a>

            </div>

          </article>

        </div>
      </section>

      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section
        className="portfolio-section education-section"
      >
        <div className="portfolio-shell">
          <p className="section-label">
            03 — EDUCATION
          </p>

          <h2>
            Kibabii University
          </h2>

          <p className="education-degree">
            Bachelor of Education (Arts)
          </p>

          <p>
            Geography &amp; Kiswahili
          </p>

          <p className="education-note">
            Graduation: 2027
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        className="portfolio-section"
        id="contact"
      >
        <div className="portfolio-shell contact-section">

          <p className="section-label">
            04 — CONNECT
          </p>

          <h2>
            Build something intelligent.
          </h2>

          <p>
            For professional, research, technology and
            collaboration enquiries.
          </p>

          <div className="contact-links">

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

      <footer className="portfolio-footer">
        <div className="portfolio-shell">

          <span>
            ©️ 2026 KIMGENIUS • XYZ TECH
          </span>

          <a
            href="#about"
            className="back-to-top"
          >
            Back to the Top 🔝
          </a>

        </div>
      </footer>

    </main>
  );
}