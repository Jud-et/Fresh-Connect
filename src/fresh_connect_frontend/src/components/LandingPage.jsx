import React from 'react';
import HeroSection from './HeroSection';
import InspirationSection from './InspirationSection';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <InspirationSection />
      <FeaturesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
