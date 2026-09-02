'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/data/assets';

export function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="about-preview-header">
        <div className="eyebrow">About Me</div>
        <h2 className="about-preview-heading reveal">I care deeply about how things feel, <br /> not just how they look.</h2>
      </div>
      <div className="about-preview-photo reveal">
        <Image src={assets.aboutImage} alt="Anas Amir" fill sizes="440px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
      </div>
      <div className="about-preview-content reveal">
        <div className="about-preview-content-body">
          <p>I&apos;m Anas Amir a Product designer and developer with <strong>3+ years of experience ,</strong> and someone who’s genuinely curious about how people, products, and ideas come together.</p>
          <p>I enjoy taking messy problems, asking the right questions, and turning them into experiences that feel simple and intuitive. I care about the details, but even more about whether 
            the end result is useful, purposeful, and genuinely solves the problem it was meant to solve.</p>
          <p>Outside of design, I love traveling, going on long tours, exploring new places, and trying different kinds of food. I’m always drawn to new experiences and unfamiliar surroundings 
            they keep me curious, open-minded, and constantly inspired.</p>
        </div>
        <p className="about-preview-quote reveal">Curious by nature. Thoughtful by design.</p>
        <Link className="about-work-btn" href="/contact">Let&apos;s Work Together</Link>
      </div>
    </section>
  );
}
