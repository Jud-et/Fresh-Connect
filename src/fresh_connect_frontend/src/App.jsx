import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../declarations/fresh_connect_backend";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetchCurrentUser();
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
      const allProducts = await fresh_connect_backend.searchProducts([], []);
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const registerUser = async (username, role) => {
    try {
      const result = await fresh_connect_backend.registerUser(username, { [role]: null });
      if (result) {
        fetchCurrentUser();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const addProduct = async (name, productType, quantity, price) => {
    try {
      await fresh_connect_backend.addProduct(name, productType, BigInt(quantity), BigInt(price));
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const placeOrder = async (productId, quantity) => {
    try {
      const orderId = await fresh_connect_backend.placeOrder(BigInt(productId), BigInt(quantity));
      if (orderId) {
        console.log("Order placed successfully:", orderId);
        fetchOrders();
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      // Assuming there's a getOrders function in the backend
      const allOrders = await fresh_connect_backend.getOrders();
      setOrders(allOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const result = await fresh_connect_backend.updateOrderStatus(BigInt(orderId), { [newStatus]: null });
      if (result) {
        fetchOrders();
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const addReview = async (productId, rating, comment) => {
    try {
      await fresh_connect_backend.addReview(BigInt(productId), BigInt(rating), comment);
      fetchReviews(productId);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const fetchReviews = async (productId) => {
    try {
      const productReviews = await fresh_connect_backend.getProductReviews(BigInt(productId));
      setReviews(productReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchAnalytics = async () => {
    try {
      if (user) {
        let analyticsData;
        if (user.role === '#farmer') {
          analyticsData = await fresh_connect_backend.getFarmerAnalytics(user.principal);
        } else {
          analyticsData = await fresh_connect_backend.getUserAnalytics(user.principal);
        }
        setAnalytics(analyticsData);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  return (
    <div className="App">
      <h1>FreshFarmConnect</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <h3>Your role: {user.role}</h3>
          <button onClick={fetchAnalytics}>View Analytics</button>
          {analytics && (
            <div>
              <h3>Analytics</h3>
              <p>Total Orders: {analytics.totalOrders.toString()}</p>
              <p>{user.role === '#farmer' ? 'Revenue' : 'Total Spent'}: {analytics.revenue ? analytics.revenue.toString() : analytics.totalSpent.toString()}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Register User</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            registerUser(e.target.username.value, e.target.role.value);
          }}>
            <input name="username" placeholder="Username" required />
            <select name="role" required>
              <option value="farmer">Farmer</option>
              <option value="consumer">Consumer</option>
              <option value="mamamboga">Mamamboga</option>
            </select>
            <button type="submit">Register</button>
          </form>
        </div>
      )}

      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price.toString()} tokens
            <button onClick={() => placeOrder(index, 1)}>Buy</button>
            <button onClick={() => fetchReviews(index)}>View Reviews</button>
          </li>
        ))}
      </ul>

      {user && user.role === '#farmer' && (
        <div>
          <h2>Add Product</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            addProduct(e.target.name.value, e.target.type.value, e.target.quantity.value, e.target.price.value);
          }}>
            <input name="name" placeholder="Product Name" required />
            <input name="type" placeholder="Product Type" required />
            <input name="quantity" type="number" placeholder="Quantity" required />
            <input name="price" type="number" placeholder="Price" required />
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}

      <h2>Orders</h2>
      <button onClick={fetchOrders}>Fetch Orders</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Order ID: {order.orderId.toString()} - Status: {order.status}
            {user && user.role === '#farmer' && (
              <select onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            )}
          </li>
        ))}
      </ul>

      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating.toString()}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
      {user && (
        <form onSubmit={(e) => {
          e.preventDefault();
          addReview(e.target.productId.value, e.target.rating.value, e.target.comment.value);
        }}>
          <input name="productId" type="number" placeholder="Product ID" required />
          <input name="rating" type="number" min="1" max="5" placeholder="Rating" required />
          <textarea name="comment" placeholder="Comment" required></textarea>
          <button type="submit">Add Review</button>
        </form>
      )}
    </div>
  );
}

export default App;