// src/components/Countdown.jsx

import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const REVEAL_MS = 900;

export default function Countdown({ seconds = 5, onStartReveal, onComplete }) {
  const [count,     setCount]     = useState(seconds);
  const [progress,  setProgress]  = useState(0);
  const [revealing, setRevealing] = useState(false);
  const revealTimer = useRef();
  const progTimer   = useRef();

  // ── progress bar animation ──────────────────
  useEffect(() => {
    const totalMs  = seconds * 1000;
    const interval = 50;
    const step     = (interval / totalMs) * 100;

    progTimer.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progTimer.current); return 100; }
        return Math.min(p + step, 100);
      });
    }, interval);

    return () => clearInterval(progTimer.current);
  }, [seconds]);

  // ── countdown tick ──────────────────────────
  useEffect(() => {
    if (count <= 0 && !revealing) { startReveal(); return; }
    if (revealing) return;
    const id = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [count, revealing]);

  useEffect(() => () => clearTimeout(revealTimer.current), []);

  function startReveal() {
    clearInterval(progTimer.current);
    setProgress(100);
    setRevealing(true);
    onStartReveal && onStartReveal();
    revealTimer.current = setTimeout(() => {
      onComplete && onComplete();
    }, REVEAL_MS);
  }

  function handleSkip() {
    clearInterval(progTimer.current);
    setCount(0);
    startReveal();
  }

  return (
    <div className={`cd-root ${revealing ? "cd-reveal" : ""}`}>

      {/* ── horizontal lines background ── */}
      <div className="cd-lines">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="cd-line" />
        ))}
      </div>

      {/* ── center content ── */}
      <div className="cd-content">

        <h1 className="cd-loading">LOADING...</h1>

        {/* percent badge */}
        <div className="cd-percent-wrap">
          <div className="cd-percent">{Math.round(progress)}%</div>
        </div>

        {/* progress bar */}
        <div className="cd-bar-wrap">
          <div
            className="cd-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div className="cd-pill-left"  />
          <div className="cd-pill-right" />
        </div>

        {/* skip */}
        <button className="cd-skip" onClick={handleSkip}>
          SKIP →
        </button>

      </div>

    </div>
  );
}