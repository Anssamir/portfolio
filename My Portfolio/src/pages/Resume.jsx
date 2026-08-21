import React from 'react';
import { Footer } from '../components/Footer.jsx';

export function Resume() {
  const experiences = [
    [
      'Lead UX Designer',
      'WongDoody (Infosys)',
      'Full-time | Pune, India | Aug 2022 – Present',
      'Led 10+ projects, improved usability and accessibility, and built design systems to enhance user engagement.',
    ],
    [
      'UI Designer',
      'Betterhalf.ai',
      'Internship | Bangalore, India | Jan 2022 – May 2022',
      'Redesigned key interfaces and design systems, boosting onboarding and user satisfaction.',
    ],
    [
      'UI/UX Designer',
      'TalentServe',
      'Internship | Mumbai, India | Jul 2021 – Aug 2021',
      'Revamped website UI and resolved usability issues to improve overall user experience.',
    ],
  ];

  return (
    <main>
      <section className="resume section">
        <div className="eyebrow">My Experiences</div>
        <h1>Experience, guided by people.</h1>
        <p>
          With 3+ years of hands-on experience in Product design, I approach every project with a
          user-first mindset. I think differently, have a deep understanding of user behavior, and
          craft intuitive experiences rooted in usability and accessibility.
        </p>

        <div className="resume-list">
          {experiences.map(([role, company, meta, desc]) => (
            <article key={role}>
              <h3>
                {role} <span>| {company}</span>
              </h3>
              <b>{meta}</b>
              <p>{desc}</p>
            </article>
          ))}
        </div>

        <h3 className="education">EDUCATION</h3>
        <p>
          <b>Bachelors of Design (B.Des)</b> Communication Design Department 2018–2022 (8.1 CGPA)
          <br />
          NIFT, Gandhinagar
        </p>
        <a className="download" href="#">
          Download Resume ↗
        </a>
      </section>

      <Footer />
    </main>
  );
}
