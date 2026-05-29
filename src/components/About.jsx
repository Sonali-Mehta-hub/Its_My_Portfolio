// src/components/About.jsx

import { Link } from "react-scroll";
import { about } from "../data";
import Terminal from "./Terminal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* ═══════════ LEFT CARD ═══════════ */}
      <div className="about-left">

        {/* Photo */}
        <div className="avatar-ring">
          <img
            src={about.avatar}
            alt={about.name}
            className="avatar-img"
          />
        </div>

        <h2 className="about-name">{about.name.split(" ")[0].toUpperCase()}⭐</h2>

        <div className="about-role">
          FULL_STACK_DEV + ML_EXPLORER()
        </div>

        <div className="about-divider" />

        {/* Info rows */}
        <div className="about-info-rows">
          <div className="about-info-row">
            <span className="info-tag tag-loc">[LOCATION]</span>
            <span className="info-val">{about.location}</span>
          </div>
          <div className="about-info-row">
            <span className="info-tag tag-status">[STATUS]</span>
            <span className="info-val">{about.status}</span>
          </div>
         
          <div className="about-info-row">
            <span className="info-tag tag-mission">[MISSION]</span>
            <span className="info-val">{about.tagline}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="about-btns">
          <a
            href={about.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            ⬇ DOWNLOAD_RESUME
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn-contact"
          >
            ✉ CONTACT ME
          </Link>
        </div>
      </div>

      {/* ═══════════ RIGHT BIO ═══════════ */}
      <div className="about-right">
        <h1 className="about-hi">Hi people! 👋</h1>

        <p className="about-bio">
          I am a <strong>3rd-year (pre-final) B.Tech CSE student</strong> at{" "}
          <strong>Amity University Jharkhand</strong>. I define myself as a{" "}
          <strong>Woman in STEM</strong> aspiring to build scalable software.
        </p>

        <p className="about-bio">
          I have hands-on experience in{" "}
          <strong>Full Stack Web Development</strong> using the MERN stack and
          completed an internship at{" "}
          <strong>IBM SkillsBuild</strong> working on AI/ML projects. Currently
          exploring <strong>Machine Learning &amp; Generative AI</strong>.
        </p>

        {/* Open to internships badge */}
        <div className="open-badge">
          🚀 Open to {about.openTo}
        </div>

        {/* Interactive Terminal */}
        <Terminal userData={about} />
      </div>

    </section>
  );
}