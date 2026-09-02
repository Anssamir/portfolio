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
          <a href="mailto:annasamir122@gmail.com">annasamir122@gmail.com</a>
        </div>
        <div>
          <small>Social</small>
          <span>Based in Pune, India</span>
        </div>
        <div>
          <small>&copy; 2026 Anas Amir</small>
          <Link href="/contact">Get in touch &#x2197;</Link>
        </div>
      </div>
    </footer>
  );
}
