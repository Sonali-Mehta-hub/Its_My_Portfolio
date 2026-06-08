// src/components/Achievments.jsx

import { useEffect, useState, useCallback } from "react";
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
  const [selectedCert, setSelectedCert] = useState(null);

  const handleModalClose = useCallback(() => {
    setSelectedCert(null);
    onClose();
  }, [onClose]);

  // close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") handleModalClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleModalClose]);

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
          {/* prominent thank-you text (separate from marquee) */}
          <div className="cert-thankyou" aria-hidden="false">
            Thank you for visiting !!!
          </div>

          {/* marquee strip (opportunities) */}
          <div className="cert-marquee" aria-hidden="true">
            <div className="cert-marquee-track">
              <span>
                Open for Software Development Internship & Machine Learning opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPUP MODAL via portal ── */}
      {open &&
        createPortal(
          <div
            className="cert-overlay"
            onClick={(e) => {
              if (e.target.classList.contains("cert-overlay")) handleModalClose();
            }}
          >
            <div className="cert-modal">
              {/* heading */}
              <div className="cert-modal-head">
                <div className="cert-modal-title">
                  {selectedCert ? "Certificate Details" : "Certifications 🏆"}
                </div>
                <div className="cert-modal-actions">
                  {selectedCert && (
                    <button
                      className="cert-back-btn"
                      onClick={() => setSelectedCert(null)}
                    >
                      ← Back
                    </button>
                  )}
                  <button className="cert-close-x" onClick={handleModalClose}>
                    ✕
                  </button>
                </div>
              </div>

              {/* list */}
              {selectedCert ? (
                <div className="cert-detail">
                  <div className="cert-detail-header">
                    <div className="cert-detail-name">{selectedCert.title}</div>
                    <div className="cert-detail-meta">
                      {selectedCert.issuer} · {selectedCert.year}
                    </div>
                  </div>

                  <div className="cert-preview">
                    {selectedCert.pdf ? (
                      <iframe
                        src={selectedCert.pdf}
                        title={`Certificate preview: ${selectedCert.title}`}
                      />
                    ) : (
                      <div className="cert-image-fallback">
                        Certificate preview is not available yet.
                      </div>
                    )}
                  </div>

                  <p className="cert-detail-desc">{selectedCert.desc}</p>

                  {selectedCert.details?.length > 0 && (
                    <ul className="cert-detail-list">
                      {selectedCert.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {selectedCert.pdf && (
                    <a
                      className="cert-view-link"
                      href={selectedCert.pdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open full certificate
                    </a>
                  )}
                </div>
              ) : (
                <div className="cert-list">
                  {certifications.map((cert, idx) => (
                    <div
                      key={cert.id}
                      className="cert-item"
                      style={{ background: cardColors[idx % cardColors.length] }}
                      onClick={() => setSelectedCert(cert)}
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
              )}

              {/* close button */}
              <button className="cert-modal-close" onClick={handleModalClose}>
                CLOSE
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
