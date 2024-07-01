import React, { useEffect } from 'react';
import { initAuthClient } from './auth';
import RegisterUser from './components/RegisterUser';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import PlaceOrder from './components/PlaceOrder';
import Reviews from './components/Reviews';

function App() {
  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fresh Farm Connect</h1>
      </header>
      <main>
        <RegisterUser />
        <AddProduct />
        <ProductList />
        <PlaceOrder />
        <Reviews productId={0} /> {/* Replace 0 with the actual product ID to view its reviews */}
      </main>
    </div>
  );
}

export default App;
