import React from 'react';

import dataJson from '../json/games.json';

let array = dataJson
    .sort((a, b) => a.title.localeCompare(b.title))
    .reduce((r, e) => {
      const key = e.title[0];
      if (!r[key]) r[key] = [];
      r[key].push(e);
      return r;
    }, {}),
  items = array;

// transform all array elements to uppercase
const arrToUppercase = (arr) => arr.map((el) => el.toUpperCase());

// takes 2 array and compare for at least one equal element
const hasCommonElelent = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
};

const DisplayCard = ({ filters }) => {
  const arrayKeys = Object.keys(items);
  let dataToDisplay = {};
  if (filters.length > 0) {
    // all filters will be in capital letters
    const filtersToCapital = arrToUppercase(filters);
    arrayKeys.forEach((arrKey) => {
      const filteredArray = items[arrKey].filter((el) => {
        // joining genres and status in 1 array
        const valuesInterested = [...arrToUppercase(el.genres), el.status];
        //  returning if they have common elements
        return hasCommonElelent(filtersToCapital, valuesInterested);
      });

      // 1. if filtered letter isn't empty, then we add it to data
      if (filteredArray.length > 0)
        dataToDisplay = {
          ...dataToDisplay,
          [arrKey]: filteredArray,
        };
    });
  } else {
    // 2. otherwise we return default items with a reference
    dataToDisplay = items;
  }
  console.log(dataToDisplay);
  return <div>bullshit</div>;
};

export default DisplayCard;
