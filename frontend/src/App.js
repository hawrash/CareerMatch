import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Favorite from './pages/Favorite'; // singular
import MajorsView from './pages/MajorsView';
import Profile from './pages/Profile';
import History from './pages/History';

function App() {
  const location = useLocation();
  const noNavFooter = ['/', '/login', '/signup'];
  const hideNavFooter = noNavFooter.includes(location.pathname);

  return (
    <div className="app">
      {!hideNavFooter && <Navbar />}

      <div className={!hideNavFooter ? "container" : ""}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorites" element={<Favorite />} /> 
          <Route path="/MajorsView/:id" element={<MajorsView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default App;
