// src/components/Skills.js
import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2 style={{ color: 'white' }}>My Skills</h2>
      <div className="skills-list">
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">HTML</div>
      </div>
    </section>
  );
}

export default Skills;
