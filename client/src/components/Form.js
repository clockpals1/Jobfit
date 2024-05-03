// Form.js
import React from 'react';
import './Form.scss';

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
