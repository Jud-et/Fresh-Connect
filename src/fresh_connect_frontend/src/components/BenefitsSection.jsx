import React from 'react';

const benefits = [
  { title: "Freshness Guaranteed", description: "Get fresh products directly from farmers." },
  { title: "Support Local Farmers", description: "Help local farmers grow their businesses." },
  { title: "Convenient Shopping", description: "Shop from the comfort of your home." },
  { title: "Secure Payments", description: "Your transactions are safe with us." }
];

const BenefitsSection = () => {
  return (
    <div id="benefits" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Benefits</h2>
      <div className="flex flex-wrap justify-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
