import React, { useState } from 'react';
import { api } from '../services/api';

interface OrderFormProps {
  productId: bigint;
}

const OrderForm: React.FC<OrderFormProps> = ({ productId }) => {
  const [quantity, setQuantity] = useState<string>('1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await api.placeOrder(productId, BigInt(quantity));
      if (result) {
        setOrderPlaced(true);
      } else {
        setError('Failed to place order');
      }
    } catch (err) {
      setError('An error occurred while placing the order');
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) return <div>Order placed successfully!</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default OrderForm;