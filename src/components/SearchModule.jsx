import React from "react";

import "./styles/searchModule.scss";

function SearchModule(props) {
  async function getAllSkills(e) {
    e.preventDefault();
    await fetch("https://myskillsapi-server.herokuapp.com/api/skills")
      .then((response) => response.json())
      .then((data) => props.setSkills(data))
      .catch((err) => console.log(err));
  }

  async function getSkillsQuery(e) {
    e.preventDefault();
    const skillName = document.getElementById("name").value;
    const skillType = document.getElementById("type").value;
    const skillTag = document.getElementById("tag").value;
    const queryUrl = `/?name=${skillName}&type=${skillType}&tag=${skillTag}`;

    await fetch(
      `https://myskillsapi-server.herokuapp.com/api/skills${queryUrl}`
    )
      .then((response) => response.json())
      .then((data) => props.setSkills(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="search-module">
      <button onClick={getAllSkills} className="btn">
        <span className="text">GET all skills</span>
      </button>
      <button onClick={switchQueryDisplay} id="query-btn" className="btn">
        <span className="text">GET with query</span>
      </button>

      <form>
        <div id="query-div" className="query-hidden">
          <input id="name" type="text" placeholder="skill name" />
          <input id="type" type="text" placeholder="skill type" />
          <input id="tag" type="text" placeholder="tag for skill" />
          <button type="submit" onClick={getSkillsQuery} className="btn btn2">
            <span className="text">GET THEM</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function switchQueryDisplay(e) {
  e.preventDefault();
  const element = document.getElementById("query-div");
  element.classList.toggle("query-shown");
}

export default SearchModule;
