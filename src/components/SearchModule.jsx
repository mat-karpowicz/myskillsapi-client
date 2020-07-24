import React, { useState } from "react";
import Error from "./Error";
import Loader from "./Loader";

import "./styles/searchModule.scss";

function SearchModule(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getAllSkills(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    await fetch("https://myskillsapi-server.herokuapp.com/api/skills")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        props.setSkills(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  async function getSkillsQuery(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const skillName = document.getElementById("name").value;
    const skillType = document.getElementById("type").value;
    const skillTag = document.getElementById("tag").value;
    const queryUrl = `/?name=${skillName}&type=${skillType}&tag=${skillTag}`;

    await fetch(
      `https://myskillsapi-server.herokuapp.com/api/skills${queryUrl}`
    )
      .then((response) => response.json())
      .then((data) => props.setSkills(data))
      .then(() => setLoading(false))
      .catch((err) => setError(true));
  }

  function switchQueryDisplay(e) {
    e.preventDefault();
    setError(false);
    const element = document.getElementById("query-div");
    element.classList.toggle("query-shown");
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
      {loading === true ? <Loader /> : null}
      {error === true ? <Error /> : null}
    </div>
  );
}

export default SearchModule;
