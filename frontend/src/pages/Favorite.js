import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import majorsData from '../majors.json';
import favoriteIcon from '../assets/favorite.png';
import './Favorite.css';

const KEY = 'favorites';

// Load favorites from localStorage
function loadFavorites() {
  try {
    const fav = JSON.parse(localStorage.getItem(KEY)) || [];
    return fav.map(Number);
  } catch {
    return [];
  }
}

// Save favorites to localStorage
function saveFavorites(list) {
  localStorage.setItem(KEY, JSON.stringify(list.map(Number)));
}

// Toggle favorite
function toggleFavorite(pk) {
  const favorites = loadFavorites();
  const updated = favorites.includes(pk)
    ? favorites.filter(id => id !== pk)
    : [...favorites, pk];
  saveFavorites(updated);
  return updated;
}

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Update favorites list
  const updateFavorites = () => {
    const favIds = loadFavorites();
    const favMajors = majorsData.filter(m => favIds.includes(m.pk));
    setFavorites(favMajors);
  };

  useEffect(() => {
    updateFavorites();
    const handleStorage = () => updateFavorites();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleToggle = (pk) => {
    toggleFavorite(pk);
    updateFavorites();
  };

  const handleCardClick = (pk) => {
    navigate(`/MajorsView/${pk}`);
  };

  return (
    <div className="favorites-container">
      <h1>Majors & Favorites</h1>

      {/* All majors */}
      <div className="majors-grid">
        {majorsData.map(major => {
          const isFav = loadFavorites().includes(major.pk);
          return (
            <div
              key={major.pk}
              className="major-card"
            >
              <div className="card-content" onClick={() => handleCardClick(major.pk)}>
                <h2>{major.fields.name}</h2>
                <p>{major.fields.about}</p>
              </div>
              <button
                onClick={() => handleToggle(major.pk)}
                className={isFav ? 'fav-btn active' : 'fav-btn'}
              >
                <img src={favoriteIcon} alt="Favorite" className="fav-icon" />
                {isFav ? 'Remove Favorite' : 'Add Favorite'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Favorites list */}
      <div className="your-favorites">
        <h2>Your Favorites</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map(major => (
              <li
                key={major.pk}
                onClick={() => handleCardClick(major.pk)}
                className="favorite-item"
              >
                {major.fields.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Favorite;
