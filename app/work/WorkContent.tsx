'use client';

import { useReveal } from '@/hooks/useReveal';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';

export function WorkContent() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <section className="page-head">
        <div className="eyebrow">Featured Work</div>
        <h1>Like food, great design is invisible<br />when it works perfectly.</h1>
      </section>
      <section className="section work-list">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.slug} />
        ))}
      </section>
      <section className="explore section">
        <div className="eyebrow">Exploration &amp; Design</div>
        <h2>A space to showcase creative concepts, UI experiments, and visual explorations beyond client projects.</h2>
        <a className="text-link" href="#">See All Works &#x2197;</a>
      </section>
      <Footer />
    </main>
  );
}
