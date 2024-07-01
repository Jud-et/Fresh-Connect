import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function OrderManagement({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      // Assuming there's a getOrders function in the backend
      const allOrders = await fresh_connect_backend.getOrders(user.principal);
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

  if (!user) {
    return <p>Please log in to view orders.</p>;
  }

  return (
    <div>
      <h2>Order Management</h2>
      <button onClick={fetchOrders}>Refresh Orders</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Order ID: {order.orderId.toString()} - Status: {order.status}
            {user.role === 'farmer' && (
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
    </div>
  );
}

export default OrderManagement;