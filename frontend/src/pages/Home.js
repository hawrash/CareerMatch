import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import majorsData from '../majors.json';

function Home() {
  const [hobby, setHobby] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const filterMajors = (input) => {
    if (!input.trim()) return [];

    const words = input.toLowerCase().split(' ').filter(w => w.trim() !== '');
    const matchedMajors = majorsData.filter(major => {
      const fields = major.fields;
      return words.some(word =>
        Object.values(fields).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(word);
          } else if (Array.isArray(value)) {
            return value.some(
              item => typeof item === 'string' && item.toLowerCase().includes(word)
            );
          }
          return false;
        })
      );
    }).map(m => m.fields.name);

    return matchedMajors;
  };

  const getAISuggestions = () => {
    const matched = filterMajors(hobby);
    setSuggestions(matched.length > 0 ? matched : ['General Studies']);
  };

  const handleSearch = () => {
    const matched = majorsData.find(
      m => m.fields.name.toLowerCase() === searchQuery.trim().toLowerCase()
    );
    if (matched) {
      navigate(`/MajorsView/${matched.pk}`);
    } else {
      alert('Major not found!');
    }
  };

  const handleSuggestionClick = (majorName) => {
    setSearchQuery(majorName);
    setSuggestions([]);
    const matched = majorsData.find(
      m => m.fields.name.toLowerCase() === majorName.toLowerCase()
    );
    if (matched) {
      navigate(`/MajorsView/${matched.pk}`);
    }
  };

  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to Majorly</h1>
      </div>

      <div className="bottom-top-section">
        {/* Left: Hobby Input */}
        <div className="left-bottom">
          <div className="hobby-box">
            <input
              type="text"
              placeholder="Type Key word..."
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            <button onClick={getAISuggestions}>Get Suggested Majors</button>
          </div>

          {suggestions.length > 0 && (
            <div className="suggestions">
              <ul>
                {suggestions.map((major, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(major)}>
                    {major}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Search Bar */}
        <div className="right-bottom">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a major..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
