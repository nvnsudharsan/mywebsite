import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Created by Naveen Sudharsan</p>
      <div className="footer-icons">
        <a href="mailto:nvnsudharsan@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/naveensudharsan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nvnsudharsan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://scholar.google.com/citations?user=Ko0F2n0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          <FaGraduationCap />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
