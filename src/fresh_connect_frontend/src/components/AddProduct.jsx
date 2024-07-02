import React, { useState } from 'react';
import { backendActor } from '../agent';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const addProduct = async () => {
    const productId = await backendActor.addProduct(name, productType, quantity, price);
    if (productId !== null) {
      alert(`Product added with ID: ${productId}`);
      setName('');
      setProductType('');
      setQuantity(0);
      setPrice(0);
    } else {
      alert('Failed to add product.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Product Name"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        value={productType}
        onChange={e => setProductType(e.target.value)}
        placeholder="Product Type"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        type="number"
        placeholder="Quantity"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        type="number"
        placeholder="Price"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={addProduct}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
