import React from 'react';
import { ScrollRestoration, useNavigate } from 'react-router-dom';

function Project() {
  
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
    <div className='ProjectContainer'>
        <h1 className='Project-head'>Projects</h1>
        
        <div class="container">
          <div className='projectDiv'>
          <div class="box1">
          <h2>Child growth Indicator</h2>
          <p>It is a web application that show the baby's health recode</p>
          <br></br>
          <p>we are normaly keep harcopy so we create the softcopy</p>
          <br></br>
          <h4>Languages </h4>
          <p>Backend : JavaScript</p>
          <p>Frontend : reactJs</p>
          <p>Database : MySql</p>
        </div>

        <div class="box2">
          <h2>Image based Search App</h2>
            <p>It is a web application that we can search related images</p>
            <br></br>
            <h4>Languages </h4>
            <p>Backend : JavaScript, Python</p>
            <p>Frontend : reactJs</p>
            <p>Api : Tineye</p>
        </div>
          </div>
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

export default Project;

