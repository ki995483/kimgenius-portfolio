"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`page ${darkMode ? "dark" : "light"}`}>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="header">
        <div className="shell headerInner">
          <Link
            href="/"
            className="brand"
            aria-label="XYZ Tech home"
          >
            <span className="brandMark">
              <img
                src="/icon.png"
                alt="XYZ"
                className="brandIcon"
                width={36}
                height={36}
              />
            </span>

            <strong>TECH</strong>
          </Link>

          <nav
            className="nav"
            aria-label="Portfolio navigation"
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="themeToggle"
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
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="hero"
        id="about"
        aria-labelledby="hero-title"
      >
        <div className="shell">
          <p className="kicker">
            KIMGENIUS / XYZ TECH
          </p>

          <h1
            className="heroTitle"
            id="hero-title"
          >
            <span>Hi, I&apos;m</span>

            <strong>KIMGENIUS</strong>

            <em>
              I BUILD. I SOLVE. I INNOVATE.
            </em>
          </h1>

          <p className="heroText">
            <strong>
              A forward-thinking Technologist.
            </strong>{" "}
            A Technologist polymath; a Spatial Intelligence
            connoisseur; an AI Automation savant; and a Web
            Systems builder focused on intelligent digital
            experiences.
          </p>

          <div className="actions">
            <a
              href="#projects"
              className="button"
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="button buttonSecondary"
            >
              Connect
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY DOMAINS
          ===================================================== */}

      <section
        className="section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="shell">
          <p className="sectionLabel">
            01 — TECHNOLOGY DOMAINS
          </p>

          <div className="domainGrid">
            <article className="domainCard">
              <span className="domainNumber">
                01
              </span>

              <h2 id="skills-title">
                Artificial Intelligence
              </h2>

              <p>
                AI-assisted workflows, prompt engineering,
                intelligent automation concepts, research
                systems and emerging AI interfaces.
              </p>
            </article>

            <article className="domainCard">
              <span className="domainNumber">
                02
              </span>

              <h2>
                Spatial Intelligence
              </h2>

              <p>
                GIS, ArcGIS, QGIS, digital mapping,
                spatial analysis, cartography, environmental
                interpretation and remote sensing fundamentals.
              </p>
            </article>

            <article className="domainCard">
              <span className="domainNumber">
                03
              </span>

              <h2>
                Web Systems
              </h2>

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
        className="projectsSection"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">
              KIMGENIUS PROJECT SYSTEM
            </p>
          </div>

          <div>
            <h2 id="projects-title">
              Projects
            </h2>

            <p className="sectionIntro">
              Intelligent digital systems built through
              experimentation, engineering and continuous
              refinement.
            </p>
          </div>
        </div>

        <div className="projectGrid">

          {/* =================================================
              PROJECT 01 — WEATHER INTELLIGENCE
              ================================================= */}

          <article className="projectCard">
            <div className="projectTop">
              <span className="projectNumber">
                PROJECT 01
              </span>

              <span className="projectSignal">
                <span
                  className="signalDot"
                  aria-hidden="true"
                />
                SYSTEM IN BUILD
              </span>
            </div>

            <div className="projectIdentity">
              <div>
                <h3>
                  Weather Intelligence
                </h3>

                <p className="projectDescription">
                  A weather intelligence interface designed
                  around live environmental data, location
                  search, forecasting, analytical views and
                  conversational exploration.
                </p>
              </div>

              <div
                className="projectMark"
                aria-hidden="true"
              >
                ∞
              </div>
            </div>

            <div className="progressBlock">
              <div className="progressMeta">
                <span>
                  BUILD PROGRESS
                </span>

                <span>
                  72%
                </span>
              </div>

              <div
                className="progressTrack"
                aria-label="Weather Intelligence build progress: 72 percent"
              >
                <span
                  className="progressFill"
                  style={
                    {
                      "--progress": "72%",
                    } as CSSProperties
                  }
                />

                <span
                  className="progressGrid"
                  aria-hidden="true"
                />
              </div>

              <div className="progressStatus">
                <span>
                  BUILDING
                </span>

                <span>
                  WEATHER API • SEARCH • ANALYTICS • UI
                </span>
              </div>
            </div>

            <div className="techCore">
              <span>WEATHER API</span>
              <span>SEARCH</span>
              <span>ANALYTICS</span>
              <span>RESPONSIVE UI</span>
              <span>REAL-TIME DATA</span>
            </div>

            <div className="projectActions">
              <Link
                href="/weather"
                className="primaryAction"
                aria-label="Open Weather Intelligence"
              >
                <span aria-hidden="true">[</span>
                OPEN SYSTEM
                <span aria-hidden="true">]</span>
              </Link>

              <a
                href="https://github.com/ki995483"
                target="_blank"
                rel="noopener noreferrer"
                className="secondaryAction"
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

          <article className="projectCard">
            <div className="projectTop">
              <span className="projectNumber">
                PROJECT 02
              </span>

              <span className="projectSignal">
                <span
                  className="signalDot"
                  aria-hidden="true"
                />
                IN DEVELOPMENT
              </span>
            </div>

            <div className="projectIdentity">
              <div>
                <h3>
                  AI Learning Laboratory
                </h3>

                <p className="projectDescription">
                  An experimental environment for Artificial
                  Intelligence, prompt engineering, automation
                  concepts and intelligent workflows.
                </p>
              </div>

              <div
                className="projectMark"
                aria-hidden="true"
              >
                AI
              </div>
            </div>

            <div className="progressBlock">
              <div className="progressMeta">
                <span>
                  BUILD PROGRESS
                </span>

                <span>
                  48%
                </span>
              </div>

              <div className="progressTrack">
                <span
                  className="progressFill"
                  style={
                    {
                      "--progress": "48%",
                    } as CSSProperties
                  }
                />

                <span
                  className="progressGrid"
                  aria-hidden="true"
                />
              </div>

              <div className="progressStatus">
                <span>
                  EXPERIMENTING
                </span>

                <span>
                  AI • PROMPT ENGINEERING • AUTOMATION
                </span>
              </div>
            </div>

            <div className="techCore">
              <span>ARTIFICIAL INTELLIGENCE</span>
              <span>PROMPT ENGINEERING</span>
              <span>AUTOMATION</span>
              <span>RESEARCH</span>
            </div>
          </article>

          {/* =================================================
              PROJECT 03 — GIS
              ================================================= */}

          <article className="projectCard">
            <div className="projectTop">
              <span className="projectNumber">
                PROJECT 03
              </span>

              <span className="projectSignal">
                <span
                  className="signalDot"
                  aria-hidden="true"
                />
                BUILDING
              </span>
            </div>

            <div className="projectIdentity">
              <div>
                <h3>
                  Spatial Intelligence Systems
                </h3>

                <p className="projectDescription">
                  Practical geospatial systems exploring
                  GIS, digital mapping, spatial analysis,
                  environmental interpretation and
                  remote sensing.
                </p>
              </div>

              <div
                className="projectMark"
                aria-hidden="true"
              >
                GIS
              </div>
            </div>

            <div className="progressBlock">
              <div className="progressMeta">
                <span>
                  BUILD PROGRESS
                </span>

                <span>
                  36%
                </span>
              </div>

              <div className="progressTrack">
                <span
                  className="progressFill"
                  style={
                    {
                      "--progress": "36%",
                    } as CSSProperties
                  }
                />

                <span
                  className="progressGrid"
                  aria-hidden="true"
                />
              </div>

              <div className="progressStatus">
                <span>
                  BUILDING
                </span>

                <span>
                  GIS • QGIS • ARCGIS • REMOTE SENSING
                </span>
              </div>
            </div>

            <div className="techCore">
              <span>GIS</span>
              <span>QGIS</span>
              <span>ARCGIS</span>
              <span>REMOTE SENSING</span>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section
        className="section"
        id="education"
        aria-labelledby="education-title"
      >
        <div className="shell">
          <p className="sectionLabel">
            03 — EDUCATION
          </p>

          <h2
            className="educationTitle"
            id="education-title"
          >
            Kibabii University
          </h2>

          <p className="educationDegree">
            Bachelor of Education (Arts)
          </p>

          <p className="educationDetail">
            Geography &amp; Kiswahili
          </p>

          <p className="educationDetail">
            Graduation: 2027
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        className="section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="shell">
          <p className="sectionLabel">
            04 — CONNECT
          </p>

          <h2
            className="contactTitle"
            id="contact-title"
          >
            Build something intelligent.
          </h2>

          <p className="contactText">
            For professional, research, technology and
            collaboration enquiries.
          </p>

          <div className="contactLinks">
            <a href="mailto:hello@kimgenius.xyz">
              hello@kimgenius.xyz
            </a>

            <a href="tel:+254791896869">
              +254 791 896869
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

      <footer className="footer">
        <div className="shell footerInner">
          <span>
            © 2026 KIMGENIUS • XYZ TECH
          </span>

          <Link href="#about">
            Back to the Top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}