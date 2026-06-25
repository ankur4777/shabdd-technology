import React from 'react';
import { Link } from 'react-router-dom';

function NavCenter() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>

    {/**DropDown functionality */}
    <select>
        <option>Web Development</option>
        <option>Web Application</option>
    </select>
    </div>
  );
}

export default NavCenter;
