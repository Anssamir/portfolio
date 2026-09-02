'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/data/assets';

export function Header() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span className="brand-avatar">
          <Image src={assets.portrait} alt="Anas Amir" width={48} height={48} style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </span>
        <span>Anas Amir</span>
      </Link>
      <nav>
        <Link href="/work">Work</Link>
        <Link href="/about-me">About Me</Link>
        <a className="resume-pill" href="https://www.upwork.com/freelancers/anasamir" target="_blank" rel="noreferrer">
          Upwork
        </a>
      </nav>
    </header>
  );
}
