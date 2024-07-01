import React, { useState } from 'react';
import { backendActor } from '../agent';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const addProduct = async () => {
    const productId = await backendActor.addProduct(name, productType, quantity, price);
    alert(`Product added with ID: ${productId}`);
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Product Name" />
      <input value={productType} onChange={e => setProductType(e.target.value)} placeholder="Product Type" />
      <input value={quantity} onChange={e => setQuantity(Number(e.target.value))} placeholder="Quantity" type="number" />
      <input value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
