// src/components/ClassCounter.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const ClassCounter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <div className="container">
      <h2 className="title">Class-based Component: ClassCounter</h2>
      <p className="description">Clicked {count} times</p>
      <button className="button" onClick={() => dispatch(increment())}>Increment</button>
      <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ClassCounter;
