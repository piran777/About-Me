import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import linkedinIcon from '../Assets/linkedin.png'; 
import githubIcon from '../Assets/github.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/contact" className="cta-button">Let's Connect</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Experience</Link></li>
          <li><a href="/Piran Aminullah Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-right">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/piran777" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
