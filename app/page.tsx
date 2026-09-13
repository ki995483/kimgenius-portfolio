"use client";

import { useState } from "react";
import Link from "next/link";
import XYZCore from "./components/XYZCore";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`xyz-page ${darkMode ? "theme-dark" : "theme-light"}`}>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="xyz-header">
        <Link href="/" className="xyz-brand" aria-label="KIMGENIUS home">
          <div className="xyz-brand-icon">
            <XYZCore size={58} priority />
          </div>

          <span className="xyz-brand-name">Tech</span>
        </Link>

        <button
          type="button"
          className="xyz-theme-toggle"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☾" : "☀"}
        </button>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="xyz-hero">
        <div className="xyz-hero-content">

          <p className="xyz-intro">
            Hi, I'm
          </p>

          <div className="xyz-title-wrap">
            <XYZCore size={110} priority />

            <h1 className="xyz-title">
              KIMGENIUS
            </h1>
          </div>

          <p className="xyz-tagline">
            I BUILD. I SOLVE. I INNOVATE.
          </p>

          <p className="xyz-description">
            <strong>A forward-thinking Technologist.</strong>{" "}
            A Technologist polymath; a Spatial Intelligence connoisseur;
            an AI Automation savant; and a Web Systems builder focused on
            intelligent digital experiences.
          </p>

          {/* =================================================
              ACTIONS
              ================================================= */}

          <div className="xyz-actions">
            <Link href="/portfolio" className="xyz-button xyz-button-primary">
              Explore Work
            </Link>

            <a href="#contact" className="xyz-button xyz-button-secondary">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT ANCHOR
          ===================================================== */}

      <section id="contact" className="xyz-contact-anchor" aria-hidden="true" />

      {/* =====================================================
          MOBILE / BOTTOM DOMAIN BAR
          ===================================================== */}

      <div className="xyz-domain-bar">
        <span aria-hidden="true">⌕</span>
        <span>kimgenius.xyz</span>
      </div>
    </main>
  );
}