import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

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
