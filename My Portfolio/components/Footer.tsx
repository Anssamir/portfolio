'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>Lets</p>
        <p>design</p>
        <p>build</p>
        <p>create</p>
        <p>incredible work together.</p>
      </div>
      <div className="contact-grid">
        <div>
          <small>Email</small>
          <a href="mailto:mehtahimesh4@gmail.com">mehtahimesh4@gmail.com</a>
        </div>
        <div>
          <small>Call Me</small>
          <a href="https://topmate.io/himesh10" target="_blank" rel="noreferrer">Book Now &#x2197;</a>
        </div>
        <div>
          <small>Social</small>
          <span>Based in Pune, India</span>
        </div>
        <div>
          <small>&copy; 2026 Himesh Mehta</small>
          <Link href="/contact">Get in touch &#x2197;</Link>
        </div>
      </div>
    </footer>
  );
}
