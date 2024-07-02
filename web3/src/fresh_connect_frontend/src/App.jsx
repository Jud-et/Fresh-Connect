import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { initAuthClient } from './auth';
import LandingPage from './components/LandingPage';
import RegisterPage from './pages/RegisterPage';
import AddProductPage from './pages/AddProductPage';
import ProductListPage from './pages/ProductListPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <Link to="/" className="text-lg font-bold">Fresh Farm Connect</Link>
          <div>
            <Link to="/register" className="mr-4">Register</Link>
            <Link to="/add-product" className="mr-4">Add Product</Link>
            <Link to="/products" className="mr-4">Products</Link>
            <Link to="/place-order" className="mr-4">Place Order</Link>
            <Link to="/reviews" className="mr-4">Reviews</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/place-order" element={<PlaceOrderPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
