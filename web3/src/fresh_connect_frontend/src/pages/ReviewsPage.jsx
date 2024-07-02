import React from 'react';
import Reviews from '../components/Reviews';

const ReviewsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <Reviews productId={0} /> {/* Replace 0 with the actual product ID to view its reviews */}
    </div>
  );
};

export default ReviewsPage;
