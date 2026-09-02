'use client';

import { useReveal } from '@/hooks/useReveal';
import { projects } from '@/data/projects';
import { CTA } from '@/components/CTA';
import { UpworkButton } from '@/components/UpworkButton';
import { ProjectCard } from '@/components/ProjectCard';
import { AboutPreview } from '@/components/AboutPreview';
import { Process } from '@/components/Process';
import { Skills } from '@/components/Skills';
import { Journey } from '@/components/Journey';
import { Footer } from '@/components/Footer';

export default function Home() {
  const ref = useReveal();

  return (
    <main ref={ref}>
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
              I turn ideas into <span className="hero-badge"><img src="/portrait-me.png" alt="" width={54} height={110} /></span> experiences
            </span>
            <span className="hero-line">people actually love to use</span>
          </h1>
          <p className="hero-intro">
            Hey, I&apos;m Anas Amir &#x1F44B; A UI/UX Designer turning complex ideas into simple, intuitive experiences.
          </p>
          <div className="hero-cta">
            <CTA />
            <UpworkButton />
          </div>
        </div>
        <div className="brands">
          <span className="brands-label">Brands I&apos;ve Designed For</span>
          <div className="brands-marquee" aria-label="Brands I've Designed For">
            <div className="brands-track">
              <b>House of Stox</b>
              <b>L&apos;OR&#xC9;AL</b>
              <b>Dev Entity</b>
              <b>Patronus AI</b>
              <b>Agentmax</b>
              <b>House of Stox</b>
              <b>L&apos;OR&#xC9;AL</b>
              <b>Dev Entity</b>
              <b>Patronus AI</b>
              <b>Agentmax</b>
            </div>
          </div>
        </div>
        <a className="hero-scroll" href="#featured-work" aria-label="Scroll to featured work">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 4v14M6.5 12.5 12 18l5.5-5.5" />
          </svg>
        </a>
      </section>
      <section id="featured-work" className="section featured">
        <div className="eyebrow">Featured Work</div>
        <h2>Like food, great design is invisible<br />when it works perfectly.</h2>
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
