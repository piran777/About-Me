import React from 'react';
import './Footer.css';
import linkedinIcon from '../Assets/linkedin.png';  // Ensure these paths are correct
import githubIcon from '../Assets/github.png';  // Ensure these paths are correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/piran777" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      <div className="email">
        <p>Email: piranaminullah@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
