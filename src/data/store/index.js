// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import skipReducer from '../actions/skipSlice';

const store = configureStore({
  reducer: {
    skips: skipReducer,
  },
});

export default store;
