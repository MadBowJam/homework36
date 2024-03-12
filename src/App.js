// import React, { useState } from 'react';
// import Button from './components/Button';
// import Input from './components/Input';
// import Counter from './components/Counter';
// import Greetings from './components/Greetings';
// import ClassCounter from './components/ClassCounter';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetchingComponent from './components/DataFetchingComponent';
import UserDataComponent from './components/UserDataComponent';
// import SteamMarketData from "./components/SteamMarketData";

const App = () => {
  // const [inputValue, setInputValue] = useState('');
  
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  
  // const handleButtonClick = () => {
  //   alert('Button clicked!');
  // };
  
  return (
    <div className="container">
      {/*<Input placeholder="Enter something..." onChange={handleInputChange} />*/}
      {/*<Button text="Click me" onClick={handleButtonClick} />*/}
      {/*<p className="description">Input value: {inputValue}</p>*/}
      {/*<Counter />*/}
      {/*<hr />*/}
      {/*<Greetings name="John" />*/}
      {/*<hr />*/}
      {/*<ClassCounter />*/}
      {/*<hr />*/}
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <DataFetchingComponent />
      {/*<hr />*/}
      {/*<SteamMarketData />*/}
      <hr />
      <UserDataComponent />
    </div>
  );
};

export default App;
