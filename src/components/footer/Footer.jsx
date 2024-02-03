import React from "react";
import "./footer.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="myPortfolio__footer">
      <div className="container1">
        <div className="footer">
          <h2>© 2023 Rajasthan India , Inc. All rights reserved</h2>
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
      </div>
    </footer>
  );
};
export default Footer;
