import React from 'react';
import ProductList from '../components/ProductList';

const ProductListPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ProductList />
    </div>
  );
};

export default ProductListPage;