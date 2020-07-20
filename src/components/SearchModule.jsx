import React from 'react';
import './styles/searchModule.scss';

function SearchModule() {
	return (
		<div className="search-module">
			<form className="form">
				<button className="btn">
					<span className="text">GET all skills</span>
				</button>
				<button onClick={switchQueryDisplay} id="query-btn" className="btn">
					<span className="text">GET with query</span>
				</button>

				<div id="query-div" className="query-hidden">
					<input id="name" type="text" placeholder="skill name" />
					<input type="text" placeholder="skill type" />
					<input type="text" placeholder="tag for skill" />
					<button className="btn">
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
