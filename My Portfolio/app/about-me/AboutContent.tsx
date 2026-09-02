'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { assets } from '@/data/assets';
import { Journey } from '@/components/Journey';
import { Footer } from '@/components/Footer';

export function AboutContent() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <section className="about-hero section">
        <div className="eyebrow">About Me</div>
        <div className="about-hero-content">
          <div className="about-card about-card-head">
            <h1>Anas Amir</h1>
            <strong>Product Designer since <b>4+ Years</b></strong>
          </div>
          <div className="about-card about-card-body">
            <p>I&apos;m a UX designer with <strong>4+ years of experience at Wong Doody,</strong> specializing in creating seamless, <em className="about-accent">user-centered designs.</em></p>
            <p>I love digging deep into problems, understanding user needs, and crafting intuitive digital experiences that are both beautiful and functional. For me, great design is not just about aesthetics—it&apos;s about <strong>accessibility</strong>, <strong>usability</strong>, and <strong>solving real problems</strong> with <strong>creativity and purpose.</strong></p>
            <p>But design isn&apos;t my only passion! <strong>My creativity is fueled by photography, cooking, and traveling</strong>—each offering a fresh perspective that inspires my work.</p>
            <Link className="about-work-btn" href="/contact">Let&apos;s Work Together</Link>
          </div>
        </div>
        <div className="about-hero-photo reveal">
          <Image src={assets.portrait} alt="Anas Amir" fill sizes="550px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
      </section>

      <section className="statement">
        <p>Crafting meaningful experiences inspired by<br />life&apos;s flavors, frames, and journeys.</p>
      </section>

      <section className="about-block section">
        <div className="eyebrow">Designer BTS</div>
        <Image src={assets.about} alt="Designer Behind The Scenes" width={500} height={410} style={{ objectFit: 'cover', borderRadius: 8 }} />
        <div>
          <h2>My Shutterbug mode</h2>
          <p>When I&apos;m not designing, I&apos;m behind the lens capturing moments that tell a story. Here&apos;s a glimpse into the world through my eyes:</p>
          <strong>&x30C4; 35M+ Views, 100K+ Downloads</strong>
        </div>
      </section>

      <section className="about-block section reverse">
        <div className="eyebrow">Chef of UX &amp; Spices</div>
        <div>
          <h2>Lowkey a Chef</h2>
          <p>Cooking is my creative escape — it&apos;s where I blend flavors like I combine user needs with design principles. Much like UX design, cooking is about understanding the basics, experimenting, and creating something that delights the end user.</p>
          <ul>
            <li>Ingredients = User Research</li>
            <li>Cooking = Prototyping</li>
            <li>Plating = Final Design</li>
          </ul>
        </div>
        <Image src={assets.nissan} alt="Cooking &amp; Design Analogy" width={500} height={410} style={{ objectFit: 'cover', borderRadius: 8 }} />
      </section>

      <Journey />
      <Footer />
    </main>
  );
}
