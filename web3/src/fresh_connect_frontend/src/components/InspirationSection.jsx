import React from 'react';
import inspirationImage from '../assets/inspiration.jpg';

const InspirationSection = () => {
  return (
    <div id="inspiration" className="py-20 bg-gray-100 text-center flex items-center justify-center" style={{ backgroundImage: `url(${inspirationImage})`, backgroundSize: 'cover' }}>
      <div className="bg-white bg-opacity-75 p-8 rounded shadow-lg max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Inspiration</h2>
        <p className="text-lg mb-4">
          We aim to bridge the gap between farmers and consumers by providing a platform for direct interaction and transaction. Freshness and quality guaranteed straight from the farm.
        </p>
      </div>
    </div>
  );
};

export default InspirationSection;
