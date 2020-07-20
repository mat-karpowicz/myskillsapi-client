import React, { useState } from "react";
import Navigation from "./components/Navigation";
import SearchModule from "./components/SearchModule";
import About from "./components/About";
import Skill from "./components/Skill";
import "./app.scss";

function App() {
  const [skills, setSkills] = useState([]);
  console.log(skills);

  return (
    <div className="App">
      <Navigation />
      <main className="main">
        <SearchModule setSkills={setSkills} />
        {skills.length === 0 ? <About /> : <Skill skills={skills} />}
      </main>
    </div>
  );
}

export default App;
