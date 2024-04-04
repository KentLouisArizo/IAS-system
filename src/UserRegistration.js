import React, { useState } from 'react';
import { firestore } from './firebase';

const UserRegistration = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('users').add({
        email: newEmail,
        password: newPassword,
      });
      setNewEmail('');
      setNewPassword('');
      alert('User registered successfully');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h3>User Registration</h3>
      <form onSubmit={handleUserRegistration}>
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Register User</button>
      </form>
    </div>
  );
};

export default UserRegistration;