import React, { useState } from 'react';
import { backendActor } from '../agent';

const PlaceOrder = () => {
  const [productId, setProductId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const placeOrder = async () => {
    const orderId = await backendActor.placeOrder(productId, quantity);
    if (orderId !== null) {
      alert(`Order placed with ID: ${orderId}`);
    } else {
      alert('Order placement failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Place Order</h2>
      <input
        value={productId}
        onChange={e => setProductId(Number(e.target.value))}
        type="number"
        placeholder="Product ID"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        type="number"
        placeholder="Quantity"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={placeOrder}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
