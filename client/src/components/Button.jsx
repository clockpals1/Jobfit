import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'; // Import the CSS file for styling

const Button = ({ text, onClick = () => {}, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Make onClick prop optional
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
};

export default Button;
