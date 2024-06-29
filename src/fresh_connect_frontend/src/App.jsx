import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;