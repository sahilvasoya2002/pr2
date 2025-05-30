// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../index'; // Make sure it's combined using combineReducers or createSlice

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export default store;
