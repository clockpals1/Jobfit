// pages/ForgotPassword.js

import React from 'react';

function ForgotPassword() {
  return (
    <div className="container">
      <h2 className="mb-4">Forgot Password</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
