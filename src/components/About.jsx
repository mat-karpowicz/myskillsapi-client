import React from "react";
import mePhoto from "../assets/meNew.png";
import "./styles/about.scss";

function About() {
  return (
    <div className="about">
      <div className="first">
        <img src={mePhoto} alt="" className="photo" />
      </div>
      <div className="second">
        <p className="info">
          <h4>Thanks for coming!</h4>
          <h4> Check some of my skills using this tool.</h4>
          <h4>Contact me whenever you’re ready.</h4>
          <h2 className="safe">Stay safe.</h2>
        </p>
      </div>
    </div>
  );
}
export default About;
