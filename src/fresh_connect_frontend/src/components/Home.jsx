import React from 'react';

function Home({ user }) {
  return (
    <div>
      <h1>Welcome to FreshFarmConnect</h1>
      {user ? (
        <p>Hello, {user.username}! Your role is: {user.role}</p>
      ) : (
        <p>Please register or log in to access all features.</p>
      )}
    </div>
  );
}

export default Home;