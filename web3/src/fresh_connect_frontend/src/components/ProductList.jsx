import React, { useEffect, useState } from 'react';
import { backendActor } from '../agent';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await backendActor.searchProducts(null, null);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>Type: {product.productType}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
