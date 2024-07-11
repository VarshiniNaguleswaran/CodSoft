import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutMe() {
  
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
      };
    
      const handleProject = () => {
        navigate('/project');
      };
      const handleAboutme = () => {
        navigate('/aboutme');
      };
    
      const handleContact = () => {
        navigate('/contact_me');
      };
    

  return (

      <div className="about-me-container">
        <div className='aboutme-body'>
        <h1>About Me</h1>
      <p>
        Hello! I'm Varshini Naguleswaran, an enthusiastic IT undergraduate passionate about exploring new things and pushing the boundaries of technology. My journey in the world of Information Technology has been an exciting adventure of learning, discovery, and innovation.
      </p>
      <br></br>
      <h3>Professional Background</h3><br></br>
      <p>
        As an IT student, I've immersed myself in various aspects of technology, from software development and network security to data analysis and artificial intelligence. My academic experiences have equipped me with a solid foundation in computer science principles and practical skills in programming languages like Python, Java, and C++.
      </p>
      <br></br>
      <h3>Skills and Expertise</h3>

      <div className='skills'>
        <div className='skillimg1'>
          <div className='html'></div>
          <div className='css'></div>
          <div className='python'></div>
          <div className='java'></div>
        </div>
        <div className='skillimg2'>
        <div className='js'></div>
        <div className='react'></div>
        <div className='mysql'></div>
        <div className='mongodb'></div>
        </div>
        
      </div>

      <br></br>
        </div>
      


        <footer className="homepage-footer">
        <div className="homepage-links">
          <a href="#" className="homepage-link" onClick={handleHome}>Home</a>
          <a href="#" className="homepage-link" onClick={handleProject}>Projects</a>
          <a href="#" className="homepage-link" onClick={handleAboutme}>About me</a>
          <a href="#" className="homepage-link" onClick={handleContact}>Contact me</a>
        </div>
      </footer>
     </div>
    
  );
}

export default AboutMe;

