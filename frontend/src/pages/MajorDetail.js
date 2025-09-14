import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

function MajorDetail() {
  const { id } = useParams();
  const [major, setMajor] = useState(null);

  useEffect(() => {
    API.get(`majors/${id}/`)
      .then(res => setMajor(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!major) return <p>Loading...</p>;

  return (
    <div>
      <h2>{major.name}</h2>
      <p>{major.description}</p>
      <p>Career Prospects: {major.career_prospects}</p>
      <p>Universities: {major.universities}</p>
    </div>
  );
}

export default MajorDetail;
