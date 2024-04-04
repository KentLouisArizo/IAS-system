import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

const UserAccounts = () => {
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
      <h3>User Accounts</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Email: {user.email}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccounts;