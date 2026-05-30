import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const REVEAL_MS = 900;

export default function Countdown({ seconds = 5, onStartReveal, onComplete }) {
  const [count, setCount] = useState(seconds);
  const [revealing, setRevealing] = useState(false);
  const revealTimer = useRef();

  useEffect(() => {
    if (count <= 0 && !revealing) {
      startReveal();
      return;
    }
    if (revealing) return;
    const id = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [count, revealing]);

  useEffect(() => () => clearTimeout(revealTimer.current), []);

  function startReveal() {
    setRevealing(true);
    onStartReveal && onStartReveal();
    revealTimer.current = setTimeout(() => {
      onComplete && onComplete();
    }, REVEAL_MS);
  }

  function handleSkip() {
    setCount(0);
    startReveal();
  }

  return (
    <div className={`countdown-root ${revealing ? "reveal" : ""}`}>
      <div className="countdown-bg" />
      <div className="countdown-card">
        <div className="countdown-inner">
          <h1 className="countdown-number">{count > 0 ? count : ""}</h1>
          <p className="countdown-text">Preparing your experience</p>
          <div className="countdown-actions">
            <button className="countdown-skip" onClick={handleSkip}>
              Skip
            </button>
          </div>
        </div>
        <div className="countdown-footer">My Portfolio</div>
      </div>
    </div>
  );
}
