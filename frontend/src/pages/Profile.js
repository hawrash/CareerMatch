import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    avatar: ''
  });

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFormData(parsed);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setUser({ ...formData }); // triggers re-render
    setEditing(false);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>

      {user && !editing ? (
        <>
          <ProfileCard key={JSON.stringify(user)} user={user} />
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </label>

          <label>
            Avatar URL:
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="Paste image URL"
            />
          </label>

          <button type="submit" className="save-btn">
            {user ? 'Update Profile' : 'Create Profile'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
