// src/components/Blog.jsx

import { blogs } from "../data";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="blog-section">

      {/* ── HEADER ── */}
      <div className="blog-header">
        <p className="blog-label">// my writing & experiences</p>
        <h2 className="blog-title">Blogs &amp; <span>Experiences</span></h2>
      </div>

      {/* ── GRID ── */}
      <div className="blog-grid">
        {blogs.map((b) => (
          <div className="blog-card" key={b.id}>

            {/* ── TOP BAR like Aditi's article.exe ── */}
            <div className={`card-bar ${b.type === "experience" ? "bar-experience" : "bar-blog"}`}>
              <div className="bar-dots">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
              </div>
              <span className="bar-title">ARTICLE.EXE</span>
            </div>

            {/* ── BODY ── */}
            <div className="card-body">
              {/* type badge */}
              <span className={`card-type-badge ${b.type === "experience" ? "type-experience" : "type-blog"}`}>
                {b.emoji} {b.type === "experience" ? "Experience" : "Blog"}
              </span>

              {/* title */}
              <div className="card-emoji-title">
                <span className="card-emoji">{b.emoji}</span>
                <div className="card-title-text">{b.title}</div>
              </div>

              {/* summary */}
              <p className="card-summary">{b.summary}</p>
            </div>

            {/* ── DIVIDER ── */}
            <hr className="card-divider" />

            {/* ── TAGS ── */}
            <div className="card-tags">
              {b.tags.map((tag) => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>

            {/* ── FOOTER ── */}
            <div className="card-footer">
              <div className="card-meta">
                <span className="meta-date">{b.date}</span>
                <span className="meta-read">{b.readTime}</span>
              </div>

              {b.link ? (
                <a
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-btn"
                >
                  Read ↗
                </a>
              ) : null}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}