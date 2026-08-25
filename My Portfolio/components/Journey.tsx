'use client';

export function Journey() {
  const milestones: [string, string, string][] = [
    ['2018', 'The Begining', 'Got admission into my dream college, NIFT, and started my design journey.'],
    ['2019–2021', 'Learning & Freelancing', 'Explored UI/UX, graphics, and photography, working on freelance projects to enhance my visual skills.'],
    ['2022', 'The Big Leap', 'Graduated and joined WongDoody as a UI/UX Designer, working on real-world digital experiences.'],
    ['Now', 'Growing & Innovating', 'Currently mastering AI-enabled Product Design to craft impactful products.'],
  ];

  return (
    <section className="journey section">
      <div className="eyebrow">My Journey</div>
      <h2>Growing with curiosity,<br />crafting with intent.</h2>
      <div className="timeline">
        {milestones.map(([year, title, desc]) => (
          <article className="reveal" key={year}>
            <b>{year}</b>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
