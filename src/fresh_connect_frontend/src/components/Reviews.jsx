import React, { useState, useEffect } from 'react';
import { fresh_connect_backend } from "../../../declarations/fresh_connect_backend";

function Reviews({ user }) {
  const [productId, setProductId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (productId) {
      fetchReviews(productId);
    }
  }, [productId]);

  const fetchReviews = async (id) => {
    try {
      const productReviews = await fresh_connect_backend.getProductReviews(BigInt(id));
      setReviews(productReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const addReview = async (e) => {
    e.preventDefault();
    try {
      await fresh_connect_backend.addReview(BigInt(productId), BigInt(rating), comment);
      alert('Review added successfully');
      fetchReviews(productId);
      // Clear the form
      setRating('');
      setComment('');
    } catch (error) {
      console.error("Error adding review:", error);
      alert('Failed to add review');
    }
  };

  return (
    <div>
      <h2>Product Reviews</h2>
      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID to view reviews"
      />
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            Rating: {review.rating.toString()} - Comment: {review.comment}
          </li>
        ))}
      </ul>
      {user && (
        <form onSubmit={addReview}>
          <h3>Add a Review</h3>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            required
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment"
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
}

export default Reviews;