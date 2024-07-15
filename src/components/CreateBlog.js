import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const navigate = useNavigate();

  const handleUserDashboard = () => {
    navigate('/user-dashboard');
  };

  return (
    <div className="createblogBody">
      <div>
        <div className="backButton" onClick={handleUserDashboard}></div>
      </div>
      <div className="container">
        <h2>Create your Own Blogs</h2>
        <form>
          <label>Title:</label>
          <input type="text" />
          <label>Content:</label>
          <textarea className="textare" cols={50} rows={50}></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
