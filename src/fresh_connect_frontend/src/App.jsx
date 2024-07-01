import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch current user on component mount
    fetchCurrentUser();
    // Fetch products
    fetchProducts();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const principal = await window.ic.plug.getPrincipal();
      const userDetails = await fresh_connect_backend.getUser(principal);
      setUser(userDetails);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const allProducts = await fresh_connect_backend.searchProducts(null, null);
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const registerUser = async (username, role) => {
    try {
      const result = await FreshFarmConnect.registerUser(username, role);
      if (result) {
        fetchCurrentUser();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const addProduct = async (name, productType, quantity, price) => {
    try {
      await FreshFarmConnect.addProduct(name, productType, Number(quantity), Number(price));
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const placeOrder = async (productId, quantity) => {
    try {
      const orderId = await FreshFarmConnect.placeOrder(productId, Number(quantity));
      if (orderId) {
        console.log("Order placed successfully:", orderId);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="App">
      <h1>FreshFarmConnect</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <h3>Your role: {user.role}</h3>
        </div>
      ) : (
        <div>
          <h2>Register User</h2>
          {/* Add registration form here */}
        </div>
      )}

      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} tokens
            <button onClick={() => placeOrder(index, 1)}>Buy</button>
          </li>
        ))}
      </ul>

      {user && user.role === '#farmer' && (
        <div>
          <h2>Add Product</h2>
          {/* Add product form here */}
        </div>
      )}
    </div>
  );
}

export default App;