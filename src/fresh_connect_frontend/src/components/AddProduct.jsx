import React, { useState } from 'react';
import { backendActor } from '../agent';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const productId = await actor.addProduct(name, productType, quantity, price);
      setMessage(`Product added with ID: ${productId}`);
    } catch (error) {
      console.error('Failed to add product:', error);
      setMessage('Failed to add product');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <div>
        <h2>Add Product</h2>
        <form onSubmit={addProduct}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Type:</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AddProduct;
