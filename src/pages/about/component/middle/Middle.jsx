import React from 'react';
import {
  FaChartBar,
  FaChartLine,
  FaHeadset,
  FaLightbulb,
  FaPlay,
  FaStar,
  FaThumbsUp,
  FaBullseye,
  FaCog,
  FaCloud,
} from 'react-icons/fa';
import './Middle.css';

const highlights = [
  {
    icon: <FaLightbulb />,
    title: 'Innovative Solutions',
    text: 'Cutting-edge app development & IT strategies',
  },
  {
    icon: <FaBullseye />,
    title: 'Tailored Approaches',
    text: 'Customized services for maximum impact',
  },
  {
    icon: <FaCog />,
    title: 'Holistic Services',
    text: 'Marketing & tech support under over roof.',
  },
  {
    icon: <FaChartLine />,
    title: 'Proven Results',
    text: 'Delivering measurable growth, & high ROI',
  },
];

function Middle() {
  return (
    <section className="middle-trusted-section">
      <div className="middle-hero-grid">
        <div className="middle-copy">
          <h2>
            Your <span>Trusted</span> Partner
            <br />
            in Digital Solutions
          </h2>
          <div className="middle-title-line" />
          <p>
            At Shabdd Technologies, we <span>turn vision into reality.</span>
          </p>
          
          <p>At Shabdd Technologies, we are dedicated to delivering IT solutions that help businesses thrive in an ever-evolving digital landscape. With a focus on app development, lead generation, social media marketing, and SEO management, we provide comprehensive services that cater to your unique business needs.</p>
        
        </div>
      <div className="middle-left-visual">
          <img
            className="middle-growth-image"
            src="/about/image-4.png"
            alt="Growth and engagement illustration"
          />

          <div className="middle-engagement">
            <div className="middle-engagement-icon">
              <FaChartBar />
            </div>
            <div>
              <strong>120%</strong>
              <span>ENGAGEMENT</span>
            </div>
          </div>

          <div className="middle-sales-card">
            <div className="middle-sales-top">
              <strong>
                Increase
                <br />
                Sales
              </strong>
              <span>+66.4%</span>
            </div>
            <svg className="middle-chart" viewBox="0 0 240 118" role="img" aria-label="Sales growth chart">
              <defs>
                <linearGradient id="middleChartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#14bd8b" stopOpacity=".22" />
                  <stop offset="100%" stopColor="#14bd8b" stopOpacity=".05" />
                </linearGradient>
              </defs>
              <g stroke="#e8edf1" strokeWidth="1">
                <path d="M8 20 V112" />
                <path d="M56 20 V112" />
                <path d="M104 20 V112" />
                <path d="M152 20 V112" />
                <path d="M200 20 V112" />
              </g>
              <path d="M8 96 C22 72 34 100 48 64 C64 27 82 68 96 86 C112 108 128 49 144 80 C160 114 174 120 190 70 C204 38 215 78 232 18 L232 112 L8 112 Z" fill="url(#middleChartFill)" />
              <path d="M8 96 C22 72 34 100 48 64 C64 27 82 68 96 86 C112 108 128 49 144 80 C160 114 174 120 190 70 C204 38 215 78 232 18" fill="none" stroke="#10b987" strokeLinecap="round" strokeWidth="5" />
              <circle cx="232" cy="18" r="5" fill="#10b987" />
            </svg>
          </div>
        </div>

        <div className="middle-right-visual">
          <div className="middle-social-card" aria-label="Digital marketing workspace illustration">
            <div className="middle-table-line" />
            <div className="middle-laptop one" />
            <div className="middle-laptop two" />
            <div className="middle-laptop three" />
            <div className="middle-laptop four" />
            <div className="middle-hand one" />
            <div className="middle-hand two" />
            <div className="middle-hand three" />
            <div className="middle-hand four" />
            <span className="middle-round left"><FaThumbsUp /></span>
            <span className="middle-bubble like">Like</span>
            <span className="middle-bubble click">Click</span>
            <span className="middle-play"><FaPlay /></span>
            <span className="middle-bubble hello">Hello</span>
            <span className="middle-round right"><FaCloud /></span>
            <span className="middle-bubble more">Share</span>
          </div>

          <div className="middle-highlights">
            <h3>
              <span>Key Highlights</span> of Shabdd Technologies:
            </h3>

            <div className="middle-card-grid">
              {highlights.map((item) => (
                <article className="middle-highlight-card" key={item.title}>
                  <div className="middle-highlight-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}

              <article className="middle-support-card">
                <div className="middle-support-icon">
                  <FaHeadset />
                </div>
                <div>
                  <h4>Dedicated Support</h4>
                  <p>A skilled team with you at every step.</p>
                </div>
                <div className="middle-agent" aria-hidden="true">
                  <div className="middle-agent-body" />
                  <div className="middle-agent-face" />
                  <div className="middle-agent-hair" />
                  <div className="middle-agent-headset" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-testimonial">
        <div className="middle-avatar" aria-hidden="true" />
        <div>
          <h4>Pardeep Bhatia</h4>
          <p>SR. PROJECT MANAGER</p>
          <div className="middle-stars" aria-label="Five star rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
