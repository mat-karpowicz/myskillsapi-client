import React from "react";
import "./styles/skill.scss";

export default function Skill(props) {
  return (
    <div className="skills-container">
      {props.skills.map((skill) => (
        <div>
          <div class="card">
            <div className="card-title">
              <h3>{skill.display_name}</h3>
            </div>
            <div className="card-info">
              <h6 className="skill">
                Type: <h6 className="skill-info">{skill.type}</h6>
              </h6>
              <h6 className="skill">
                Usage:<h6 className="skill-info">{skill.usage}</h6>{" "}
              </h6>

              <button id="open" onClick={scaleInfo} className="btn-details">
                Check details
              </button>
            </div>
          </div>
          <div className="overlay">
            <div class="popup">
              <h2>Here i am</h2>
              <div class="content">
                Thank to pop me out of that button, but now i'm done so you can
                close this window.
              </div>
              <button id="close" onClick={scaleInfo}>
                Close
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function scaleInfo(e) {
  e.preventDefault();
  console.log(e.target.parentNode.parentNode);

  e.target.id === "open"
    ? e.target.parentNode.parentNode.nextSibling.classList.add("overlay-active")
    : e.target.parentNode.parentNode.calssList.remove("overlay-active");
}
