import React from 'react';

function MajorCard({ major }) {
  return (
    <div className="major-card">
      <h3>{major.name}</h3>
      <p>{major.description}</p>
    </div>
  );
}

export default MajorCard;
