import React from 'react';
import User from './features/User';
import { Provider } from 'react-redux';
import { store } from './app/store';

const UserMain = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default UserMain;