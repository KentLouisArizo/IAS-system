import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import UserDashboard from './UserDashboard';
import UserRegistration from './UserRegistration';
import UserChangePassword from './UserChangePassword';
import UserAccounts from './UserAccounts';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin isAdmin={true} />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin/user-registration" element={<UserRegistration />} />
        <Route path="/admin/user-change-password" element={<UserChangePassword />} />
        <Route path="/admin/user-accounts" element={<UserAccounts />} />
      </Routes>
    </div>
  );
}

export default App;