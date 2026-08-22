import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { assets } from '../data/assets.js';
import { Journey } from '../components/Journey.jsx';
import { Footer } from '../components/Footer.jsx';

export function About() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <section className="about-hero section">
        <div className="eyebrow">About Me</div>
        <div>
          <h1>
            Himesh Mehta,
            <br />
            Your Designer
          </h1>
          <strong>Product Designer since 4+ Years</strong>
          <p>
            I’m a UX designer with 4+ years of experience at Wong Doody, specializing in creating
            seamless, user-centered designs.
          </p>
          <p>
            I love digging deep into problems, understanding user needs, and crafting intuitive
            digital experiences that are both beautiful and functional. For me, great design is not
            just about aesthetics—it’s about accessibility, usability, and solving real problems with
            creativity and purpose.
          </p>
        </div>
        <img className="reveal" src={assets.portrait} alt="Himesh Mehta" />
      </section>

      <section className="statement">
        <p>
          Crafting meaningful experiences inspired by
          <br />
          life's flavors, frames, and journeys.
        </p>
      </section>

      <section className="about-block section">
        <div className="eyebrow">Designer BTS</div>
        <img src={assets.about} alt="Designer Behind The Scenes" />
        <div>
          <h2>My Shutterbug mode</h2>
          <p>
            When I’m not designing, I’m behind the lens capturing moments that tell a story. Here’s a
            glimpse into the world through my eyes:
          </p>
          <strong>ツ 35M+ Views, 100K+ Downloads</strong>
        </div>
      </section>

      <section className="about-block section reverse">
        <div className="eyebrow">Chef of UX & Spices</div>
        <div>
          <h2>Lowkey a Chef</h2>
          <p>
            Cooking is my creative escape — it’s where I blend flavors like I combine user needs with
            design principles. Much like UX design, cooking is about understanding the basics,
            experimenting, and creating something that delights the end user.
          </p>
          <ul>
            <li>Ingredients = User Research</li>
            <li>Cooking = Prototyping</li>
            <li>Plating = Final Design</li>
          </ul>
        </div>
        <img src={assets.nissan} alt="Cooking & Design Analogy" />
      </section>

      <Journey />
      <Footer />
    </main>
  );
}
