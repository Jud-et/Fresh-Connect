import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  // Mock data, replace with actual data fetching logic
  const products: Product[] = [
    { id: 1, name: 'Cabbages', description: 'Description 1', price: 60.00 },
    { id: 2, name: 'Dragon Fruits', description: 'Description 2', price: 120.00 },
    { id: 3, name: 'Mangoes', description: 'eDscription 3', price: 40.00 },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Product List</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-indigo-600 font-bold mt-2">Ksh.{product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;