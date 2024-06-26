import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import linkedinIcon from '../Assets/linkedin.png'; 
import githubIcon from '../Assets/github.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/About-Me/contact" className="cta-button">Let's Connect</Link>
        <ul className="nav-links">
          <li><NavLink to="/About-Me" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/About-Me/about" activeClassName="active">Experience</NavLink></li>
          <li><NavLink to="/About-Me/resume" activeClassName="active">Resume</NavLink></li>
          <li><NavLink to="/About-Me/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <div className="nav-right">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/piran-aminullah-a57221220/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn Profile" />
            </a>
            <a href="https://github.com/piran777" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Profile" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
