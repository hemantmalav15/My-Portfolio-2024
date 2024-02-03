import React from "react";
import "./hero.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import main from "../../assets/profile-photo.jpeg";
import Skills from "../../components/skills/Skills";
const Hero = () => {
  return (
    <section className="myPortfolio__hero" id="home">
      <div className="container">
        <div className="hero__main">
          <div className="hero-text">
            <h1>Front-End React Developer 👋</h1>
            <p>
              Hi, I am Hemant Malav, a curious Front-end React Developer hailing
              from Rajasthan, India. 📍
            </p>
            <span>
              <a href="https://www.instagram.com/_hemant_dhakad_/" target="_blank">
              <AiFillInstagram></AiFillInstagram>
              </a>
              <a
                href="https://www.linkedin.com/in/hemant46/"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href="https://github.com/hemantmalav15" target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
            </span>
          </div>
          <div className="hero-image vibrate-1">
            <img src={main} alt="Main-Image" className="main-img" />
          </div>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
};

export default Hero;
