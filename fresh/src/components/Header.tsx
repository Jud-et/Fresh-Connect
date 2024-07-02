// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          {/* Add more navigation items as you create more pages */}
          {/* <li><Link to="/project">Project</Link></li> */}
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;