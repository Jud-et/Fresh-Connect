// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Fresh Farm Connect Logo" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-display font-bold text-primary">Fresh Farm Connect</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
            <li><Link to="/login" className="text-gray-600 hover:text-primary transition-colors">Login</Link></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
            <li><Link to="/login" className="text-gray-600 hover:text-primary transition-colors">Login</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;