'use client';

import { CTA } from './CTA';

function ProcessCard({ num, title, description, svgContent }: { num: string; title: string; description: string; svgContent: React.ReactNode }) {
  return (
    <div className="process-card-inner">
      <div className="process-card-grid" />
      <div className="process-card-content">
        <div className="process-card-top">
          <div className="process-card-icon">{svgContent}</div>
          <p className="process-card-num">{num}</p>
        </div>
        <h5 className="process-card-title">{title}</h5>
        <p className="process-card-desc">{description}</p>
      </div>
    </div>
  );
}

const cards = [
  {
    num: '1',
    title: 'Frame It Before You Flame It',
    description: 'No pixel-pushing till I know the game. I ask the "dumb" questions (What?), poke holes in assumptions (Why?), and map out the real deal (Who?). Because the wrong problem solved beautifully is still the wrong problem.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Low-Fi, High Impact',
    description: 'Paper first, pixels second. Quick sketches and rough wireframes let me explore 10 ideas in the time it takes to polish one. Fast feedback loops mean fewer costly revisions later.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Human-first. Dev ready!',
    description: 'Pretty isn\'t enough. My files don\'t just look good, they work. Named layers, scalable systems, edge-case checks — so devs don\'t curse my name when it\'s build time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Ship. Learn. Evolve.',
    description: 'No design is ever "done." I launch, I listen, I loop back. Real users teach me more than any Dribbble likes ever will.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section className="process section">
      <div className="eyebrow">How it works</div>
      <h2>How I Design With Purpose</h2>
      <p>Smart, scrappy, and always human-first.</p>
      <div className="process-cards">
        {cards.map((card, i) => (
          <div className={i % 2 === 1 ? 'offset' : ''} key={card.num}>
            <ProcessCard num={card.num} title={card.title} description={card.description} svgContent={card.icon} />
          </div>
        ))}
      </div>
      <div className="process-banner">
        <div className="process-banner-text">
          <span className="process-banner-emoji">&#x1F60A;</span>
          <div>
            <strong>I am with you in every step</strong>
            <br />
            <small>alongside you at each step for seamless experience</small>
          </div>
        </div>
        <CTA showDoodle={false} />
      </div>
    </section>
  );
}
