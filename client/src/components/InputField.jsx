// InputField.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './InputField.sass'; // Import Sass file for styling

const InputField = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="input-field-label">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        className="input-field-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
