import React, { useState } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function AddProduct({ user }) {
  const [name, setName] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && user.role === 'farmer') {
      try {
        await fresh_connect_backend.addProduct(name, productType, BigInt(quantity), BigInt(price));
        alert('Product added successfully');
        // Clear the form
        setName('');
        setProductType('');
        setQuantity('');
        setPrice('');
      } catch (error) {
        console.error("Error adding product:", error);
        alert('Failed to add product');
      }
    } else {
      alert('Only farmers can add products');
    }
  };

  if (user && user.role !== 'farmer') {
    return <p>Only farmers can add products.</p>;
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          placeholder="Product Type"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;