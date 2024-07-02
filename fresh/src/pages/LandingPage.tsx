// src/pages/LandingPage.tsx
import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Features from '../components/Features';
import About from '../components/About';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Intro />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;