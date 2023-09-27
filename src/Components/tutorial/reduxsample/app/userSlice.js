import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
    money: 0, // Add a 'money' field to the state
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    incrementMoney: (state) => {
      state.money += 1; // Increment the 'money' field
    },
    decrementMoney: (state) => {
      state.money -= 1; // Decrement the 'money' field
    },
    incrementAge: (state) => {
      state.age += 1; // Increment the 'money' field
    },
    decrementAge: (state) => {
      state.age -= 1; // Decrement the 'money' field
    },
  },
});

export const { setName, setAge, incrementMoney, decrementMoney, incrementAge, decrementAge } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
