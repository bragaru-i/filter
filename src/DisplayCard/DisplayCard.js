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

const cleanObj = (obj) =>
  Object.keys(obj).forEach((key) => obj[key].length < 1 && delete obj[key]);

const DisplayCard = ({ filters }) => {
  let filterKeys = [];
  //   converting true values of filters object to Array

  Object.keys(filters).forEach((el) => filters[el] && filterKeys.push(el.toLowerCase()));
  //   declaring variable wich show filtered information

  let dataToDisplay = '';
  if (filterKeys.length > 0) {
    const result = Object.entries(items);
    result.forEach((res) => {
      // FILTERED IS SPLITTED IN 2

      let firstFilter = [];
      let secondFilter = [];
      filterKeys.forEach((el) =>
        el.toLowerCase() === 'available' || el.toLowerCase() === 'patching'
          ? firstFilter.push(el.toLowerCase())
          : secondFilter.push(el.toLowerCase())
      );
      // doing first filter => values that are one of the values

      if (firstFilter.length > 0) {
        res[1] = res[1].filter((item) => firstFilter.includes(item.status.toLowerCase()));
      }

      // doing second search => values that must be
      if (secondFilter.length > 0) {
        res[1] = res[1].filter((item) => {
          let counter = 0;
          secondFilter.forEach(
            (queue) =>
              item.genres.map((v) => v.toLowerCase()).includes(queue) && counter++
          );
          if (counter === secondFilter.length) return item;
          return null;
        });
      }
    });
    dataToDisplay = Object.fromEntries(result);
  } else {
    dataToDisplay = { ...items };
  }
  //   1. if no queue , then display all data
  cleanObj(dataToDisplay);
  console.log(dataToDisplay);
  return <div>bullshit</div>;
};

export default DisplayCard;
