import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get stored user from signup
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setError('No account found. Please signup first.');
      return;
    }

    // Check if username and email match
    if (storedUser.username === form.username && storedUser.email === form.email) {
      // Successful login
      navigate('/Home'); // Profile will read storedUser from localStorage
    } else {
      setError('Username or email does not match. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
