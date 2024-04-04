import React, { useState } from 'react';
import { firestore } from './firebase';

const UserChangePassword = () => {
  const [emailToUpdate, setEmailToUpdate] = useState('');
  const [newPasswordForUpdate, setNewPasswordForUpdate] = useState('');

  const handleUserPasswordChange = async (e) => {
    e.preventDefault();
    try {
      const userRef = firestore.collection('users').doc(emailToUpdate);
      await userRef.update({ password: newPasswordForUpdate });
      setEmailToUpdate('');
      setNewPasswordForUpdate('');
      alert('Password updated successfully');
    } catch (error) {
      console.error('Password update error:', error);
      alert('Password update failed');
    }
  };

  return (
    <div>
      <h3>User Change Password</h3>
      <form onSubmit={handleUserPasswordChange}>
        <input
          type="email"
          placeholder="Email"
          value={emailToUpdate}
          onChange={(e) => setEmailToUpdate(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPasswordForUpdate}
          onChange={(e) => setNewPasswordForUpdate(e.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default UserChangePassword;