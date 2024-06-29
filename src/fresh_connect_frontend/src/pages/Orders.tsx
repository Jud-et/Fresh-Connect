import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Order } from '../types';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the user's orders here
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      setOrders([
        {
          orderId: BigInt(1),
          buyerId: '123',
          sellerId: '456',
          productId: BigInt(1),
          quantity: BigInt(2),
          totalPrice: BigInt(1000),
          status: 'pending',
          orderDate: BigInt(Date.now()),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.orderId.toString()} className="order-item">
          <p>Order ID: {order.orderId.toString()}</p>
          <p>Product ID: {order.productId.toString()}</p>
          <p>Quantity: {order.quantity.toString()}</p>
          <p>Total Price: {order.totalPrice.toString()} tokens</p>
          <p>Status: {order.status}</p>
          <p>Order Date: {new Date(Number(order.orderDate)).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;