import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import history from '../assets/history.png';
import favorite from '../assets/favorite.png';
import logout from '../assets/logout.png';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // clear user info
    navigate('/'); // redirect to Landing page
  };

  return (
    <nav className="Navbar">
      {/* Logo goes to /home */}
      <Link to="/home" className="navLink">
        <img src={logo} alt="Logo" className="navIcon" />
      </Link>

      <div className="navLinks">
        {/* Logout icon as button */}
        <button onClick={handleLogout} className="navIconButton">
          <img src={logout} alt="Logout" className="navIcon" />
        </button>

        <Link to="/history" className="navLink">
          <img src={history} alt="History" className="navIcon" />
        </Link>

        <Link to="/favorites" className="navLink">
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
