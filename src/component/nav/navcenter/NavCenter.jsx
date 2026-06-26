import React from 'react';
import { Link } from "react-router-dom";
import './NavCenter.css';
import { BiSolidDownArrow } from "react-icons/bi";


const services = [
  { label: 'WEB DEVELOPMENT', path: '/services/web-development' },
  { label: 'WEB APPLICATION', path: '/services/web-application' },
  { label: 'DIGITAL MARKETING', path: '/services/digital-marketing' },
  { label: 'SEARCH ENGINE OPTIMIZATION', path: '/services/seo' },
  { label: 'META ADS', path: '/services/meta-ads' },
  { label: 'GRAPHIC DESIGNING', path: '/services/graphic-designing' },
  { label: 'YOUTUBE ADS', path: '/services/youtube-ads' },
];

function NavCenter() {
  return (
    <div className="nav-center">
      <Link className="nav-link" to="/">HOME</Link>
      <Link className="nav-link" to="/about">ABOUT US</Link>

      <div className="nav-dropdown">
        <button className="nav-link nav-dropdown-button" type="button">
          SERVICES 
          <BiSolidDownArrow/>
        </button>
        

        <div className="dropdown-menu">
          {services.map((service) => (
            <Link className="dropdown-link" to={service.path} key={service.path}>
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      <Link className="nav-link" to="/contact">CONTACT US</Link>
    </div>
  );
}

export default NavCenter;
