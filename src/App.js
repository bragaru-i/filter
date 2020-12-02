import React, { useState } from 'react';
import './App.css';
import AsideFilter from './AsideFilter/AsideFilter';
import DisplayCard from './DisplayCard/DisplayCard';

const App = () => {
  const [filters, setFilters] = useState([]);
  const updateFilters = (e) => {
    // if filter is already in the list, then we remove it
    if (filters.includes(e.target.value)) {
      setFilters((prevState) =>
        prevState.filter((el) => el !== e.target.value)
      );
      // otherwise we add as a new value
    } else setFilters((prevState) => [...prevState, e.target.value]);
  };
  return (
    <div className="App">
      <AsideFilter updateFilters={updateFilters} />
      <DisplayCard filters={filters} />
    </div>
  );
};

export default App;
