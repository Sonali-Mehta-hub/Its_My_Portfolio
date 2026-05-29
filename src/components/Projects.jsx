// src/components/Projects.jsx

import { projects } from "../data";
import "./Projects.css";

// badge type per project
const getBadge = (project) => {
  if (project.live) return { cls: "badge-live", label: "● Live" };
  if (project.tags.some(t => ["Python","Scikit-learn","ML","NumPy","Pandas"].includes(t)))
    return { cls: "badge-ml", label: "ML Model" };
  if (project.tags.some(t => t.toLowerCase().includes("extension")))
    return { cls: "badge-ext", label: "Chrome Ext" };
  return null;
};

export default function Projects() {
  return (
    <section id="projects" className="proj-section">

      {/* ── HEADER ── */}
      <div className="proj-header">
        <p className="proj-label">// things i've built</p>
        <h2 className="proj-title">Pro<span>jects</span></h2>
      </div>

      {/* ── GRID ── */}
      <div className="proj-grid">
        {projects.map((p) => {
          const badge = getBadge(p);
          return (
            <div
              key={p.id}
              className={`proj-card ${p.featured && p.id === 1 ? "featured" : ""}`}
            >
              {/* card header */}
              <div className="card-head">
                <div className="card-head-left">
                  <div className="card-name">{p.name}</div>
                  {badge && (
                    <div className="card-badges">
                      <span className={`badge ${badge.cls}`}>{badge.label}</span>
                    </div>
                  )}
                </div>

                {/* links */}
                <div className="card-links">
                  {p.githubLink && (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                      title="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                      </svg>
                    </a>
                  )}
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                      title="Live Demo"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>

              {/* description */}
              <p className="card-desc">{p.desc}</p>

              {/* tags */}
              <div className="card-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}