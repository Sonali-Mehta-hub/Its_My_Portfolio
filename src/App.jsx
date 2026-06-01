import { useState } from "react";
import Navbar from "./components/Navbar";
import MagicBento from "./components/MagicBento";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Countdown from "./components/Countdown";
import Contact from "./components/Contact";
import Achievments from "./components/Achievments";

export default function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [appRevealed, setAppRevealed] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);


  return (
    <>
      <MagicBento />
      <div className={`app-root ${appRevealed ? "entered" : ""}`}>
        <div className="app-shell">
          <Navbar onContactClick={() => setContactOpen(true)} />
          <About onContactClick={() => setContactOpen(true)} />
          <Skill />
          <Projects />
          <Blog />
          <Education />
          <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
          <Achievments
            open={certOpen}
            onClose={() => setCertOpen(false)}
            onOpen={() => setCertOpen(true)}
          />
        </div>
      </div>

      {showCountdown && (
        <Countdown
          seconds={5}
          onStartReveal={() => setAppRevealed(true)}
          onComplete={() => setShowCountdown(false)}
        />
      )}
    </>
  );
}
