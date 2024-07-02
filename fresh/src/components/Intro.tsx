// components/Intro.tsx
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro">
      <img src="/path/to/cover-image.jpg" alt="Project Cover" className="cover-image" />
      <h1>Project Name</h1>
      <p>One line phrase and description</p>
      <button onClick={() => window.open('https://your-deployed-app-url.com', '_blank')}>
        View Deployed Project
      </button>
    </section>
  );
};

export default Intro;