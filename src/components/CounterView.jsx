import React from 'react';

//  external imports
import { useDispatch, useSelector } from 'react-redux';

//  internal imports
import {
  increment,
  decrement,
  reset,
  increaseByAmount,
} from '../features/Counter/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncreaseByAmount = () => {
    dispatch(increaseByAmount(5));
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncreaseByAmount}>Increase by 5</button>
    </div>
  );
};

export default Counter;
