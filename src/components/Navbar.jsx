// src/components/Navbar.jsx
// ─────────────────────────────────────────────
// Install dependency first:
//   npm install react-scroll
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const navLinks = [
  { label: "About",        to: "about"        },
  { label: "Education",    to: "education"    },
  { label: "Skills",       to: "skills"       },
  { label: "Projects",     to: "projects"     },
  { label: "Certifications", to: "certifications" },
  { label: "Blog",         to: "blog"         },
];

// ── helper outside component so it never re-creates ──────────
const getDate = () =>
  new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month:   "numeric",
    day:     "numeric",
    year:    "numeric",
  });

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [currentDate, setCurrentDate] = useState(getDate); // ✅ no useEffect needed for init

  // ── subscribe to scroll (external system) ────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── update date every minute (external system = timer) ───
  useEffect(() => {
    const id = setInterval(() => setCurrentDate(getDate()), 60000);
    return () => clearInterval(id);
  }, []);

  // close mobile menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* ── Logo ── */}
      <div className="navbar__logo">PORTFOLIO_</div>

      {/* ── Desktop Links ── */}
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="navbar__link--active"
              className="navbar__link"
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Contact pill */}
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="navbar__contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* ── Date Badge ── */}
      <div className="navbar__date">
        <span className="navbar__date-dot" />
        {currentDate}
      </div>

      {/* ── Hamburger (mobile) ── */}
      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="navbar__mobile-link--active"
              className="navbar__mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar__contact navbar__contact--mobile"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}