import React, { useState } from 'react';
import { backendActor } from '../agent';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('#consumer');

  const register = async () => {
    const result = await backendActor.registerUser(username, { [role]: null });
    if (result) {
      alert('User registered successfully!');
    } else {
      alert('User registration failed.');
    }
  };

  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="#farmer">Farmer</option>
        <option value="#consumer">Consumer</option>
        <option value="#mamamboga">Mamamboga</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default RegisterUser;
