import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logoImage} alt="Naveen Sudharsan Logo" className="logo-image" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/updates">Updates</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
