import React from 'react';
import { CTA } from './CTA.jsx';

export function Process() {
  const steps = [
    'Frame It Before You Flame It',
    'Low-Fi, High Impact',
    'Designed for Humans, Built for Devs',
    'Ship. Learn. Evolve.',
  ];

  return (
    <section className="process section">
      <div className="eyebrow">How it works</div>
      <h2>How I Design With Purpose</h2>
      <p>Smart, scrappy, and always human-first.</p>

      <div className="steps">
        {steps.map((step, i) => (
          <div className="reveal" key={step}>
            <b>0{i + 1}</b>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="green-banner">
        <div>
          I am with you in every step
          <br />
          <small>alongside you at each step for seamless experience</small>
        </div>
        <CTA showDoodle={false} />
      </div>
    </section>
  );
}
