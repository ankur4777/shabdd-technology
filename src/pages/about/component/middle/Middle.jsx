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
      <style>{`
        .middle-trusted-section {
          position: relative;
          isolation: isolate;
          width: min(100%, 1280px);
          margin: 0 auto;
          padding: clamp(34px, 5vw, 70px) clamp(18px, 5vw, 86px) clamp(30px, 5vw, 56px);
          overflow: hidden;
          color: #272b3f;
          background:
            linear-gradient(156deg, rgba(255,255,255,.97) 0%, rgba(248,250,253,.94) 44%, rgba(255,255,255,.98) 100%),
            radial-gradient(circle at 20% 8%, rgba(230,234,242,.75), transparent 30%),
            radial-gradient(circle at 84% 56%, rgba(230,234,242,.65), transparent 32%);
        }

        .middle-trusted-section::before,
        .middle-trusted-section::after {
          content: "";
          position: absolute;
          inset: auto -12% 22% -12%;
          height: 34%;
          z-index: -1;
          border-radius: 50%;
          background: rgba(226, 231, 239, .36);
          transform: rotate(-8deg);
        }

        .middle-trusted-section::after {
          inset: 4% -18% auto -18%;
          height: 24%;
          background: rgba(239, 242, 247, .8);
          transform: rotate(-5deg);
        }

        .middle-hero-grid {
          display: grid;
          grid-template-columns: minmax(280px, .9fr) minmax(360px, 1.1fr);
          gap: clamp(28px, 5vw, 58px);
          align-items: start;
        }

        .middle-copy {
          grid-column: 1 / -1;
          max-width: 650px;
        }

        .middle-copy h2 {
          width: min(100%, 610px);
          margin: 0;
          color: #2b2d40;
          font-size: clamp(34px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: 0;
        }

        .middle-copy h2 span {
          color: #df2028;
        }

        .middle-title-line {
          width: min(100%, 560px);
          height: 3px;
          margin: 14px 0 24px;
          background: linear-gradient(90deg, #df2028, rgba(223,32,40,0));
        }

        .middle-copy p {
          margin: 0;
          color: #4f5261;
          font-size: clamp(15px, 1.8vw, 22px);
          line-height: 1.55;
        }

        .middle-copy p span {
          color: #df2028;
        }

        .middle-left-visual {
          position: relative;
          min-height: 545px;
          padding-top: 48px;
        }

        .middle-person-card {
          position: relative;
          width: min(390px, 100%);
          height: 530px;
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(180deg, #ffb8c2 0%, #f8a5b2 100%);
        }

        .middle-person {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 74%;
          height: 86%;
          transform: translateX(-50%);
        }

        .middle-head {
          position: absolute;
          left: 50%;
          top: 32px;
          width: 110px;
          height: 128px;
          transform: translateX(-50%);
          border-radius: 46% 46% 42% 42%;
          background: #f1bd92;
          box-shadow: inset 0 -12px 0 rgba(168, 91, 44, .18);
        }

        .middle-hair {
          position: absolute;
          left: 50%;
          top: 8px;
          width: 126px;
          height: 70px;
          transform: translateX(-50%) rotate(-7deg);
          border-radius: 58% 48% 34% 38%;
          background: #232432;
        }

        .middle-glasses {
          position: absolute;
          left: 50%;
          top: 84px;
          width: 105px;
          height: 32px;
          transform: translateX(-50%);
        }

        .middle-glasses::before,
        .middle-glasses::after {
          content: "";
          position: absolute;
          width: 34px;
          height: 30px;
          border: 7px solid #f05c26;
          border-radius: 50%;
        }

        .middle-glasses::before { left: 8px; }
        .middle-glasses::after { right: 8px; }

        .middle-mouth {
          position: absolute;
          left: 50%;
          top: 122px;
          width: 24px;
          height: 31px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #312437;
        }

        .middle-body {
          position: absolute;
          left: 50%;
          bottom: -34px;
          width: 244px;
          height: 315px;
          transform: translateX(-50%);
          border-radius: 46% 46% 0 0;
          background: linear-gradient(90deg, #9a5e31, #b9773f 48%, #8f542d);
        }

        .middle-shirt {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 92px;
          height: 280px;
          transform: translateX(-50%);
          background: #fff5ed;
          clip-path: polygon(21% 0, 79% 0, 100% 100%, 0 100%);
        }

        .middle-arm {
          position: absolute;
          right: -34px;
          top: 223px;
          width: 228px;
          height: 40px;
          border-radius: 999px;
          background: #f1bd92;
          transform: rotate(-22deg);
          transform-origin: left center;
          box-shadow: -70px 0 0 #a86638;
        }

        .middle-finger {
          position: absolute;
          right: -55px;
          top: 194px;
          width: 116px;
          height: 22px;
          border-radius: 999px;
          background: #f1bd92;
          transform: rotate(-8deg);
        }

        .middle-engagement {
          position: absolute;
          top: 70px;
          right: clamp(-6px, 3vw, 14px);
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 254px;
          padding: 18px 26px;
          border: 12px solid #fff;
          border-radius: 999px;
          background: #f7f8fb;
          box-shadow: 0 12px 28px rgba(26, 35, 58, .16);
        }

        .middle-engagement-icon,
        .middle-highlight-icon,
        .middle-support-icon {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          color: #fff;
          background: #ec2027;
          box-shadow: 0 5px 9px rgba(170, 20, 26, .28);
        }

        .middle-engagement strong {
          display: block;
          color: #262a3e;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1;
        }

        .middle-engagement span {
          color: #7a7f8c;
          font-size: 14px;
          font-weight: 800;
        }

        .middle-sales-card {
          position: absolute;
          left: 28px;
          bottom: 2px;
          width: min(290px, calc(100% - 42px));
          padding: 23px 25px 24px;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 16px 34px rgba(27, 34, 54, .16);
        }

        .middle-sales-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 22px;
          font-weight: 800;
          color: #292d40;
          line-height: 1.05;
        }

        .middle-sales-top span {
          color: #10bd88;
        }

        .middle-chart {
          width: 100%;
          height: 118px;
        }

        .middle-right-visual {
          min-width: 0;
        }

        .middle-social-card {
          position: relative;
          width: min(100%, 520px);
          min-height: 270px;
          margin-left: auto;
          overflow: hidden;
          border-radius: 24px;
          background: linear-gradient(135deg, #e8d7c9 0%, #f8efe7 54%, #dcc4b8 100%);
          box-shadow: 0 12px 24px rgba(36, 42, 58, .14);
        }

        .middle-table-line {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(22deg, transparent 47%, rgba(255,255,255,.7) 48% 51%, transparent 52%),
            linear-gradient(112deg, transparent 44%, rgba(255,255,255,.52) 45% 48%, transparent 49%);
        }

        .middle-laptop,
        .middle-hand {
          position: absolute;
          border-radius: 8px;
          background: #2d3147;
        }

        .middle-laptop::after {
          content: "";
          position: absolute;
          inset: 8px;
          border-radius: 4px;
          background: #dfe6eb;
        }

        .middle-laptop.one { width: 105px; height: 70px; left: 62px; top: 18px; transform: rotate(13deg); }
        .middle-laptop.two { width: 112px; height: 76px; right: 56px; top: 26px; transform: rotate(-13deg); }
        .middle-laptop.three { width: 118px; height: 74px; left: 72px; bottom: 34px; transform: rotate(-18deg); }
        .middle-laptop.four { width: 118px; height: 74px; right: 60px; bottom: 28px; transform: rotate(16deg); }

        .middle-hand {
          width: 78px;
          height: 92px;
          background: #2b9fc4;
          border-radius: 35px 35px 10px 10px;
        }

        .middle-hand.one { left: 72px; top: -22px; transform: rotate(22deg); }
        .middle-hand.two { right: 42px; top: -12px; transform: rotate(-24deg); background: #21a0c8; }
        .middle-hand.three { left: 24px; bottom: 12px; transform: rotate(-31deg); background: #c67848; }
        .middle-hand.four { right: 5px; bottom: 24px; transform: rotate(26deg); background: #bf5d42; }

        .middle-bubble {
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 82px;
          height: 52px;
          padding: 0 16px;
          border-radius: 17px;
          color: #fff;
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          transform: rotate(var(--rotate));
          box-shadow: 0 10px 17px rgba(38, 28, 45, .12);
        }

        .middle-bubble.like { left: 186px; top: 48px; background: #ff6428; --rotate: -38deg; }
        .middle-bubble.click { left: 146px; top: 109px; background: #d71351; --rotate: 33deg; }
        .middle-bubble.hello { right: 103px; top: 101px; background: #ffc21c; --rotate: 27deg; }
        .middle-bubble.more { right: 114px; bottom: 28px; background: #ff6e22; --rotate: -70deg; }

        .middle-round {
          position: absolute;
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          color: #fff;
          font-size: 25px;
          background: #ef1f25;
          box-shadow: inset 0 0 0 5px rgba(75, 20, 20, .38);
        }

        .middle-round.left { left: 38px; top: 98px; }
        .middle-round.right { right: 36px; top: 96px; }

        .middle-play {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          place-items: center;
          width: 86px;
          height: 86px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          color: #fff;
          font-size: 29px;
          background: #7438bc;
          box-shadow: 0 10px 24px rgba(82, 53, 146, .24);
        }

        .middle-highlights {
          margin-top: clamp(34px, 5vw, 74px);
        }

        .middle-highlights h3 {
          position: relative;
          width: fit-content;
          max-width: 100%;
          margin: 0 auto 38px;
          color: #303246;
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.2;
          text-align: center;
          letter-spacing: 0;
        }

        .middle-highlights h3::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -12px;
          width: 112%;
          height: 2px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(223,32,40,0), #df2028, rgba(223,32,40,0));
        }

        .middle-highlights h3 span {
          color: #df2028;
        }

        .middle-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .middle-highlight-card,
        .middle-support-card {
          display: flex;
          align-items: center;
          gap: 18px;
          min-height: 92px;
          padding: 18px 25px;
          border: 1px solid rgba(222, 226, 234, .9);
          border-radius: 12px;
          background: rgba(255, 255, 255, .92);
          box-shadow: 0 10px 18px rgba(24, 32, 52, .14);
        }

        .middle-highlight-card h4,
        .middle-support-card h4 {
          margin: 0 0 8px;
          color: #25283b;
          font-size: clamp(15px, 1.6vw, 21px);
          line-height: 1.15;
        }

        .middle-highlight-card p,
        .middle-support-card p {
          margin: 0;
          color: #333647;
          font-size: clamp(13px, 1.35vw, 18px);
          line-height: 1.38;
        }

        .middle-support-card {
          position: relative;
          grid-column: 1 / -1;
          width: min(100%, 840px);
          margin: 10px auto 0;
          overflow: hidden;
          padding-right: 190px;
        }

        .middle-agent {
          position: absolute;
          right: 48px;
          bottom: -10px;
          width: 118px;
          height: 118px;
        }

        .middle-agent-face {
          position: absolute;
          left: 50%;
          top: 18px;
          width: 62px;
          height: 72px;
          transform: translateX(-50%);
          border-radius: 47%;
          background: #f1bd92;
        }

        .middle-agent-hair {
          position: absolute;
          left: 50%;
          top: 11px;
          width: 76px;
          height: 45px;
          transform: translateX(-50%);
          border-radius: 44% 44% 22% 22%;
          background: #263147;
        }

        .middle-agent-headset {
          position: absolute;
          left: 50%;
          top: 15px;
          width: 88px;
          height: 70px;
          transform: translateX(-50%);
          border: 7px solid #263147;
          border-bottom: 0;
          border-radius: 46px 46px 0 0;
        }

        .middle-agent-headset::before,
        .middle-agent-headset::after {
          content: "";
          position: absolute;
          top: 34px;
          width: 22px;
          height: 37px;
          border-radius: 10px;
          background: #ec2027;
        }

        .middle-agent-headset::before { left: -10px; }
        .middle-agent-headset::after { right: -10px; }

        .middle-agent-body {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 118px;
          height: 46px;
          transform: translateX(-50%);
          background: #2b334a;
          clip-path: polygon(22% 0, 78% 0, 100% 100%, 0 100%);
        }

        .middle-testimonial {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 28px;
          margin-top: clamp(40px, 6vw, 72px);
          padding: 20px 28px 24px;
          border-top: 1px solid #dce0e7;
          border-bottom: 1px solid #dce0e7;
        }

        .middle-avatar {
          position: relative;
          display: grid;
          place-items: end center;
          width: 128px;
          height: 128px;
          overflow: hidden;
          border-radius: 50%;
          background: #eef6fb;
        }

        .middle-avatar::before {
          content: "";
          position: absolute;
          bottom: -22px;
          width: 92px;
          height: 76px;
          border-radius: 36px 36px 0 0;
          background: #20283d;
          border-bottom: 10px solid #e21f28;
        }

        .middle-avatar::after {
          content: "";
          position: absolute;
          top: 23px;
          width: 58px;
          height: 68px;
          border-radius: 46%;
          background: #f0bd91;
          box-shadow: 0 -18px 0 -4px #222437;
        }

        .middle-testimonial h4 {
          margin: 0 0 4px;
          color: #292c40;
          font-size: clamp(22px, 2vw, 30px);
          line-height: 1;
        }

        .middle-testimonial p {
          margin: 0 0 13px;
          color: #717684;
          font-size: clamp(12px, 1.2vw, 16px);
          font-weight: 700;
          text-transform: uppercase;
        }

        .middle-stars {
          display: flex;
          gap: 7px;
          color: #7148c9;
          font-size: 21px;
        }

        @media (max-width: 980px) {
          .middle-hero-grid {
            grid-template-columns: 1fr;
          }

          .middle-copy {
            grid-column: auto;
          }

          .middle-left-visual {
            order: 2;
            min-height: 510px;
            padding-top: 30px;
          }

          .middle-right-visual {
            order: 1;
          }

          .middle-social-card {
            margin: 0;
          }
        }

        @media (max-width: 720px) {
          .middle-card-grid {
            grid-template-columns: 1fr;
          }

          .middle-highlight-card,
          .middle-support-card {
            align-items: flex-start;
            padding: 16px;
          }

          .middle-support-card {
            padding-right: 16px;
            padding-bottom: 122px;
          }

          .middle-agent {
            right: 50%;
            transform: translateX(50%);
          }

          .middle-testimonial {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }

          .middle-stars {
            justify-content: center;
          }
        }

        @media (max-width: 560px) {
          .middle-trusted-section {
            padding-inline: 14px;
          }

          .middle-social-card {
            min-height: 230px;
          }

          .middle-laptop.one { left: 34px; }
          .middle-laptop.two { right: 26px; }
          .middle-laptop.three { left: 33px; }
          .middle-laptop.four { right: 22px; }

          .middle-bubble {
            min-width: 66px;
            height: 42px;
            padding: 0 11px;
            font-size: 15px;
          }

          .middle-bubble.like { left: 145px; top: 46px; }
          .middle-bubble.click { left: 104px; top: 100px; }
          .middle-bubble.hello { right: 74px; top: 98px; }
          .middle-bubble.more { right: 72px; bottom: 25px; }

          .middle-round {
            width: 52px;
            height: 52px;
            font-size: 20px;
          }

          .middle-play {
            width: 70px;
            height: 70px;
            font-size: 23px;
          }

          .middle-left-visual {
            min-height: 470px;
          }

          .middle-person-card {
            height: 475px;
          }

          .middle-engagement {
            top: 48px;
            min-width: 202px;
            gap: 12px;
            padding: 13px 16px;
            border-width: 8px;
          }

          .middle-engagement-icon,
          .middle-highlight-icon,
          .middle-support-icon {
            width: 45px;
            height: 45px;
          }

          .middle-sales-card {
            left: 12px;
            width: min(260px, calc(100% - 24px));
          }
        }

        @media (max-width: 420px) {
          .middle-copy h2 {
            font-size: 32px;
          }

          .middle-left-visual {
            min-height: 430px;
          }

          .middle-person-card {
            height: 420px;
          }

          .middle-person {
            width: 84%;
          }

          .middle-head {
            width: 92px;
            height: 108px;
          }

          .middle-hair {
            width: 104px;
          }

          .middle-body {
            width: 210px;
            height: 260px;
          }

          .middle-engagement {
            right: 0;
            min-width: 172px;
          }

          .middle-engagement strong {
            font-size: 23px;
          }

          .middle-engagement span {
            font-size: 11px;
          }

          .middle-sales-card {
            padding: 17px;
          }
        }
      `}</style>

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
        </div>

        <div className="middle-left-visual" aria-label="Growth and engagement illustration">
          <div className="middle-person-card">
            <div className="middle-person">
              <div className="middle-arm" />
              <div className="middle-finger" />
              <div className="middle-body">
                <div className="middle-shirt" />
              </div>
              <div className="middle-head">
                <div className="middle-hair" />
                <div className="middle-glasses" />
                <div className="middle-mouth" />
              </div>
            </div>
          </div>

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
              <path d="M8 96 C22 72 34 100 48 64 C64 27 82 68 96 86 C112 108 128 49 144 80 C160 114 174 120 190 70 C204 38 215 78 232 18 L232 112 L8 112 Z" fill="url(#middleChartFill)" />
              <path d="M8 96 C22 72 34 100 48 64 C64 27 82 68 96 86 C112 108 128 49 144 80 C160 114 174 120 190 70 C204 38 215 78 232 18" fill="none" stroke="#10b987" strokeLinecap="round" strokeWidth="5" />
              <g stroke="#e8edf1" strokeWidth="1">
                <path d="M8 20 V112" />
                <path d="M56 20 V112" />
                <path d="M104 20 V112" />
                <path d="M152 20 V112" />
                <path d="M200 20 V112" />
              </g>
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
