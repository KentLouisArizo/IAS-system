import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('users').onSnapshot((snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <Link to="/admin/user-registration">
          <button>User Registration</button>
        </Link>
        <Link to="/admin/user-change-password">
          <button>User Change Password</button>
        </Link>
      </div>
      <div>
        <h3>Registered Users Count</h3>
        <p>{users.length}</p>
        <Link to="/admin/user-accounts">
          <button>User Accounts</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;