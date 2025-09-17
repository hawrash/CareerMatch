import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import majorsData from '../majors.json';
import favoriteIcon from '../assets/favorite.png';
import './Favorite.css';

const BASE_KEY = 'favorites';

// ✅ Use userId or email from localStorage/session
function getUserKey() {
  const user = JSON.parse(localStorage.getItem('currentUser')); 
  // Example: { id: 1, email: "test@example.com" }
  return user ? `${BASE_KEY}_${user.id}` : BASE_KEY;
}

// Load favorites for this user
function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(getUserKey())) || [];
  } catch {
    return [];
  }
}

// Save favorites for this user
function saveFavorites(list) {
  localStorage.setItem(getUserKey(), JSON.stringify(list));
}

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorite majors from localStorage
  const updateFavorites = () => {
    const favIds = loadFavorites();
    const favMajors = majorsData.filter(m => favIds.includes(m.pk));
    setFavorites(favMajors);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  const handleToggle = (pk) => {
    let favs = loadFavorites();
    if (favs.includes(pk)) {
      favs = favs.filter(id => id !== pk);
    } else {
      favs.push(pk);
    }
    saveFavorites(favs);
    updateFavorites();
  };

  const handleCardClick = (pk) => {
    navigate(`/MajorsView/${pk}`);
  };

  return (
    <div className="favorites-container">
      <h1>Your Favorite Majors</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="majors-grid">
          {favorites.map(major => (
            <div key={major.pk} className="major-card">
              <div
                className="card-content"
                onClick={() => handleCardClick(major.pk)}
              >
                <h2>{major.fields.name}</h2>
                <p>{major.fields.about}</p>
              </div>
              <button
                onClick={() => handleToggle(major.pk)}
                className="fav-btn active"
              >
                <img src={favoriteIcon} alt="Favorite" className="fav-icon" />
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
