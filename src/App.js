import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleButtonClick = () => {
    alert('Button clicked!');
  }
  
  return (
    <div>
      <Input placeholder="Enter something..." onChange={handleInputChange} />
      <Button text="Click me" onClick={handleButtonClick} />
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default App;