import React, { useState } from 'react';
import { firestore } from './firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const adminRef = firestore.collection('admin').doc('Ndz131Mt7E4zMw4UREpR');
      const adminData = await adminRef.get();
      const adminCredentials = adminData.data();
  
      if (email === adminCredentials.Email && password === adminCredentials.Password) {
        // Admin login successful, redirect to admin panel
        navigate('/admin');
      } else {
        // Admin login failed
        alert('Invalid admin credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;