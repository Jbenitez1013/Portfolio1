// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './defaultlayout';  // Home page
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/skills" element={<DefaultLayout><Skills /></DefaultLayout>} />
        <Route path="/projects" element={<DefaultLayout><Projects /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
      </Routes>
    </Router>
  );
}

export default App;