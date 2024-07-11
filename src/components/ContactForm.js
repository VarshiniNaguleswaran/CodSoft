import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  
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
    <div >
        <h1>
            Contact Me 
        </h1>
        

        <form className='contact'>
          <label>Name : </label>
            <input type='text' className='input'></input><br></br><br></br>
            <label>Contact Number : </label>
            <input type='text' className='input'></input><br></br><br></br>
            <label>Message:</label>
            <textarea rows="4" className='input'></textarea><br></br><br></br>
            <button className='home-button'>Submit</button>
        </form>
        
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

export default ContactForm;

