import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
}

const ProductReview: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, author: 'John Doe', content: 'Great product!', rating: 5 },
    { id: 2, author: 'Jane Smith', content: 'Good value for money.', rating: 4 },
  ]);

  const [newReview, setNewReview] = useState({ author: '', content: '', rating: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: reviews.length + 1,
      ...newReview,
    };
    setReviews([...reviews, review]);
    setNewReview({ author: '', content: '', rating: 5 });
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Product Reviews</h2>
            <div className="space-y-4 mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{review.author}</h3>
                  <p className="text-gray-600">{review.content}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                value={newReview.author}
                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Review"
                className="w-full p-2 border rounded"
                value={newReview.content}
                onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                required
              ></textarea>
              <div>
                <label className="block mb-2">Rating:</label>
                <select
                  className="w-full p-2 border rounded"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductReview;