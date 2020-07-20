import React from 'react';
import './styles/navigation.scss';
import mePhoto from '../assets/mePhoto.png';
import logo from '../assets/logo-small.png';

function Navigation() {
	return (
		<nav class="nav">
			<div class="nav-header">
				<img src={logo} alt="" className="logo" />
				<h4 className="title">MySkills API</h4>
			</div>
			<div className="nav-container">
				<div onClick={openNav} class="nav-btn" id="btn">
					<label for="nav-check">
						<span />
						<span />
						<span />
					</label>
				</div>
				<div class="nav-links unactive" id="nav-links">
					<a href="#" target="_blank">
						About
					</a>
					<a href="#" target="_blank">
						mk.dev()
					</a>
					<a href="#" target="_blank">
						Github
					</a>
					<a href="#" target="_blank">
						LinkedIn
					</a>
					<img className="photo-me" src={mePhoto} alt="photo of me" />
				</div>
			</div>
		</nav>
	);
}

function openNav() {
	console.log('here');
	const navLinks = document.getElementById('nav-links');
	navLinks.classList.toggle('active');

	console.log(navLinks.classList);
}

export default Navigation;
