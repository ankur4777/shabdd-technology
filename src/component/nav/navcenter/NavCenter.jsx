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

function NavCenter({ isOpen = false, onNavigate }) {
  return (
    <div className={`nav-center ${isOpen ? 'nav-center-open' : ''}`}>
      <Link className="nav-link" to="/" onClick={onNavigate}>HOME</Link>
      <Link className="nav-link" to="/about" onClick={onNavigate}>ABOUT US</Link>

      <div className="nav-dropdown">
        <button className="nav-link nav-dropdown-button" type="button">
          SERVICES 
          <BiSolidDownArrow/>
        </button>
        

        <div className="dropdown-menu">
          {services.map((service) => (
            <Link className="dropdown-link" to={service.path} key={service.path} onClick={onNavigate}>
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      <Link className="nav-link" to="/contact" onClick={onNavigate}>CONTACT US</Link>
    </div>
  );
}

export default NavCenter;
