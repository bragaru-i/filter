import React, { useState } from 'react';
import Checkbox from '../CheckBox/Checkbox';

import dataJson from '../json/filter.json';

const AsideFilter = ({ checkbox, setCheckbox }) => {
  const onChange = (e) => {
    let value = e.target.value;
    // if (checkbox.Available && value === 'Patching') {
    //   return setCheckbox((prevState) => ({
    //     ...prevState,
    //     Available: false,
    //     Patching: true,
    //   }));
    // }
    // if (checkbox.Patching && value === 'Available') {
    //   return setCheckbox((prevState) => ({
    //     ...prevState,
    //     Patching: false,
    //     Available: true,
    //   }));
    // }
    setCheckbox((prevState) => ({ ...prevState, [value]: !prevState[value] }));
  };

  const checkboxes = dataJson.map((el) =>
    el.children.map((item) => (
      <Checkbox
        value={item.text}
        key={el.id + item.id}
        name={item.text}
        checked={checkbox[item.text]}
        onChange={(e) => onChange(e)}
      />
    ))
  );
  return <div>{checkboxes}</div>;
};
export default AsideFilter;
