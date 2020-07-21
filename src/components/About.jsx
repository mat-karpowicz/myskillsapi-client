import React from 'react';
import mePhoto from '../assets/meNew.png';
import './styles/about.scss';

function About() {
	return (
		<div className="about">
			<div className="first">
				<img src={mePhoto} alt="" className="photo" />
			</div>
			<div className="second">
				<p className="info">
					Thanks for coming! <br /> Check some of my skills using this tool. <br />Contact me whenever you’re
					ready.
				</p>
				<h4 className="safe">Stay safe!</h4>
			</div>
		</div>
	);
}
export default About;
