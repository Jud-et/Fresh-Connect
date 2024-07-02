import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Fresh Farm Connect</h1>
        <p className="text-lg mb-4">Connecting farmers and consumers directly</p>
        <a href="#features" className="bg-blue-500 px-4 py-2 rounded">Learn More</a>
      </div>
    </div>
  );
};

export default HeroSection;
