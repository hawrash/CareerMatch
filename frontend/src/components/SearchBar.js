import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import majorsData from '../majors.json';
import Suggest from './Suggest';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState(''); // for error message
  const navigate = useNavigate();

  // Save search term to localStorage history
  const saveHistory = (term) => {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history = history.filter((t) => t.toLowerCase() !== term.toLowerCase());
    history.push(term); // add latest search
    localStorage.setItem('searchHistory', JSON.stringify(history));
  };

  // Handle search submit
  const handleSubmit = (term) => {
    const major = majorsData.find(
      (m) => m.fields.name.toLowerCase() === term.trim().toLowerCase()
    );

    if (major) {
      // If major exists, navigate and save history
      saveHistory(term);
      navigate(`/MajorsView/${major.pk}`);
      setSearchTerm('');
      setSuggestions([]);
      setMessage(''); // clear any previous message
    } else {
      // Show message on the page if not found
      setMessage('Major not found!');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setMessage(''); // clear message while typing

    if (value.length > 0) {
      const filtered = majorsData.filter((m) =>
        m.fields.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSelect = (name) => {
    setSearchTerm(name);
    handleSubmit(name);
  };

  return (
    <div className="search-bar-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(searchTerm);
        }}
      >
        <input
          type="text"
          placeholder="Search for a major..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error message displayed on the page */}
      {message && <div className="error-page-message">{message}</div>}

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <Suggest suggestions={suggestions} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default SearchBar;
