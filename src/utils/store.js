import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/Counter/CounterSlice';

const counterStore = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default counterStore;
