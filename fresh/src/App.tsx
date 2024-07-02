// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddProduct from './pages/AddProduct';
import PlaceOrder from './pages/PlaceOrder';
import LoginPage from './pages/Login';
import DirectMessaging from './pages/DirectMessaging';
import UserRegistration from './pages/UserRegistration';
import ProductReview from './pages/ProductReview';
import ProductList from './pages/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dm' element={<DirectMessaging />} />
          <Route path='/register' element={<UserRegistration />} />
          <Route path='/review' element={<ProductReview />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;