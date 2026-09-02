'use client';

import Link from 'next/link';
import { type Project } from '@/data/projects';

interface ProjectCardProps {
  p: Project;
  index: number;
}

export function ProjectCard({ p, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${p.slug}`} className={`project-card reveal p-${index}`}>
      <div className="project-img">
        <img src={p.image} alt={p.title} />
        <span className="project-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>
      <div className="project-info">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tags">
          {p.tags.map((tag: string) => (
            <i key={tag}>{tag}</i>
          ))}
        </div>
      </div>
    </Link>
  );
}
