import React, { useState, useEffect } from 'react';
import { backendActor } from '../agent';

const Reviews = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const addReview = async () => {
    const success = await backendActor.addReview(Number(productId), rating, comment);
    if (success) {
      alert('Review added successfully!');
      fetchReviews();
    } else {
      alert('Failed to add review.');
    }
  };

  const fetchReviews = async () => {
    const reviews = await backendActor.getProductReviews(Number(productId));
    setReviews(reviews);
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  return (
    <div>
      <input value={rating} onChange={e => setRating(Number(e.target.value))} placeholder="Rating" type="number" />
      <input value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment" />
      <button onClick={addReview}>Add Review</button>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            {review.rating} - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
