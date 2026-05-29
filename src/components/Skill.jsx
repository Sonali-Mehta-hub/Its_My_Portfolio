// src/components/Skill.jsx

import { skills } from "../data";
import "./Skill.css";

const cardClass = {
  "cat-lang":  "card-lang",
  "cat-fe":    "card-fe",
  "cat-be":    "card-be",
  "cat-db":    "card-db",
  "cat-ml":    "card-ml",
  "cat-tools": "card-tools",
  "cat-cs":    "card-cs",
};

export default function Skill() {
  return (
    <section id="skills" className="skills-section">

      {/* ── HEADER ── */}
      <div className="skills-header">
        <p className="skills-label">// what i work with</p>
        <h2 className="skills-title">Ski<span>lls</span></h2>
      </div>

      {/* ── GRID ── */}
      <div className="skills-grid">
        {skills.map((s) => (
          <div
            key={s.id}
            className={`skill-card ${cardClass[s.colorClass] || "card-lang"} ${
              s.colorClass === "cat-cs" ? "card-full" : ""
            }`}
          >
            <div className={`cat-label ${s.colorClass}`}>
              {s.cat}
            </div>
            <div className="skill-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}