import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">The rockMetal</div>
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            <li>Calendar</li>
          </Link>
          <Link to="/form" style={{ textDecoration: 'none' }}>
            <li>Form</li>
          </Link>
        </ul>
    </header>
  );
}
