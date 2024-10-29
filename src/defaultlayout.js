// src/defaultlayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './chatbot';  // Updated import for Chatbot
import './App.css';

function DefaultLayout({ children }) {
  return (
    <div className="container">
      {/* Side GIF Design on both sides */}
      <div className="side-gif-left"></div>
      <div className="side-gif-right"></div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link to="/" className="nav-button">Home/ChatBot</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/skills" className="nav-button">Skills</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </nav>

      <header>
        <h1 style={{ color: 'var(--accent-color)', textAlign: 'center' }}>Juan Benitez's Portfolio</h1>
      </header>

      {/* Navigation Instruction Message */}
      <section className="navigation-instruction">
        <p>Please use the navigation bar to navigate</p>
      </section>

      {/* Chatbot Component */}
      <Chatbot />

       {/* Image Section */}
       <div className="image-container">
        <img
          src="https://cdn.prod.website-files.com/5f764e35c1ce6d61f3f35bef/63dc30b0bda134005537b6f5_Kean-Green-1.webp"
          alt="Kean University Banner"
          className="image-left"
        />
        <img
          src="https://cdn.prod.website-files.com/5f764e35c1ce6d61f3f35bef/63dc30b74cc1de2cdf231dd1_Kean-Green-11.webp"
          alt="Kean University Green Banner"
          className="image-right"
        />
      </div>

      <main>
        <section className="content-section">
          {children}
        </section>
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Juan Benitez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DefaultLayout;
