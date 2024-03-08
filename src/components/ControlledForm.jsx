import React, { useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with value: ${inputValue}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something (controlled):
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
