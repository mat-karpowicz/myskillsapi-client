import React from 'react';

import './styles/searchModule.scss';

function SearchModule(props) {
	async function getAllSkills(e) {
		e.preventDefault();
		await fetch('https://myskillsapi-server.herokuapp.com/api/skills')
			.then((response) => response.json())
			.then((data) => props.setSkills(data))
			.catch((err) => console.log(err));
	}

	return (
		<div className="search-module">
			<form className="form">
				<button onClick={getAllSkills} className="btn">
					<span className="text">GET all skills</span>
				</button>
				<button onClick={switchQueryDisplay} id="query-btn" className="btn">
					<span className="text">GET with query</span>
				</button>

				<div id="query-div" className="query-hidden">
					<input id="name" type="text" placeholder="skill name" />
					<input type="text" placeholder="skill type" />
					<input type="text" placeholder="tag for skill" />
					<button className="btn btn2">
						<span className="text">GET them</span>
					</button>
				</div>
			</form>
		</div>
	);
}

function switchQueryDisplay(e) {
	e.preventDefault();
	const element = document.getElementById('query-div');
	element.classList.toggle('query-shown');
}

export default SearchModule;
