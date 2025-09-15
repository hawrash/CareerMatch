import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Majorly</h1>
      
      <div className="landing-buttons">
        <button className="primary" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="primary" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Landing;
