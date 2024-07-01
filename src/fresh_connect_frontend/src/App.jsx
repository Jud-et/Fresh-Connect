import React, { useState, useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";
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
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    initAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCurrentUser();
    }
  }, [isAuthenticated]);

  const initAuth = async () => {
    const client = await AuthClient.create();
    setAuthClient(client);

    const isAuthenticated = await client.isAuthenticated();
    setIsAuthenticated(isAuthenticated);
  };

  const login = async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: process.env.II_URL || "https://identity.ic0.app",
        onSuccess: () => {
          setIsAuthenticated(true);
        },
      });
    }
  }

  const logout = async () => {
    if (authClient) {
      await authClient.logout();
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const fetchCurrentUser = async () => {
    if (authClient) {
      try {
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal();
        const userDetails = await fresh_connect_backend.getUser(principal);
        setUser(userDetails[0]); // Assuming getUser returns an option
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };

  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!isAuthenticated ? (
              <li>
                <button onClick={login}>Login</button>
              </li>
            ) : (
              <>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
                {!user && <li><Link to="/register">Register</Link></li>}
                <li><Link to="/products">Products</Link></li>
                {user && user.role === 'farmer' && <li><Link to="/add-product">Add Product</Link></li>}
                {user && <li><Link to="/orders">Orders</Link></li>}
                <li><Link to="/reviews">Reviews</Link></li>
                {user && <li><Link to="/analytics">Analytics</Link></li>}
              </>
            )}
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