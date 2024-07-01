import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function ProductList({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const allProducts = await fresh_connect_backend.searchProducts([], []);
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const placeOrder = async (productId, quantity) => {
    try {
      const orderId = await fresh_connect_backend.placeOrder(BigInt(productId), BigInt(quantity));
      if (orderId) {
        console.log("Order placed successfully:", orderId);
        // You might want to refresh the product list or show a success message
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price.toString()} tokens
            {user && <button onClick={() => placeOrder(index, 1)}>Buy</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;