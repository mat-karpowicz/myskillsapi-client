import React from "react";
import mePhoto from "../assets/meNew.png";

import "./styles/about.scss";

function About() {
  return (
    <div className="about">
      <div className="first">
        <img src={mePhoto} alt="of me" className="photo" />
      </div>
      <div className="second">
        <p className="info">
          Thanks for coming! <br /> Check some of my skills using this tool.
          <br />
          Contact me whenever you’re ready.
        </p>

        <a
          className="safe-link"
          href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="safe"> &gt;Stay safe!&lt; </h4>
        </a>
      </div>
    </div>
  );
}
export default About;
