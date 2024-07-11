import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import { useNavigate } from 'react-router-dom';


function App() {
  return (
  <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<Project></Project>} />
          <Route path="/aboutme" element={<AboutMe></AboutMe>} />
          <Route path="/contact_me" element={<ContactForm></ContactForm>} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
