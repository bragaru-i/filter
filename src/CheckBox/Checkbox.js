import React from 'react';

const Checkbox = ({ name, checked, value, onChange }) => {
  return (
    <div>
      <label>
        {value}
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
