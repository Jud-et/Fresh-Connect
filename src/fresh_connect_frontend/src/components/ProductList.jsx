import React, { useState, useEffect } from 'react';
import { backendActor } from '../agent';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState('');
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await backendActor.searchProducts(productType ? [productType] : null, maxPrice ? [maxPrice] : null);
      setProducts(products);
    };

    fetchProducts();
  }, [productType, maxPrice]);

  return (
    <div>
      <input value={productType} onChange={e => setProductType(e.target.value)} placeholder="Product Type" />
      <input value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} placeholder="Max Price" type="number" />
      <ul>
        {products.map(product => (
          <li key={product.farmerId}>
            {product.name} - {product.productType} - {product.quantity} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
