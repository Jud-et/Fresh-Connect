import React, { useState, useEffect } from 'react';
import { backendActor } from '../agent';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await backendActor.getProductReviews(productId);
      setReviews(result);
    };
    fetchReviews();
  }, [productId]);

  const addReview = async () => {
    const result = await backendActor.addReview(productId, rating, comment);
    if (result) {
      alert('Review added successfully!');
      setRating(0);
      setComment('');
      const updatedReviews = await backendActor.getProductReviews(productId);
      setReviews(updatedReviews);
    } else {
      alert('Failed to add review.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      <ul className="mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="mb-2 border-b border-gray-300 pb-2">
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Add a Review</h3>
        <input
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
          type="number"
          placeholder="Rating"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Comment"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addReview}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
