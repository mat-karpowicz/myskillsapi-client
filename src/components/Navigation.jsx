import React from "react";

import "./styles/navigation.scss";
import mePhoto from "../assets/mePhoto.png";
import logo from "../assets/logo-small.png";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-header">
        <img src={logo} alt="of me" className="logo" />
        <h4 className="title">
          <a href="/" className="home">
            MySkills API
          </a>
        </h4>
      </div>
      <div className="nav-container">
        <div onClick={openNav} className="nav-btn" id="btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links unactive" id="nav-links">
          <a href="https://karpowiczm.pl" target="_blank" rel="noopener noreferrer">
            myWebsite
          </a>
          <a
            href="https://github.com/mat-karpowicz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="https://www.linkedin.com/in/karpowiczm/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <img className="photo-me" src={mePhoto} alt="of me" />
        </div>
      </div>
    </nav>
  );
}

function openNav() {
  const navLinks = document.getElementById("nav-links");
  const appDiv = document.getElementById("app");

  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    appDiv.style.position = "fixed";
    appDiv.style.overflow = "hidden";
  } else {
    appDiv.style.position = "unset";
    appDiv.style.overflow = "auto";
  }
}

export default Navigation;
