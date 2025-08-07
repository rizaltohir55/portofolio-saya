import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePhoto from '../assets/images/profile-pic.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={profilePhoto} alt="Rizal Tohir" className="footer-logo-img" />
        <div className="footer-logo-text">
          <h3>Rizal Tohir</h3>
          <p>Creative Developer</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="https://github.com/rizaltohir55" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size="1.5em" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size="1.5em" />
        </a>
        <a href="mailto:email@contoh.com" aria-label="Email">
          <FaEnvelope size="1.5em" />
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {currentYear} Rizal Tohir. Semua Hak Cipta Dilindungi.
      </div>
    </footer>
   );
}

export default Footer;
