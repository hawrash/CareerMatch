import React, { useEffect, useState } from 'react';
import API from '../api';
import MajorCard from '../components/MajorCard';
import SearchBar from '../components/SearchBar';

function MajorsList() {
  const [majors, setMajors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    API.get('majors/')
      .then(res => setMajors(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = majors.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>Majors</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="majors-list">
        {filtered.map(major => <MajorCard key={major.id} major={major} />)}
      </div>
    </div>
  );
}

export default MajorsList;
