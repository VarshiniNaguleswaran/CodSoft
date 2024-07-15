import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Example user data
const userData = [
  {
    id: 1,
    username: "user1",
    blogs: [
      { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: 'Second Blog Post', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' }
    ]
  },
  {
    id: 2,
    username: "user2",
    blogs: [
      { id: 3, title: 'Another Blog Post', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras pretium urna ac leo interdum consectetur.' }
    ]
  },
  {
    id: 3,
    username: "user3",
    blogs: [
      { id: 4, title: 'My Latest Blog', content: 'Duis auctor quam sit amet lacus rutrum, sit amet consequat nulla sagittis.' },
      { id: 5, title: 'Thoughts on Technology', content: 'Fusce ut arcu vel nunc convallis tempus. Nullam volutpat nisi non elit volutpat, vel posuere enim porttitor.' }
    ]
  }
];

export default function UserDashboard({ currentUser }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // Find the user data based on the current user's username
  useEffect(() => {
    const fetchUserData = () => {
      const userDataFound = userData.find(user => user.username === currentUser);
      if (userDataFound) {
        setUser(userDataFound);
        setBlogs(userDataFound.blogs);
      } else {
        // Handle case where user data is not found (this should ideally not happen in a real app)
        console.error(`User data not found for username: ${currentUser}`);
      }
    };

    fetchUserData(); // Fetch user data on component mount
  }, [currentUser]); // Dependency array includes currentUser to re-fetch if it changes

  const handleHome = () => {
    navigate('/');
  };

  const handleCreateBlog = () => {
    navigate('/createblog');
  };

  const handleEditPage = (id) => {
    navigate('/editpage', { state: { id } });
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="userdashboard-container">
      <div className="navbar1">
        <a href="#" onClick={handleHome} className="logout">Logout</a>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="userNameIntro">Hello! {user ? user.username : 'Loading...'}</h1>
      </div>
      <div>
      <div>
            <div className="blogRow">
                    <div className="blog1">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button>   
                    </div>

                    <div className="blog2">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>
                    
                    <div className="blog3">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    <div className="blog1">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    <div className="blog2">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    <div className="blog3">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>
                </div>
                <br></br><br></br>
                <div className="blogRow">

                    <div className="blog1">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    <div className="blog2">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    <div className="blog3">
                        <button className="edit-button" onClick={handleEditPage}>Edit</button>
                        <button className="delete-button">Delete</button> 
                    </div>

                    
                </div>
          <div className="plus" onClick={handleCreateBlog}></div>
        </div>
      </div>
    </div>
  );
}
