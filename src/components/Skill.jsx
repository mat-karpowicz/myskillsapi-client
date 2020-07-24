import React, { useEffect } from "react";
import "./styles/skill.scss";

export default function Skill(props) {
  useEffect(() => {
    const elements = document.getElementsByClassName("type");
    Array.from(elements).forEach((elem) => {
      props.showSkills.forEach((type) => {
        if (elem.textContent === type.id) {
          if (type.checked === true) {
            elem.parentElement.parentElement.style.display = "flex";
          } else {
            elem.parentElement.parentElement.style.display = "none";
          }
        }
      });
    });
  }, [props.showSkills]);

  return (
    <div className="skills-container">
      {props.skills.map((skill) => (
        <div key={skill._id}>
          <div className="card">
            <div className="card-title">
              <h3>{skill.display_name}</h3>
            </div>
            <div className="card-info">
              <h4 className="skill-title"> Type:</h4>
              <h3 className="skill-exact type">{skill.type}</h3>
              <h4 className="skill-title">Usage:</h4>
              <h3 className="skill-exact type">{skill.usage}</h3>
            </div>

            <button onClick={scaleInfo} id="open" className="details-btn">
              more details
            </button>
          </div>
          <div className="overlay">
            <div className="popup">
              {skill.projects == 0 ? (
                <h1 className="projects-title no-projects">
                  No Projects Yet - Stay Tuned
                </h1>
              ) : (
                <div>
                  {" "}
                  <h1 className="projects-title">Projects</h1>
                  {skill.projects.map((project) => (
                    <div key={project.title}>
                      <div className="content-container">
                        <div className="content">
                          <div>
                            <h4 className="project-header">Title:</h4>
                            <h5 className="project-details title">
                              {project.title}
                            </h5>
                          </div>
                          <div>
                            <h4 className="project-header">Description:</h4>
                            <h5 className="project-details">
                              {project.description}
                            </h5>
                          </div>
                          <div>
                            <h4 className="project-header">GitHub:</h4>
                            <h5 className="project-details">
                              <a href={project.github}> {project.github}</a>
                            </h5>
                          </div>
                          <div>
                            <h4 className="project-header">Live:</h4>
                            <h5 className="project-details">
                              <a href={project.live}>{project.live}</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <hr className="hr-line" />
                    </div>
                  ))}
                </div>
              )}

              <button id="close" className="details-btn" onClick={scaleInfo}>
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
  e.target.id === "open"
    ? e.target.parentNode.nextSibling.classList.add("overlay-active")
    : e.target.parentNode.parentNode.classList.remove("overlay-active");
}
