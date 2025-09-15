import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import majorsData from '../majors.json';
import favoriteIcon from '../assets/favorite.png';
import './MajorsView.css';

function MajorsView() {
  const { id } = useParams();
  const major = majorsData.find(m => m.pk === parseInt(id));

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(major?.pk));
  }, [major]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Remove from favorites
      const updated = favorites.filter(favId => favId !== major.pk);
      localStorage.setItem('favorites', JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(major.pk);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }

    // ✅ No navigate here, so the page stays the same
  };

  if (!major) return <p>Major not found!</p>;

  const employmentRate = major.fields.employment_rate;
  let circleColor = 'red';
  if (employmentRate >= 80) circleColor = 'green';
  else if (employmentRate >= 50) circleColor = 'orange';

  return (
    <div className="majors-view-container">
      <div className="info-box">
        <h2>{major.fields.name}</h2>
        <p>{major.fields.about}</p>
        <p><strong>Career Prospects:</strong> {major.fields.career_prospects}</p>
        <p><strong>Universities:</strong> {major.fields.universities}</p>
        <p><strong>Entry Level Salary:</strong> ${major.fields.entry_level_salary}</p>
        <p><strong>Mid Level Salary:</strong> ${major.fields.mid_level_salary}</p>
        <p><strong>Senior Level Salary:</strong> ${major.fields.senior_level_salary}</p>

        <div className="employment-circle" style={{ borderColor: circleColor }}>
          <span>{employmentRate}%</span>
        </div>

        <button className="favorite-btn" onClick={toggleFavorite}>
          <img src={favoriteIcon} alt="Favorite" className={isFavorite ? 'active' : ''} />
        </button>
      </div>
    </div>
  );
}

export default MajorsView;
