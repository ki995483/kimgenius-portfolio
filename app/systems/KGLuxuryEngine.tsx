"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./kg-luxury-engine.module.css";

type EngineMode = "idle" | "running" | "braking" | "settling";

const BLADE_PATH =
  "M -14 -18 C -24 -35 -35 -62 -40 -91 C -44 -113 -29 -127 0 -127 C 29 -127 44 -113 40 -91 C 35 -62 24 -35 14 -18 C 9 -7 5 0 0 0 C -5 0 -9 -7 -14 -18 Z";

function Propeller({
  rotation,
  compact = false,
}: {
  rotation: number;
  compact?: boolean;
}) {
  return (
    <svg
      className={compact ? styles.miniSvg : styles.engineSvg}
      viewBox="-175 -175 350 350"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kgMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="32%" stopColor="#e5eaf0" />
          <stop offset="66%" stopColor="#8c97a5" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <radialGradient id="kgCore" cx="38%" cy="32%">
          <stop offset="0%" stopColor="#1a2a3b" />
          <stop offset="52%" stopColor="#08111b" />
          <stop offset="100%" stopColor="#02050a" />
        </radialGradient>

        <filter
          id="kgBladeGlow"
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter
          id="kgBlueGlow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <g
        className={styles.propellerRotor}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "0 0",
        }}
      >
        <g opacity="0.55" filter="url(#kgBlueGlow)">
          <path
            d={BLADE_PATH}
            fill="none"
            stroke="#159dff"
            strokeWidth="10"
          />
          <path
            d={BLADE_PATH}
            fill="none"
            stroke="#159dff"
            strokeWidth="10"
            transform="rotate(120)"
          />
          <path
            d={BLADE_PATH}
            fill="none"
            stroke="#159dff"
            strokeWidth="10"
            transform="rotate(240)"
          />
        </g>

        <path
          d={BLADE_PATH}
          fill="url(#kgMetal)"
          stroke="#b9d7f4"
          strokeWidth="2"
          filter="url(#kgBladeGlow)"
        />

        <path
          d={BLADE_PATH}
          fill="url(#kgMetal)"
          stroke="#b9d7f4"
          strokeWidth="2"
          transform="rotate(120)"
          filter="url(#kgBladeGlow)"
        />

        <path
          d={BLADE_PATH}
          fill="url(#kgMetal)"
          stroke="#b9d7f4"
          strokeWidth="2"
          transform="rotate(240)"
          filter="url(#kgBladeGlow)"
        />

        {!compact && (
          <>
            <g transform="translate(0 -149)">
              <circle r="19" fill="#030811" stroke="#46b5ff" strokeWidth="2" />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="16"
                fontWeight="800"
                fontFamily="Arial, sans-serif"
              >
                X
              </text>
            </g>

            <g transform="translate(-129 75)">
              <circle r="19" fill="#030811" stroke="#46b5ff" strokeWidth="2" />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="16"
                fontWeight="800"
                fontFamily="Arial, sans-serif"
              >
                Y
              </text>
            </g>

            <g transform="translate(129 75)">
              <circle r="19" fill="#030811" stroke="#46b5ff" strokeWidth="2" />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="16"
                fontWeight="800"
                fontFamily="Arial, sans-serif"
              >
                Z
              </text>
            </g>
          </>
        )}
      </g>

      {!compact && (
        <>
          <circle
            r="51"
            fill="none"
            stroke="#159dff"
            strokeWidth="12"
            opacity="0.16"
            filter="url(#kgBlueGlow)"
          />

          <circle
            r="43"
            fill="url(#kgCore)"
            stroke="#dce9f7"
            strokeWidth="3"
          />

          <circle
            r="36"
            fill="none"
            stroke="#159dff"
            strokeWidth="3"
          />
        </>
      )}
    </svg>
  );
}

export default function KGLuxuryEngine() {
  const [mode, setMode] = useState<EngineMode>("idle");
  const [rotation, setRotation] = useState(0);

  const modeRef = useRef<EngineMode>("idle");
  const rotationRef = useRef(0);
  const speedRef = useRef(0);
  const settleTargetRef = useRef(0);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();

    const animate = (now: number) => {
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;

      const currentMode = modeRef.current;

      if (currentMode === "running") {
        const targetSpeed = 285;

        speedRef.current +=
          (targetSpeed - speedRef.current) *
          Math.min(1, delta * 1.7);

        const rhythm =
          0.84 +
          0.16 * (0.5 + 0.5 * Math.sin(now * 0.004));

        rotationRef.current +=
          speedRef.current * rhythm * delta;

        setRotation(rotationRef.current);
      }

      if (currentMode === "braking") {
        speedRef.current *= Math.pow(0.045, delta);

        rotationRef.current += speedRef.current * delta;

        setRotation(rotationRef.current);

        if (speedRef.current < 2.5) {
          speedRef.current = 0;

          settleTargetRef.current =
            Math.round(rotationRef.current / 360) * 360;

          modeRef.current = "settling";
          setMode("settling");
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  function handleTech() {
    if (mode === "running") {
      modeRef.current = "braking";
      setMode("braking");
      return;
    }

    if (mode === "idle") {
      modeRef.current = "running";
      setMode("running");
    }
  }

  function finishSettling() {
    if (modeRef.current !== "settling") {
      return;
    }

    rotationRef.current = 0;
    speedRef.current = 0;

    setRotation(0);

    modeRef.current = "idle";
    setMode("idle");
  }

  const running = mode === "running";

  return (
    <div className={styles.engine}>
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={`${styles.smoke} ${styles.smokeOne}`} />
        <span className={`${styles.smoke} ${styles.smokeTwo}`} />
        <span className={`${styles.smoke} ${styles.smokeThree}`} />

        <span className={`${styles.nimbus} ${styles.nimbusOne}`} />
        <span className={`${styles.nimbus} ${styles.nimbusTwo}`} />
        <span className={`${styles.nimbus} ${styles.nimbusThree}`} />
      </div>

      <div className={styles.cornerTurbine}>
        <span className={styles.cornerText}>XYZ</span>
        <Propeller rotation={0} compact />
      </div>

      <div className={styles.engineTop}>
        <div>
          <span className={styles.eyebrow}>KG LUXURY</span>
          <h3>XYZ PROPELLER ENGINE</h3>
        </div>

        <span
          className={`${styles.state} ${
            running ? styles.stateLive : ""
          }`}
        >
          <span />
          {running ? "LIVE" : "STANDBY"}
        </span>
      </div>

      <div className={styles.stage}>
        <div className={styles.ring} aria-hidden="true" />

        <div
          className={`${styles.rotorFrame} ${
            mode === "settling" ? styles.settling : ""
          }`}
          style={
            mode === "settling"
              ? {
                  transform: `rotate(${settleTargetRef.current}deg)`,
                }
              : {
                  transform: `rotate(${rotation}deg)`,
                }
          }
          onTransitionEnd={finishSettling}
        >
          <Propeller rotation={0} />
        </div>

        <button
          type="button"
          className={`${styles.techButton} ${
            running ? styles.techButtonActive : ""
          }`}
          onClick={handleTech}
          aria-pressed={running}
        >
          <strong>TECH</strong>
          <small>{running ? "STOP" : "ACTIVATE"}</small>
        </button>
      </div>

      <div className={styles.engineBottom}>
        <span>XYZ / KIMGENIUS</span>
        <span>
          {running
            ? "PROPULSING"
            : mode === "settling"
              ? "RETURNING"
              : "READY"}
        </span>
      </div>
    </div>
  );
}
