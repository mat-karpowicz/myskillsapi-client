import React, { useState } from "react";
import Navigation from "./components/Navigation";
import SearchModule from "./components/SearchModule";
import About from "./components/About";
import Skill from "./components/Skill";
import Filter from "./components/Filter";
import "./app.scss";

function App() {
  const [skills, setSkills] = useState([]);
  const [showSkills, setShowSkills] = useState([]);

  return (
    <div className="App" id="app">
      <Navigation />
      <main className="main">
        {skills.length === 0 ? (
          <SearchModule setSkills={setSkills} />
        ) : (
          <Filter setShowSkills={setShowSkills} setSkills={setSkills} />
        )}
        {skills.length === 0 ? (
          <About />
        ) : (
          <Skill skills={skills} showSkills={showSkills} />
        )}
      </main>
    </div>
  );
}

export default App;
