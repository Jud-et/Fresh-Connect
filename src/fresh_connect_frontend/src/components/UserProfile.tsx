import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { User } from '../types';

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await api.getUser(userId);
        if (result) {
          setUser(result[0]);
        } else {
          setError('User not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading user profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.username}'s Profile</h2>
      <p>Role: {user.role}</p>
      <p>Registered: {new Date(Number(user.registrationDate)).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;