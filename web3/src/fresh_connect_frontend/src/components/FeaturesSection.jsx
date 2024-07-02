import React from 'react';

const features = [
  "Direct farmer-consumer interaction",
  "Wide variety of fresh products",
  "Secure and transparent transactions",
  "User-friendly interface"
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg">{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
