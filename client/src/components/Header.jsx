import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
