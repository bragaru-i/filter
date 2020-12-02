import React from 'react';
import Checkbox from '../CheckBox/Checkbox';

import dataJson from '../json/filter.json';

const AsideFilter = ({ updateFilters }) => {
  const onChange = (e) => {
    updateFilters(e);
  };
  // Automatically load all checkboxes from filter.json
  // On click => updates filter array from parent component
  const checkboxes = dataJson.map((el) =>
    el.children.map((item) => (
      <Checkbox
        value={item.text}
        key={el.id + item.id}
        name={item.text}
        onChange={onChange}
      />
    ))
  );
  return <div>{checkboxes}</div>;
};

export default AsideFilter;
