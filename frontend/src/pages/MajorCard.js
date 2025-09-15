import React from 'react';
import favoriteIcon from '../assets/favorite.png';
import { useNavigate } from 'react-router-dom';

function MajorCard({ major, isFavorite, toggleFavorite }) {
  const navigate = useNavigate();

  return (
    <div className="major-card">
      <h3 onClick={() => navigate(`/MajorsView/${major.id}`)}>{major.name}</h3>
      <p>{major.about}</p>
      <button className="favorite-btn" onClick={toggleFavorite}>
        <img src={favoriteIcon} alt="Favorite" className={isFavorite ? 'active' : ''} />
      </button>
    </div>
  );
}

export default MajorCard;
