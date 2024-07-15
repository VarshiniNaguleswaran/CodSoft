import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import UserDashboard from './components/UserDashboard';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/createblog' element={<CreateBlog/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
