import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, selectUser } from '../app/userSlice';

function User() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => dispatch(setName(e.target.value))}
        placeholder="Name"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => dispatch(setAge(Number(e.target.value)))}
        placeholder="Age"
      />
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
    </div>
  );
}

export default User;
