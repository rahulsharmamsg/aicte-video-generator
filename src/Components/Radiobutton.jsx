import React from 'react';

function RadioButton({ value, checked, onChange, label }) {
  return (
    <label onClick={onChange} className={checked ? 'selectedLabel' : ''}>
      <input
        type="radio"
        value={value}
        checked={checked}
        style={{ display: 'none' }}
      />
      {label}
    </label>
  );
}

export default RadioButton;
