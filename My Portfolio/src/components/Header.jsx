import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../data/assets.js';

export function Header() {
  return (
    <header className="nav">
      <Link to="/" className="brand">
        <span className="brand-avatar">
          <img src={assets.portrait} alt="Anas Amir" />
        </span>
        <span>Anas Amir</span>
      </Link>
      <nav>
        <Link to="/work">Work</Link>
        <Link to="/about-me">About Me</Link>
        <a className="resume-pill" href="https://www.upwork.com/freelancers/anasamir" target="_blank" rel="noreferrer">
          Upwork
        </a>
      </nav>
    </header>
  );
}
