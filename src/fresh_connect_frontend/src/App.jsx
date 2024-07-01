import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { fresh_connect_backend } from "../../declarations/fresh_connect_backend";
import Home from './components/Home';
import Register from './components/Register';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import OrderManagement from './components/OrderManagement';
import Reviews from './components/Reviews';
import Analytics from './components/Analytics';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCurrentUser();
    }
  }, [isAuthenticated]);

  const fetchCurrentUser = async () => {
    try {
      const isConnected = await window.ic.plug.isConnected();
      if (!isConnected) {
        const connectResult = await window.ic.plug.requestConnect();
        if (!connectResult) {
          console.log("Failed to connect to Internet Identity");
          return;
        }
      }
      setIsAuthenticated(true);
      const principal = await window.ic.plug.getPrincipal();
      if (principal) {
        const userDetails = await fresh_connect_backend.getUser(principal);
        setUser(userDetails[0]); // Assuming getUser returns an option
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!isAuthenticated && (
              <li>
                <button onClick={fetchCurrentUser}>Login</button>
              </li>
            )}
            {!user && isAuthenticated && <li><Link to="/register">Register</Link></li>}
            <li><Link to="/products">Products</Link></li>
            {user && user.role === 'farmer' && <li><Link to="/add-product">Add Product</Link></li>}
            {user && <li><Link to="/orders">Orders</Link></li>}
            <li><Link to="/reviews">Reviews</Link></li>
            {user && <li><Link to="/analytics">Analytics</Link></li>}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/products" element={<ProductList user={user} />} />
          <Route path="/add-product" element={<AddProduct user={user} />} />
          <Route path="/orders" element={<OrderManagement user={user} />} />
          <Route path="/reviews" element={<Reviews user={user} />} />
          <Route path="/analytics" element={<Analytics user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;