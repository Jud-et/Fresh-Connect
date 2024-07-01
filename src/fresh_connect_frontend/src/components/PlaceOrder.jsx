import React, { useState } from 'react';
import { backendActor } from '../agent';

const PlaceOrder = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);

  const placeOrder = async () => {
    const orderId = await backendActor.placeOrder(Number(productId), quantity);
    if (orderId) {
      alert(`Order placed with ID: ${orderId}`);
    } else {
      alert('Failed to place order.');
    }
  };

  return (
    <div>
      <input value={productId} onChange={e => setProductId(e.target.value)} placeholder="Product ID" />
      <input value={quantity} onChange={e => setQuantity(Number(e.target.value))} placeholder="Quantity" type="number" />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default PlaceOrder;
