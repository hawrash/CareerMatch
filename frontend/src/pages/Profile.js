import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <ProfileCard user={user} />
    </div>
  );
}

export default Profile;
