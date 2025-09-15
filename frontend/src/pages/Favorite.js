import React, { useState, useEffect } from 'react';
import majorsData from '../majors.json';
import favoriteIcon from '../assets/favorite.png';
import './Favorite.css';

const KEY = 'favorites';

// --- Helper functions ---
function loadFavorites() {
  try {
    const fav = JSON.parse(localStorage.getItem(KEY)) || [];
    return fav.map(Number);
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(KEY, JSON.stringify(list.map(Number)));
}

function toggleFavorite(pk) {
  const favorites = loadFavorites();
  let updated;
  if (favorites.includes(pk)) {
    updated = favorites.filter(id => id !== pk);
  } else {
    updated = [...favorites, pk];
  }
  saveFavorites(updated);
  return updated;
}

// --- Main component ---
function Favorite() {
  const [favorites, setFavorites] = useState([]);

  function updateFavorites() {
    const favIds = loadFavorites();
    const favMajors = majorsData.filter(function(m) {
      return favIds.includes(m.pk);
    });
    setFavorites(favMajors);
  }

  useEffect(function() {
    updateFavorites();
    const handleStorage = function() { updateFavorites(); };
    window.addEventListener('storage', handleStorage);
    return function() { window.removeEventListener('storage', handleStorage); };
  }, []);

  function handleToggle(pk) {
    toggleFavorite(pk);
    updateFavorites();
  }

  // Render all majors in a card-like view
  return React.createElement('div', { className: 'favorites-container' },
    React.createElement('h1', null, 'Majors & Favorites'),

    // All majors
    React.createElement('div', { className: 'majors-grid' },
      majorsData.map(function(major) {
        const isFav = loadFavorites().includes(major.pk);
        return React.createElement('div', { key: major.pk, className: 'major-card' },
          React.createElement('h2', null, major.fields.name),
          React.createElement('p', null, major.fields.about),
          React.createElement('button', {
            onClick: function() { handleToggle(major.pk); },
            className: isFav ? 'fav-btn active' : 'fav-btn'
          },
            React.createElement('img', { src: favoriteIcon, alt: 'Favorite', className: 'fav-icon' }),
            isFav ? 'Remove Favorite' : 'Add Favorite'
          )
        );
      })
    ),

    // Your Favorites List
    React.createElement('div', { className: 'your-favorites' },
      React.createElement('h2', null, 'Your Favorites'),
      favorites.length === 0 ?
        React.createElement('p', null, 'No favorites yet.') :
        React.createElement('ul', null,
          favorites.map(function(major) {
            return React.createElement('li', { key: major.pk }, major.fields.name);
          })
        )
    )
  );
}

export default Favorite;
