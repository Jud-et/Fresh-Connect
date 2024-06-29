import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Product } from '../types';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await api.searchProducts();
        setProducts(result);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.productId.toString()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;