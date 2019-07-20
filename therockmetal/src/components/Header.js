import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">The rockMetal</div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/form">Form</a></li>
        </ul>
    </header>
  );
}
