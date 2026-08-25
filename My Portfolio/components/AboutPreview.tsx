'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/data/assets';

export function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="eyebrow">About Me</div>
      <div className="photo-frame reveal">
        <Image src={assets.portrait} alt="Himesh Mehta" width={360} height={440} style={{ objectFit: 'cover', objectPosition: '50% 0' }} />
      </div>
      <div className="reveal">
        <h2>Himesh Mehta,<br />Your Designer</h2>
        <strong>Product Designer since 3+ Years</strong>
        <p>I&apos;m a Product Designer with 3+ years of experience at Wong Doody, where I specialize in creating seamless, user-centered designs.</p>
        <Link className="text-link" href="/about-me">More About Me &#x2197;</Link>
      </div>
    </section>
  );
}
