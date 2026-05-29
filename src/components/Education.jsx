// src/components/Education.jsx

import { useState, useEffect } from "react";
import { education } from "../data";
import "./Education.css";

// which sticky color & spine per education entry
const themes = [
  { sticky: "sticky-yellow", bookCls: "pg-yellow", spine: "spine-yellow" },
  { sticky: "sticky-pink",   bookCls: "pg-pink",   spine: "spine-pink"   },
  { sticky: "sticky-cyan",   bookCls: "pg-cyan",   spine: "spine-cyan"   },
];

const icons = ["🎓", "📚", "✏️"];

export default function Education() {
  const [open,    setOpen]    = useState(false);
  const [active,  setActive]  = useState(null);

  const openBook = (idx) => {
    setActive(idx);
    setOpen(true);
  };

  const closeBook = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
  }, [open]);

  const cur   = active !== null ? education[active] : null;
  const theme = active !== null ? themes[active] : themes[0];

  return (
    <section id="education" className="edu-section">

      {/* ── HEADER ── */}
      <div className="edu-header">
        <p className="edu-label">// my academic journey</p>
        <h2 className="edu-title">Edu<span>cation</span></h2>
      </div>

      {/* ── PINBOARD ── */}
      <div className="pinboard">
        {education.map((edu, idx) => (
          <div
            key={edu.id}
            className={`sticky ${themes[idx].sticky}`}
            onClick={() => openBook(idx)}
          >
            <div className="pin" />
            <div className="s-year">{edu.year}</div>
            <span className="s-icon">{icons[idx]}</span>
            <div className="s-degree">{edu.degree}</div>
            <div className="s-school">{edu.institution}</div>
            <div className="s-score">{edu.score}</div>
            <div className="s-hint">tap to open →</div>
          </div>
        ))}
      </div>

      <p className="edu-hint">↑ click any sticky note to open book</p>

      {/* ── OVERLAY ── */}
      {open && (
        <div
          className="edu-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("edu-overlay")) closeBook();
          }}
        >
          <div className="book-modal">

            {/* BOOK */}
            <div className={`book ${theme.bookCls}`}>

              {/* LEFT PAGE */}
              <div className="page-left">
                <div className="curl-bl" />
                <div className="pg-inner">
                  <div className="pg-stamp">{cur.year}</div>
                  <div className="pg-degree">{cur.degree}</div>
                  <div className="pg-school">📍 {cur.institution}</div>
                  {cur.board && <div className="pg-board">{cur.board}</div>}
                  <div className="pg-score">
                    {active === 0 ? "⭐" : "🎯"} {cur.score}
                  </div>

                  {cur.coursework && cur.coursework.length > 0 && (
                    <>
                      <div className="pg-divider" />
                      <div className="pg-hand">Coursework</div>
                      <div className="pg-tags">
                        {cur.coursework.map((c) => (
                          <span key={c} className="pg-tag">{c}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {cur.focus && !cur.coursework?.length && (
                    <>
                      <div className="pg-divider" />
                      <div className="pg-label">Stream</div>
                      <div className="pg-note">{cur.focus}</div>
                    </>
                  )}

                  <div className="pg-pagenum l">— 1 —</div>
                </div>
              </div>

              {/* SPINE */}
              <div className={`spine ${theme.spine}`} />

              {/* RIGHT PAGE */}
              <div className="page-right">
                <div className="curl-br" />
                <div className="pg-inner right">

                  {/* B.Tech right page */}
                  {active === 0 && (
                    <>
                      <div className="pg-label">Focus Area</div>
                      <div className="pg-note">{cur.focus}</div>
                      <div className="pg-divider" />
                      <div className="pg-label">Internship</div>
                      <div className="pg-note">
                        IBM SkillsBuild AI/ML Intern (June–July 2025).
                        Python, Scikit-learn &amp; IBM Watson Studio.
                      </div>
                      <div className="pg-divider" />
                      <div className="pg-hand">Highlights</div>
                      <div className="pg-tags">
                        <span className="pg-tag">NPTEL Top 2%</span>
                        <span className="pg-tag">BIT Mesra Finalist</span>
                        <span className="pg-tag">IBM Certified</span>
                      </div>
                    </>
                  )}

                  {/* XII right page */}
                  {active === 1 && (
                    <>
                      <div className="pg-label">Key Subjects</div>
                      <div className="pg-tags">
                        <span className="pg-tag">Physics</span>
                        <span className="pg-tag">Chemistry</span>
                        <span className="pg-tag">Mathematics</span>
                        <span className="pg-tag">Computer Sc.</span>
                      </div>
                      <div className="pg-divider" />
                      <div className="pg-label">Milestone</div>
                      <div className="pg-note">
                        Scored 90% with distinction. Wrote first programs
                        in C++ here — where coding truly began! 💻
                      </div>
                      <div className="pg-divider" />
                      <div className="pg-label">Board</div>
                      <div className="pg-note">Jharkhand Academic Council (JAC)</div>
                    </>
                  )}

                  {/* X right page */}
                  {active === 2 && (
                    <>
                      <div className="pg-label">Foundation</div>
                      <div className="pg-note">
                        Where it all started! Love for Mathematics &amp;
                        Science grew here.
                      </div>
                      <div className="pg-divider" />
                      <div className="pg-label">Board</div>
                      <div className="pg-note">Jharkhand Academic Council (JAC)</div>
                      <div className="pg-divider" />
                      <div className="pg-label">Milestone</div>
                      <div className="pg-note">
                        First step of the academic journey — curiosity
                        for computers sparked here! 🌱
                      </div>
                    </>
                  )}

                  <div className="pg-pagenum r">— 2 —</div>
                </div>
              </div>

              <div className="book-glow" />
            </div>

            {/* CLOSE */}
            <button className="close-btn" onClick={closeBook}>
              ✕ Close Book
            </button>
          </div>
        </div>
      )}
    </section>
  );
}