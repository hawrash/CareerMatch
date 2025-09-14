import React from 'react';

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfileCard;
