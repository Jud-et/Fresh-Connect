import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function Register({ setUser }) {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('consumer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const identity = await authClient.getIdentity();
      const principal = identity.getPrincipal();
      const result = await fresh_connect_backend.registerUser(principal, username, { [role]: null });
      if (result) {
        const userDetails = await fresh_connect_backend.getUser(principal);
        setUser(userDetails[0]);
        navigate('/');
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="farmer">Farmer</option>
          <option value="consumer">Consumer</option>
          <option value="mamamboga">Mamamboga</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;