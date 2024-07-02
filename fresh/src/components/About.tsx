import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Henry from '../assets/henry.png';
import Judith from '../assets/judith.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">About Fresh Farm Connect</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Fresh Farm Connect is an innovative platform built on the Internet Computer Protocol (ICP) that aims to revolutionize the agricultural supply chain in Kenya. Our mission is to connect farmers directly with consumers and mama mbogas, eliminating intermediaries and ensuring fresher produce at fairer prices.
          </p>
          <h3 className="text-2xl font-bold mb-4">Inspiration</h3>
          <p className="text-lg mb-8">
            Inspired by the challenges faced by farmers whose produce often rots due to lack of market access, and the desire of consumers for fresh, locally-sourced food, we've created a system that benefits all parties involved in the farm-to-table process.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg mb-8">
            We envision a future where technology bridges the gap between rural farmers and urban consumers, promoting sustainable agriculture, reducing food waste, and improving livelihoods across the agricultural sector.
          </p>
          <h3 className="text-2xl font-bold mb-4">GitHub Repository</h3>
          <a href="https://github.com/Jud-et/Fresh-Connect" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors">
            View on GitHub
          </a>
        </div>
        
        <h3 className="text-2xl font-bold text-center mt-16 mb-8">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <TeamMember 
            name="Judith Waithera"
            role="Founder & CEO"
            imageSrc={Judith}
            linkedin="https://www.linkedin.com/in/judith-waithera-306915270/"
            github="https://github.com/Jud-et"
            twitter="https://x.com/JudithKaru97166"
          />
          <TeamMember 
            name="Henry kimani"
            role="CTO"
            imageSrc={Henry}
            linkedin="https://www.linkedin.com/in/kimani-henry-19a1b6305"
            github="https://github.com/H3nryK"
            twitter="https://x.com/H3nryKim"
          />
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedin: string;
  github: string;
  twitter: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc, linkedin, github, twitter }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64">
      <img src={imageSrc} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h4 className="text-xl font-bold mb-2 text-center">{name}</h4>
      <p className="text-gray-600 mb-4 text-center">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <Linkedin size={24} />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
          <Github size={24} />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;