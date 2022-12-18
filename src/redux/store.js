import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsSlice, filterSlice } from './contacts/slice';
import { authSlice } from './auth/slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  
});


export const store = configureStore({
  reducer: rootReducer,
});

