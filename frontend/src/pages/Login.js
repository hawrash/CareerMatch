import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={(e)=>setForm({...form, username:e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
