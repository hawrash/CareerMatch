import React from 'react';

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img
        src="https://via.placeholder.com/70"
        alt="Profile Avatar"
        className="profile-avatar"
      />
      <h3>{user.username}</h3>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default ProfileCard;
