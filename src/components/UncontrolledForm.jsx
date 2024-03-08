import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with value: ${inputRef.current.value}`)
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something (uncontrolled):
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
