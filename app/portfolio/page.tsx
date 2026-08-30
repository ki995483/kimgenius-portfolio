import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-header">
        <div className="portfolio-shell">
          <Link href="/" className="portfolio-brand">
            XYZ
          </Link>

          <nav className="portfolio-nav" aria-label="Portfolio navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="portfolio-hero" id="about">
        <div className="portfolio-shell">
          <p className="portfolio-kicker">
            KIMGENIUS — XYZ TECH
          </p>

          <h1>
            Technologist
            <span>Spatial Intelligence</span>
            <span>AI Automation</span>
            <span>Web Systems</span>
          </h1>

          <p className="portfolio-intro">
            Forward-thinking Bachelor of Education (Arts) student
            specialising in Geography and Kiswahili, with an
            interdisciplinary focus on Artificial Intelligence,
            Spatial Intelligence, geospatial technologies, web systems,
            digital infrastructure and research.
          </p>

          <div className="portfolio-actions">
            <a href="#projects" className="portfolio-button">
              Explore Work
            </a>

            <a href="#contact" className="portfolio-button secondary">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="skills">
        <div className="portfolio-shell">
          <p className="section-label">01 — TECHNOLOGY DOMAINS</p>

          <div className="domain-grid">
            <article className="domain-card">
              <span>01</span>
              <h2>Artificial Intelligence</h2>
              <p>
                AI-assisted workflows, Prompt Engineering,
                AI research, automation concepts and intelligent
                digital systems.
              </p>
            </article>

            <article className="domain-card">
              <span>02</span>
              <h2>Spatial Intelligence</h2>
              <p>
                GIS, ArcGIS, QGIS, digital mapping, spatial analysis,
                cartography, environmental research and remote sensing
                fundamentals.
              </p>
            </article>

            <article className="domain-card">
              <span>03</span>
              <h2>Web Systems</h2>
              <p>
                HTML, CSS, JavaScript, Git, GitHub, responsive web
                development, Vercel deployment and Cloudflare DNS.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="portfolio-shell">
          <p className="section-label">02 — PROJECTS & INITIATIVES</p>

          <article className="project-feature">
            <div>
              <p className="project-number">PROJECT 01</p>
              <h2>XYZ TECH & KimGenius Digital Portfolio</h2>

              <a
                href="https://www.kimgenius.xyz"
                target="_blank"
                rel="noreferrer"
                className="portfolio-button"
              >
                LIVE DEMO
              </a>
            </div>

            <p>
              A personal professional digital platform for technical
              identity, projects, research interests and future
              technology initiatives.
            </p>
          </article>

          <article className="project-feature">
            <div>
              <p className="project-number">PROJECT 02</p>
              <h2>AI Learning Laboratory</h2>
            </div>

            <p>
              A self-directed environment for exploring Artificial
              Intelligence, Prompt Engineering, automation concepts,
              AI-assisted research and intelligent workflows.
            </p>
          </article>

          <article className="project-feature">
            <div>
              <p className="project-number">PROJECT 03</p>
              <h2>Spatial Intelligence Learning Projects</h2>
            </div>

            <p>
              Developing practical capabilities in geographic
              information systems, digital mapping, spatial analysis,
              environmental interpretation and geospatial technologies.
            </p>
          </article>
        </div>
      </section>

      <section className="portfolio-section education-section">
        <div className="portfolio-shell">
          <p className="section-label">03 — EDUCATION</p>

          <h2>Kibabii University</h2>

          <p className="education-degree">
            Bachelor of Education (Arts)
          </p>

          <p>
            Geography &amp; Kiswahili
          </p>

          <p className="education-note">
            Expected Graduation: 2027
          </p>
        </div>
      </section>

      <section className="portfolio-section" id="contact">
        <div className="portfolio-shell contact-section">
          <p className="section-label">04 — CONNECT</p>

          <h2>Build something intelligent.</h2>

          <p>
            For professional, research, technology and collaboration
            enquiries.
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

      <footer className="portfolio-footer">
        <div className="portfolio-shell">
          <span>©️ 2026 KIMGENIUS • XYZ TECH</span>

          <Link href="/">
            Return to XYZ
          </Link>
        </div>
      </footer>
    </main>
  );
}