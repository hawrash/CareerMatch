import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import history from '../assets/history.png';
import favorite from '../assets/favorite.png';

function Navbar() {
  return (
    <nav className="Navbar">
      {/* Logo on the left */}
      <Link to="/" className="navLink">
        <img src={logo} alt="Logo" className="navIcon" />
      </Link>

      {/* Other links on the right */}
      <div className="navLinks">
        <Link to="/history" className="navLink">
          <img src={history} alt="History" className="navIcon" />
        </Link>

        <Link to="/favorite" className="navLink">
          <img src={favorite} alt="Favorite" className="navIcon" />
        </Link>

        <Link to="/profile" className="navLink">
          <img src={profile} alt="Profile" className="navIcon" />
        </Link>

       
      </div>
    </nav>
  );
}

export default Navbar;
