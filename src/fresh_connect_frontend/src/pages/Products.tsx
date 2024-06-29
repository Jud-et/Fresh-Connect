import React from 'react';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  return (
    <div>
      <h1>Available Products</h1>
      <ProductList />
    </div>
  );
};

export default Products;