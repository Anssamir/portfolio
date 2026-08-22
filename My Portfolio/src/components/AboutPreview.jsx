import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../data/assets.js';

export function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="eyebrow">About Me</div>
      <div className="photo-frame reveal">
        <img src={assets.portrait} alt="Himesh Mehta" />
      </div>
      <div className="reveal">
        <h2>
          Himesh Mehta,
          <br />
          Your Designer
        </h2>
        <strong>Product Designer since 3+ Years</strong>
        <p>
          I’m a Product Designer with 3+ years of experience at Wong Doody, where I specialize in
          creating seamless, user-centered designs.
        </p>
        <Link className="text-link" to="/about-me">
          More About Me ↗
        </Link>
      </div>
    </section>
  );
}
