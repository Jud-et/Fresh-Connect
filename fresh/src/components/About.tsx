// components/About.tsx
import React from 'react';

interface TeamMember {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Team Member 1',
    githubUrl: 'https://github.com/member1',
    linkedinUrl: 'https://linkedin.com/in/member1',
    twitterUrl: 'https://twitter.com/member1',
  },
  // Add more team members as needed
];

const About: React.FC = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>Description of inspiration and personal story...</p>
      <h3>Timeline</h3>
      {/* Add your timeline here */}
      <h3>Team Members</h3>
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <h4>{member.name}</h4>
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      ))}
      <h3>GitHub Repository</h3>
      <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </section>
  );
};

export default About;