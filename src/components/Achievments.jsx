// src/components/Achievments.jsx

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { certifications } from "../data";
import "./Achievments.css";

// ── card colors cycling ──────────────────────
const cardColors = [
  "#FFF9C4", // yellow
  "#BBDEFB", // blue
  "#F8BBD0", // pink
  "#C8E6C9", // green
  "#E1BEE7", // purple
  "#FFE0B2", // orange
];

export default function Achievments({ open, onClose, onOpen }) {
  // close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── SECTION — anchor for navbar scroll ── */}
      <section id="certifications" className="cert-section">
        <div className="cert-inner">
          <p className="cert-label">// my achievements</p>
          <h2 className="cert-title">
            Certifi<span>cations</span>
          </h2>
          <p className="cert-sub">
            Certifications, achievements & recognitions I've earned along the
            way.
          </p>
          {/* Achievments.jsx mein button */}
          <button className="cert-open-btn" onClick={onOpen}>
            🏆 View All Certifications
          </button>
        </div>
      </section>

      {/* ── POPUP MODAL via portal ── */}
      {open &&
        createPortal(
          <div
            className="cert-overlay"
            onClick={(e) => {
              if (e.target.classList.contains("cert-overlay")) onClose();
            }}
          >
            <div className="cert-modal">
              {/* heading */}
              <div className="cert-modal-head">
                <div className="cert-modal-title">Certifications 🏆</div>
                <button className="cert-close-x" onClick={onClose}>
                  ✕
                </button>
              </div>

              {/* list */}
              <div className="cert-list">
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="cert-item"
                    style={{ background: cardColors[idx % cardColors.length] }}
                  >
                    <div className="cert-emoji">{cert.icon}</div>
                    <div className="cert-info">
                      <div className="cert-name">{cert.title}</div>
                      <div className="cert-desc">{cert.desc}</div>
                    </div>
                    <div className="cert-year">{cert.year}</div>
                  </div>
                ))}
              </div>

              {/* close button */}
              <button className="cert-modal-close" onClick={onClose}>
                CLOSE
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
