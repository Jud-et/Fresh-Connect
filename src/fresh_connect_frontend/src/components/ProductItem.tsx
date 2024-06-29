import React from 'react';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Type: {product.productType}</p>
      <p>Price: {product.price.toString()} tokens</p>
      <p>Quantity: {product.quantity.toString()}</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductItem;