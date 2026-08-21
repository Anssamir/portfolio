import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Footer } from '../components/Footer.jsx';

export function Work() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <section className="page-head">
        <div className="eyebrow">Featured Work</div>
        <h1>Like food, great design is invisible when it works perfectly.</h1>
      </section>

      <section className="section work-list">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.slug} />
        ))}
      </section>

      <section className="explore section">
        <div className="eyebrow">Exploration & Design</div>
        <h2>
          A space to showcase creative concepts, UI experiments, and visual explorations beyond
          client projects.
        </h2>
        <a className="text-link" href="#">
          See All Works ↗
        </a>
      </section>

      <Footer />
    </main>
  );
}
