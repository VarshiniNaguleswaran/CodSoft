import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const userData = [
  {
    id: 1,
    username: "user1",
    password: "111",
    blogs: [
      {
        id: 1,
        title: "First Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        title: "Second Blog Post",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      }
    ]
  },
  {
    id: 2,
    username: "user2",
    password: "222",
    blogs: [
      {
        id: 3,
        title: "Another Blog Post",
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras pretium urna ac leo interdum consectetur."
      }
    ]
  },
  {
    id: 3,
    username: "user3",
    password: "333",
    blogs: [
      {
        id: 4,
        title: "My Latest Blog",
        content: "Duis auctor quam sit amet lacus rutrum, sit amet consequat nulla sagittis."
      },
      {
        id: 5,
        title: "Thoughts on Technology",
        content: "Fusce ut arcu vel nunc convallis tempus. Nullam volutpat nisi non elit volutpat, vel posuere enim porttitor."
      }
    ]
  }
];

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();

    const user = userData.find(user => user.username === username && user.password === password);

    if (user) {
      setCurrentUser(user);
      navigate('/user-dashboard');
    } else {
      setError('Invalid username or password');
    }
  }

  const handleHome = () => {
    navigate('/');
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="loginContainer">
      <div className="navbar">
        <div className="navItem" onClick={handleHome}>HOME</div>
        <div className="navItem" onClick={handleSignin}>SIGNIN</div>
      </div>
      <div className="loginForm">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <label>Username:</label>
          <input
            type="text"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <label>Password:</label>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          {error && <div className="error">{error}</div>}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
