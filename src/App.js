import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AsideFilter from './AsideFilter/AsideFilter';
import DisplayCard from './DisplayCard/DisplayCard';

const App = () => {
  const [checkbox, setCheckbox] = useState({
    Available: false,
    Patching: false,
    Shooters: false,
    Action: false,
  });
  return (
    <div className="App">
      <AsideFilter checkbox={checkbox} setCheckbox={setCheckbox} />
      <DisplayCard filters={checkbox} />
    </div>
  );
};

export default App;
