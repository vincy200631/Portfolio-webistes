import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AchievementsModal from "./components/AchievementsModal";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
        <button className="btn" onClick={() => setShowModal(true)}>Achievements</button>
      </div>
      {showModal && <AchievementsModal onClose={() => setShowModal(false)} />}
      <Contact />
      <footer></footer>
    </>
  );
}

export default App;
  
