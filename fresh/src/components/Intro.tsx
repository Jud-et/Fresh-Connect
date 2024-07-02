// src/components/Intro.tsx
import React from 'react';
import Mama from '../assets/mama.webp';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="bg-gradient-to-br from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Fresh Farm Connect</h1>
            <p className="text-xl mb-8">Connecting farmers, mama mbogas, and consumers for fresher produce and fairer prices.</p>
            <button
              onClick={() => window.open('https://your-deployed-app-url.com', '_blank')}
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={Mama} alt="Fresh Farm Produce" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;