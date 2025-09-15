import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import majorsData from '../majors.json';
import Suggest from './Suggest';

function SearchBar({ searchTerm, setSearchTerm }) {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const saveHistory = (term) => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(term)) {
      history.push(term);
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }
  };

  const handleSubmit = (term) => {
    const major = majorsData.find(
      (m) => m.fields.name.toLowerCase() === term.trim().toLowerCase()
    );
    if (major) {
      saveHistory(term); // save to LocalStorage
      navigate(`/MajorsView/${major.pk}`);
    } else {
      alert('Major not found!');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = majorsData.filter((m) =>
        m.fields.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
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
      {suggestions.length > 0 && (
        <Suggest suggestions={suggestions} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default SearchBar;
