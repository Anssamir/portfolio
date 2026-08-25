'use client';

import Link from 'next/link';

interface CTAProps {
  text?: string;
  showDoodle?: boolean;
  to?: string;
}

export function CTA({ text = "Let's Work Together", showDoodle = true, to = "/contact" }: CTAProps) {
  return (
    <div className="cta-wrapper">
      {showDoodle && (
        <svg className="cta-doodle" viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 12 18 C 25 48, 50 68, 75 60 C 100 52, 102 24, 82 24 C 65 24, 62 48, 88 56 C 118 64, 138 46, 152 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 138 31 L 153 29 L 150 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
      <Link href={to} className="cta">
        <span>{text}</span>
        <b className="cta-icon">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 3 8 L 7 12 L 13 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 8 4 L 13 4 L 13 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </b>
      </Link>
    </div>
  );
}
