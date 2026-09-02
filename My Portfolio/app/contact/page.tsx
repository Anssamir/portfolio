import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Contact — Anas Amir',
  description: 'Get in touch with Anas Amir for Product Design work.',
};

export default function Contact() {
  return (
    <main>
      <section className="contact section">
        <div className="eyebrow">Available To Work</div>
        <div>
          <h1>Anas Amir</h1>
          <h3>Product Designer</h3>
          <div className="contact-info">
            <p><small>Working Hours (IST)</small>8am to 6pm</p>
            <p><small>LinkedIn</small>1.1k+ Followers</p>
            <p><small>Instagram</small>1.6k+ Followers</p>
            <p><small>Behance</small>40+ Followers</p>
          </div>
        </div>
        <form>
          <h2>I&apos;m Here for Your Questions</h2>
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input placeholder="Your email" /></label>
          <label>Message<textarea placeholder="Tell me about your project" /></label>
          <button type="button">Send a Message &#x2197;</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
