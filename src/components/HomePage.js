import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
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
    <div className="homepage-container">
        <header className="homepage-header">
        <h1 className='home-welcome'>Welcome To My Portfolio</h1> 

        <div className='home-intro'>
        <h2>Varshini Naguleswaran</h2>
        <h4>IT Undergraduate</h4>
        <p className='home-intropara'>
          I am an enthusiastic IT undergraduate passionate about exploring new technologies and driving innovation. Dive into my portfolio to discover my projects, skills, and the exciting journey I'm on in the world of Information Technology.
        </p>
        </div>
        <div className='intro-img'>
        
        </div>
        <button className='home-button' onClick={handleAboutme}>Let's Started</button>
      </header>
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

export default HomePage;
