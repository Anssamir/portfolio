import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { assets } from '../data/assets.js';
import { projects } from '../data/projects.js';
import { CTA } from '../components/CTA.jsx';
import { UpworkButton } from '../components/UpworkButton.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { AboutPreview } from '../components/AboutPreview.jsx';
import { Process } from '../components/Process.jsx';
import { Skills } from '../components/Skills.jsx';
import { Journey } from '../components/Journey.jsx';
import { Footer } from '../components/Footer.jsx';

export function Home() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      {/* Hero Section */}
      <section className="hero grid-bg">
        <div className="hero-motion" aria-hidden="true">
          <i className="sweep sweep-lr one" />
          <i className="sweep sweep-lr two" />
          <i className="sweep sweep-lr three" />
          <i className="sweep sweep-rl one" />
          <i className="sweep sweep-rl two" />
          <i className="sweep sweep-tb one" />
          <i className="sweep sweep-tb two" />
          <i className="sweep sweep-bt one" />
          <i className="sweep sweep-bt two" />
        </div>

        <div className="hero-content">
          <h1>
            <span className="hero-line">
              I turn ideas into <span className="hero-badge"><img src={assets.portrait} alt="" /></span> experiences
            </span>
            <span className="hero-line">people actually love to use</span>
          </h1>
          <p className="hero-intro">
            Hey, I’m Anas Amir 👋 A UI/UX Designer turning complex ideas into simple, intuitive experiences.{' '}
          </p>
          <div className="hero-cta">
            <CTA />
            <UpworkButton />
          </div>
        </div>

        <div className="brands">
          <span>Brands I've Designed For</span>
          <b>Danske Bank</b>
          <b>L’ORÉAL</b>
          <b>LAUSD</b>
          <b>Sysco</b>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section featured">
        <div className="eyebrow">Featured Work</div>
        <h2>Like food, great design is invisible when it works perfectly.</h2>
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectCard p={p} index={i} key={p.slug} />
          ))}
        </div>
      </section>

      <AboutPreview />
      <Process />
      <Skills />
      <Journey />
      <Footer />
    </main>
  );
}
