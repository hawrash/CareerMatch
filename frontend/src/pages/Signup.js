import React, { useState } from 'react';
import API from '../api';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted', form);
    // API.post('/signup', form)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={(e)=>setForm({...form, username:e.target.value})} />
      <input type="email" placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
