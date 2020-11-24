import React from 'react';

const Checkbox = ({ name, checked, value, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;
