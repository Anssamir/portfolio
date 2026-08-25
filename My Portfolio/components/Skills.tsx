'use client';

export function Skills() {
  const skillsList = ['UI/UX Design', 'Photography', 'Visual Design', 'Branding'];

  return (
    <section className="skills section">
      <div className="eyebrow">The Magic I Create</div>
      <div>
        <h2>My Superpowers</h2>
        <p>From crafting seamless digital journeys to shaping brands that stick, these are the skills I use to turn ideas into impactful experiences.</p>
      </div>
      <div className="skill-cards">
        {skillsList.map((skill, i) => (
          <article className="reveal" key={skill}>
            <b>0{i + 1}</b>
            <h3>{skill}</h3>
            <p>
              {i === 0
                ? 'I design intuitive, accessible, and user-centric web & mobile experiences that solve real problems.'
                : i === 1
                ? 'I capture stunning visuals—food, travel, lifestyle—that bring stories and aesthetics to life across digital platforms.'
                : 'I create modern, engaging visuals that enhance usability, elevate brands, and improve user interaction.'}
            </p>
          </article>
        ))}
      </div>
      <div className="marquee">
        User Research &#x00B7; Prototyping &#x00B7; Interaction Design &#x00B7; Branding &#x00B7; Custom Code &#x00B7; Framer &#x00B7; Design thinking &#x00B7; Visual Design &#x00B7;
      </div>
    </section>
  );
}
