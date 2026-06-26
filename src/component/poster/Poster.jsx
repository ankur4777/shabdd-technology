import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import './Poster.css';

function Poster() {
  return (
    <section className="poster">
      <div className="poster-copy">
        <span className="poster-kicker">Digital growth partner</span>
        <h1>
          Empowering Your
          <br />
          Business with
          <br />
          Innovative IT Solutions
        </h1>
        <p>Offering a spectrum of digital services tailored to your needs.</p>

        <div className="poster-actions">
          <a className="poster-primary" href="/services/web-development">
            Our Services
          </a>
          <a className="poster-secondary" href="/about">
            Learn More
            <HiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="poster-visual" aria-label="Smiling business professional">
        <div className="poster-shape poster-shape-one" />
        <div className="poster-shape poster-shape-two" />
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=760&q=85"
          alt="Smiling business professional"
        />
      </div>
    </section>
  );
}

export default Poster;
