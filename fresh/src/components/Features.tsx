// components/Features.tsx
import React from 'react';

interface Feature {
  name: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    name: 'Feature 1',
    description: 'Description of feature 1',
    imageUrl: '/path/to/feature1-image.jpg',
  },
  // Add more features as needed
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <h2>Features</h2>
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.imageUrl} alt={feature.name} />
          <h3>{feature.name}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;