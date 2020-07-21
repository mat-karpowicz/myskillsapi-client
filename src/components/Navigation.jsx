import React from "react";
import "./styles/navigation.scss";
import mePhoto from "../assets/mePhoto.png";
import logo from "../assets/logo-small.png";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-header">
        <img src={logo} alt="" className="logo" />
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
  const navLinks = document.getElementById("nav-links");
  const app = document.getElementById("app");

  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    app.style.position = "fixed";
    app.style.overflow = "hidden";
  } else {
    app.style.position = "unset";
    app.style.overflow = "auto";
  }
}

export default Navigation;
