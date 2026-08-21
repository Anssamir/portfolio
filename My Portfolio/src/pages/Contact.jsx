import React from 'react';
import { Footer } from '../components/Footer.jsx';

export function Contact() {
  return (
    <main>
      <section className="contact section">
        <div>
          <div className="eyebrow">Available To Work</div>
          <h1>Himesh Mehta</h1>
          <h3>Product Designer</h3>

          <div className="contact-info">
            <p>
              <small>Working Hours (IST)</small>
              8am to 6pm
            </p>
            <p>
              <small>LinkedIn</small>
              1.1k+ Followers
            </p>
            <p>
              <small>Instagram</small>
              1.6k+ Followers
            </p>
            <p>
              <small>Behance</small>
              40+ Followers
            </p>
          </div>
        </div>

        <form>
          <h2>I'm Here for Your Questions</h2>
          <label>
            Name
            <input placeholder="Your name" />
          </label>
          <label>
            Email
            <input placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea placeholder="Tell me about your project" />
          </label>
          <button type="button">Send a Message ↗</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
