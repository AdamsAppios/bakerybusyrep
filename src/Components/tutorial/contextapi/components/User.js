// User.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
