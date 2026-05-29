
import Navbar from "./components/Navbar";
import MagicBento from "./components/MagicBento";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

export default function App() {
  return (
    <>
      <MagicBento />
      <div className="app-shell">
        <Navbar />
        <About />
        <Skill />
        <Projects />
        <Blog />
        <Education />

      </div>
    </>
  );
}
