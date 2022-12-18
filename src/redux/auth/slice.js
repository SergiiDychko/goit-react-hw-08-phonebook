import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
		},
		


  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});
export const { change } = filterSlice.actions;
