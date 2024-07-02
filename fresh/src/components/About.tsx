// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">About Fresh Farm Connect</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Fresh Farm Connect is an innovative platform built on the Internet Computer Protocol (ICP) that aims to revolutionize the agricultural supply chain in Kenya. Our mission is to connect farmers directly with consumers and mama mbogas, eliminating intermediaries and ensuring fresher produce at fairer prices.
          </p>
          <p className="text-lg mb-8">
            Inspired by the challenges faced by farmers whose produce often rots due to lack of market access, and the desire of consumers for fresh, locally-sourced food, we've created a system that benefits all parties involved in the farm-to-table process.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg mb-8">
            We envision a future where technology bridges the gap between rural farmers and urban consumers, promoting sustainable agriculture, reducing food waste, and improving livelihoods across the agricultural sector.
          </p>
          <h3 className="text-2xl font-bold mb-4">GitHub Repository</h3>
          <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;