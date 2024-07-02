import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const PlaceOrder: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: 1, name: 'Cabbages',  quantity: 1 , price: 60.00 },
    { id: 2, name: 'Dragon Fruits',  quantity: 1 , price: 120.00 },
    { id: 3, name: 'Mangoes',  quantity: 1 , price: 40.00 },
  ]);

  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  useEffect(() => {
    calculateTotal();
  }, [orderItems]);

  const calculateTotal = () => {
    const newTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setOrderItems(orderItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to a backend service
    console.log('Order submitted:', { customerName, customerEmail, customerAddress, orderItems, total });
    // Reset form after submission
    setOrderItems([]);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerAddress('');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4 mb-8">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Ksh.{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                      <button 
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xl font-bold">Total: Ksh.{total.toFixed(2)}</div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Address"
                className="w-full p-2 border rounded"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;