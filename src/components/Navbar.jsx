// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";


const navLinks = [
  { label: "About",          to: "about"          },
  { label: "Education",      to: "education"      },
  { label: "Skills",         to: "skills"         },
  { label: "Projects",       to: "projects"       },
  { label: "Certifications", to: "certifications" },
  { label: "Blog",           to: "blog"           },
];

const getDate = () =>
  new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month:   "numeric",
    day:     "numeric",
    year:    "numeric",
  });

export default function Navbar({ onContactClick }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [currentDate, setCurrentDate] = useState(getDate);

  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentDate(getDate()), 60000);
    return () => clearInterval(id);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      <div className="navbar__logo">PORTFOLIO_</div>

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

        {/* ✅ CHANGED — button instead of Link */}
        <li>
          <button onClick={onContactClick} className="navbar__contact">
            Contact
          </button>
        </li>
      </ul>

      <div className="navbar__date">
        <span className="navbar__date-dot" />
        {currentDate}
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={(e) => { e.stopPropagation(); setMenuOpen((prev) => !prev); }}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

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

          {/* ✅ CHANGED — button instead of Link */}
          <button
           onClick={() => { onContactClick(); handleLinkClick(); }}
           className="navbar__contact navbar__contact--mobile"
         >
            Contact
         </button>
        </div>
      )}
    </nav>
  );
}