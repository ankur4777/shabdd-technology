import React, { useEffect, useState } from 'react';
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
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setServiceOpen(false);
    }
  }, [isOpen]);

  const handleNavigate = () => {
    setServiceOpen(false);
    onNavigate?.();
  };

  return (
    <div className={`nav-center ${isOpen ? 'nav-center-open' : ''}`}>
      <Link className="nav-link" to="/" onClick={handleNavigate}>HOME</Link>
      <Link className="nav-link" to="/about" onClick={handleNavigate}>ABOUT US</Link>

      <div className={`nav-dropdown ${serviceOpen ? 'nav-dropdown-open' : ''}`} onMouseLeave={() => setServiceOpen(false)}>
        <button
          className="nav-link nav-dropdown-button"
          type="button"
          aria-expanded={serviceOpen}
          onClick={() => setServiceOpen((open) => !open)}
        >
          SERVICES 
          <BiSolidDownArrow className="nav-dropdown-icon" />
        </button>
        

        <div className="dropdown-menu">
          {services.map((service) => (
            <Link className="dropdown-link" to={service.path} key={service.path} onClick={handleNavigate}>
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      <Link className="nav-link" to="/contact" onClick={handleNavigate}>CONTACT US</Link>
    </div>
  );
}

export default NavCenter;
