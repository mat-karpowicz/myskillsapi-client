import React from 'react';
import './styles/skill.scss';

export default function Skill(props) {
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
							<h3 className="skill-exact">{skill.type}</h3>
							<h4 className="skill-title">Usage:</h4>
							<h3 className="skill-exact">{skill.usage}</h3>
						</div>

						<button onClick={scaleInfo} id="open" className="details-btn">
							more details
						</button>
					</div>
					<div className="overlay">
						<div className="popup">
							{skill.projects == 0 ? (
								<h1 className="projects-title">No Projects Yet - Stay Tuned</h1>
							) : (
								skill.projects.map((project) => (
									<div>
										<h1 className="projects-title">Project</h1>
										<div className="content-container">
											<div className="content">
												<h2>Title: {project.title} </h2>
												<h4>GitHub: {project.github} </h4>
												<h4>Live: {project.live}</h4>
											</div>
										</div>
									</div>
								))
							)}

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
	e.target.id === 'open'
		? e.target.parentNode.nextSibling.classList.add('overlay-active')
		: e.target.parentNode.parentNode.classList.remove('overlay-active');
}
