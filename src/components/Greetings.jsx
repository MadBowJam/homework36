import React from 'react';

const Greetings = ({ name }) => {
  return (
    <div>
      <h2>Stateless Component: Greetings</h2>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Greetings;
