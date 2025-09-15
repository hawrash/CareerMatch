import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MajorsList from './pages/MajorsList';
import MajorDetail from './pages/MajorDetail';

import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/majors" element={<MajorsList />} />
        <Route path="/majors/:id" element={<MajorDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
