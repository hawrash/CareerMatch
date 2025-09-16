import React from 'react';


function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="profile-card">
      <img
        src={user.avatar || 'https://via.placeholder.com/90'}
        alt="Avatar"
        className="profile-avatar"
      />
      <h3>{user.name}</h3> {/* updated from username to name */}
      <p><strong>Email:</strong> {user.email}</p>
      {user.role && <p><strong>Role:</strong> {user.role}</p>}
    </div>
  );
}

export default ProfileCard;
