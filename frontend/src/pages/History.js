import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import majorsData from '../majors.json';   // ✅ import here
import './History.css';

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(storedHistory); // already latest-first
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  const handleClick = (term) => {
    const major = majorsData.find(
      (m) => m.fields.name.toLowerCase() === term.toLowerCase()
    );
    if (major) {
      navigate(`/MajorsView/${major.pk}`);
    }
  };

  return (
    <div className="history-page-container">
      <div className="history-content">
        <h2>Search History</h2>
        <button onClick={clearHistory}>Clear History</button>
        {history.length === 0 ? (
          <p>No search history yet.</p>
        ) : (
          <ul>
            {history.map((term, index) => (
              <li key={index} onClick={() => handleClick(term)}>
                {term}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default History;
