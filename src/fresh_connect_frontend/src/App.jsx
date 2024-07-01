import React, { useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { initAuthClient } from './auth';
import LandingPage from './components/LandingPage';
import RegisterPage from './pages/RegisterPage';
import AddProductPage from './pages/AddProductPage';
import ProductListPage from './pages/ProductListPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <Link to="/" className="text-lg font-bold">Fresh Farm Connect</Link>
          <div>
            <Link to="/register" className="mr-4">Register</Link>
            <Link to="/add-product" className="mr-4">Add Product</Link>
            <Link to="/products" className="mr-4">Products</Link>
            <Link to="/place-order" className="mr-4">Place Order</Link>
            <Link to="/reviews" className="mr-4">Reviews</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/add-product" component={AddProductPage} />
          <Route path="/products" component={ProductListPage} />
          <Route path="/place-order" component={PlaceOrderPage} />
          <Route path="/reviews" component={ReviewsPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
