// components/ClassCounter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const ClassCounter = ({ count, increment, decrement }) => {
  return (
    <div className="container">
      <h2 className="title">Class-based Component: ClassCounter</h2>
      <p className="description">Clicked {count} times</p>
      <button className="button" onClick={increment}>Increment</button>
      <button className="button" onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count
});

export default connect(mapStateToProps, { increment, decrement })(ClassCounter);
