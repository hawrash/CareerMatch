import React from 'react';
import { Link } from 'react-router-dom';

function MajorCard({ major }) {
  return (
    <div className="major-card">
      <h3>{major.name}</h3>
      <p>{major.description}</p>
      <Link to={`/majors/${major.id}`}>View Details</Link>
    </div>
  );
}

export default MajorCard;
