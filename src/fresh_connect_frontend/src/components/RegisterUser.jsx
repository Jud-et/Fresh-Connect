import React, { useState } from 'react';
import { backendActor } from '../agent';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('#consumer');

  const register = async () => {
    const result = await backendActor.registerUser(username, { [role]: null });
    if (result) {
      alert('User registered successfully!');
      setUsername('');
      setRole('#consumer');
    } else {
      alert('User registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <select
        value={role}
        onChange={e => setRole(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="#farmer">Farmer</option>
        <option value="#consumer">Consumer</option>
        <option value="#mamamboga">Mamamboga</option>
      </select>
      <button
        onClick={register}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterUser;
