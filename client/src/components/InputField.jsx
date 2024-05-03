import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss'; // Import Sass file for styling

// InputField component definition
const InputField = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      {/* Label for the input field */}
      <label htmlFor={name} className="input-field-label">{label}</label>
      
      {/* Input element */}
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

// PropTypes validation for InputField component props
InputField.propTypes = {
  type: PropTypes.string.isRequired, // Type of input field (e.g., text, email, password)
  name: PropTypes.string.isRequired, // Name of the input field
  label: PropTypes.string.isRequired, // Label text for the input field
  placeholder: PropTypes.string, // Placeholder text for the input field
  value: PropTypes.string.isRequired, // Value of the input field
  onChange: PropTypes.func.isRequired, // onChange event handler for the input field
};

export default InputField;
