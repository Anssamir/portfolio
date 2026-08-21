import React from 'react';
import { Link } from 'react-router-dom';

export function ProjectCard({ p, index }) {
  return (
    <Link to={`/projects/${p.slug}`} className={`project-card reveal p-${index}`}>
      <div className="project-img">
        <img src={p.image} alt={p.title} />
        <span>View case study ↗</span>
      </div>

      <div className="project-info">
        <div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
        <div className="tags">
          {p.tags.map((tag) => (
            <i key={tag}>{tag}</i>
          ))}
        </div>
      </div>
    </Link>
  );
}
