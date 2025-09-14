import React from 'react';
import ProfileCard from '../components/ProfileCard';

function Profile() {
  const user = { username: 'JohnDoe', email: 'john@example.com' };

  return (
    <div>
      <h2>Profile</h2>
      <ProfileCard user={user} />
    </div>
  );
}

export default Profile;
