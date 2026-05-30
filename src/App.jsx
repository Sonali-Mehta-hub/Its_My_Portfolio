
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

export default function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [appRevealed, setAppRevealed] = useState(false);

  return (
    <>
      <MagicBento />
      <div className={`app-root ${appRevealed ? "entered" : ""}`}>
        <div className="app-shell">
          <Navbar />
          <About />
          <Skill />
          <Projects />
          <Blog />
          <Education />
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
