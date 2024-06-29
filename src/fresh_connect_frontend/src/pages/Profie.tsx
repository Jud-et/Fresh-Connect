import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { api } from '../services/api';

const Profile: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would get the user ID from authentication
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      setUserId('123');
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userId) return <div>User not authenticated</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile userId={userId} />
    </div>
  );
};

export default Profile;