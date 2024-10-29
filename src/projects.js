// src/components/Projects.js

import React from 'react';
import CustomButton from './custombutton';  // Import CustomButton

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    link: '#',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A Simple Tic Tac Toe Game',
    link: 'https://obi2.kean.edu/~benijuan@kean.edu/game1.html',
  },
 
];

function Projects() {
  return (
    <section id="projects">
      <h1 style={{ color: 'var(--accent-color)' }}>Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <CustomButton onClick={() => window.open(project.link, '_blank')}>
              View Project
            </CustomButton>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
