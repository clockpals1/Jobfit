const crypto = require('crypto');

const generateSessionSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log('Session Secret:', generateSessionSecret());
