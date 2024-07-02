import React from 'react';
import heroImage from '../assets/mama.webp';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="text-center bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-5xl font-bold mb-4">Welcome to Fresh Farm Connect</h1>
        <p className="text-lg mb-4">Connecting farmers and consumers directly</p>
        <a href="#features" className="bg-green-500 px-4 py-2 rounded">Learn More</a>
      </div>
    </div>
  );
};

export default HeroSection;
