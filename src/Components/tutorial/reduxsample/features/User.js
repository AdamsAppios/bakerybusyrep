import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, incrementMoney, decrementMoney, incrementAge,decrementAge, selectUser } from '../app/userSlice';

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
      <br />
      <input
        type="number"
        value={user.age}
        onChange={(e) => dispatch(setAge(Number(e.target.value)))}
        placeholder="Age"
      />
      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
      <button onClick={() => dispatch(decrementAge())}>Decrement Age</button>
      <br />
      <button onClick={() => dispatch(incrementMoney())}>Increment Money</button>
      <button onClick={() => dispatch(decrementMoney())}>Decrement Money</button>
      <br />
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Money: {user.money}</div>
    </div>
  );
}

export default User;
