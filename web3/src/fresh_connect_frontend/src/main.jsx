import React from 'react';
import ReactDOM from 'react-dom/client';
import '../tailwind.css'; // Import Tailwind CSS
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);