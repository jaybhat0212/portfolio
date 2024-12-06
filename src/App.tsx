import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Education,
  Project,
  Navigation,
  Footer,
} from "./components";
import Background from "./components/Background";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation props={{ mode }} modeChange={handleModeChange} />
      <Main />
      <Timeline />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
