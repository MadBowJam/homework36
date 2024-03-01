import React from 'react';
import '../index.css'; // Importing the shared CSS file

const Input = ({ placeholder, onChange }) => {
  return (
    <input className="input" placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;