import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { CaseBody } from '../components/CaseBody.jsx';
import { Footer } from '../components/Footer.jsx';

export function Project({ slug }) {
  const p = projects.find((x) => x.slug === slug) || projects[0];

  if (slug === 'marketly') {
    return (
      <main>
        <section className="marketly section">
          <div className="eyebrow">UX CASE STUDY</div>
          <h1>Marketly Portal</h1>
          <h4>JUNE 2024</h4>
          <p>{p.description}</p>
          <p>⚠️ Due to NDA and as this project is still a work-in-progress, I can’t showcase the full details here.</p>
          <Link className="cta" to="/contact">
            Contact Me ↗
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const intro = {
    danske: 'Empowering Frontline Banking Employees with GenAI',
    nissan: 'A Seamless Digital Car Ownership Experience',
    loreal: 'Analytics that make decisions clearer.',
  }[slug];

  return (
    <main>
      <section
        className="case-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,22,41,.7), rgba(8,22,41,.15)), url(${p.image})`,
        }}
      >
        <div>
          <div className="eyebrow">DISCOVER PROJECT</div>
          <small>UX CASE STUDY</small>
          <h1>{p.title}</h1>
          <h2>{intro}</h2>
          <b>JUNE 2024</b>
        </div>
      </section>

      <section className="case-intro section">
        <p>{p.description}</p>
        <div className="case-columns">
          <div>
            <b>Key Responsibilities</b>
            <ul>
              <li>Led user interviews and UX research activities.</li>
              <li>Created flow models, personas, and competitive analysis.</li>
              <li>Designed end-to-end UI for key features.</li>
              <li>Collaborated with managers, stakeholders and developers.</li>
            </ul>
          </div>
          <div>
            <b>Project Scope</b>
            <p>
              <small>Platforms</small>Desktop
            </p>
            <p>
              <small>Duration</small>
              {slug === 'nissan' ? '6 Months' : '4.5 Months'}
            </p>
            <p>
              <small>Tools Used</small>Figma, Figjam, Excel and PPT
            </p>
          </div>
        </div>
      </section>

      <CaseBody p={p} slug={slug} />
      <Footer />
    </main>
  );
}
