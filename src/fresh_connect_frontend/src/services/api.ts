import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { idlFactory } from '../../../declarations/fresh_connect_backend/fresh_connect_backend.did.js';
import { _SERVICE, Product } from '../../../declarations/fresh_connect_backend/fresh_connect_backend.did';
import { User, Product, Order, Review } from '../types';

const agent = new HttpAgent();
const backendActor = Actor.createActor<_SERVICE>(idlFactory, {
  agent,
  canisterId: process.env.FRESH_CONNECT_BACKEND_CANISTER_ID!,
});

export const api = {
  registerUser: (username: string, role: 'farmer' | 'consumer' | 'mamamboga') => 
    backendActor.registerUser(username, { [role]: null } as any),

  getUser: (userId: string) => backendActor.getUser(Principal.fromText(userId)),

  addProduct: (name: string, productType: string, quantity: bigint, price: bigint) =>
    backendActor.addProduct(name, productType, quantity, price),

  getProduct: (productId: bigint) => backendActor.getProduct(productId),

  searchProducts: (productType?: string, maxPrice?: bigint) => 
    backendActor.searchProducts(productType ? [productType] : [], maxPrice ? [maxPrice] : []),

  placeOrder: (productId: bigint, quantity: bigint) =>
    backendActor.placeOrder(productId, quantity),

  getOrder: (orderId: bigint) => backendActor.getOrder(orderId),

  updateOrderStatus: (orderId: bigint, newStatus: Order['status']) =>
    backendActor.updateOrderStatus(orderId, { [newStatus]: null } as any),

  addReview: (productId: bigint, rating: bigint, comment: string) =>
    backendActor.addReview(productId, rating, comment),

  getProductReviews: (productId: bigint) => backendActor.getProductReviews(productId),

  getUserAnalytics: (userId: string) => backendActor.getUserAnalytics(Principal.fromText(userId)),

  getFarmerAnalytics: (farmerId: string) => backendActor.getFarmerAnalytics(Principal.fromText(farmerId)),
};