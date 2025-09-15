import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './History.css';

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(storedHistory.reverse());
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  const handleClick = (term) => {
    const majorsData = JSON.parse(localStorage.getItem('majorsData')) || [];
    const major = majorsData.find(
      (m) => m.fields.name.toLowerCase() === term.toLowerCase()
    );
    if (major) navigate(`/MajorsView/${major.pk}`);
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
      {/* your existing footer will appear here */}
    </div>
  );
}

export default History;
