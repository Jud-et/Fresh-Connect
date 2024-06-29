export interface User {
    username: string;
    role: 'farmer' | 'consumer' | 'mamamboga';
    registrationDate: bigint;
  }
  
  export interface Product {
    productId: bigint;
    farmerId: string;
    name: string;
    productType: string;
    quantity: bigint;
    price: bigint;
    availability: boolean;
  }
  
  export interface Order {
    orderId: bigint;
    buyerId: string;
    sellerId: string;
    productId: bigint;
    quantity: bigint;
    totalPrice: bigint;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
    orderDate: bigint;
  }
  
  export interface Review {
    reviewerId: string;
    productId: bigint;
    rating: bigint;
    comment: string;
    reviewDate: bigint;
  }