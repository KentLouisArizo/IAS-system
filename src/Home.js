import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <Link to="/user-login">
        <button>User Login</button>
      </Link>
      <Link to="/admin-login">
        <button>Admin Login</button>
      </Link>
    </div>
  );
};

export default Home;