import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';
import Search from './Search';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (query: string) => {
    // Implement search functionality here
    console.log('Searching for:', query);
  };

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
            <li><Link to="/addProduct" className="text-gray-600 hover:text-primary transition-colors">Add Products</Link></li>
            <li><Link to="/placeOrder" className="text-gray-600 hover:text-primary transition-colors">Place Order</Link></li>
            <li><Link to="/dm" className="text-gray-600 hover:text-primary transition-colors">DM</Link></li>
            <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/review" className="text-gray-600 hover:text-primary transition-colors">Review</Link></li>
            <li><Link to="/register" className="text-gray-600 hover:text-primary transition-colors">Register</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-primary transition-colors">Login</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button
            className="text-gray-600 hover:text-primary mr-4"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isSearchVisible && (
        <div className="container mx-auto px-4 py-4">
          <Search onSearch={handleSearch} />
        </div>
      )}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/addProduct" className="text-gray-600 hover:text-primary transition-colors">Add Products</Link></li>
            <li><Link to="/placeOrder" className="text-gray-600 hover:text-primary transition-colors">Place Order</Link></li>
            <li><Link to="/dm" className="text-gray-600 hover:text-primary transition-colors">DM</Link></li>
            <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/review" className="text-gray-600 hover:text-primary transition-colors">Review</Link></li>
            <li><Link to="/register" className="text-gray-600 hover:text-primary transition-colors">Register</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-primary transition-colors">Login</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;