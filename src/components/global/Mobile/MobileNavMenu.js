import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const token = localStorage.getItem('customerToken');
  if (!token) {
    return (
      <nav id="mobile-nav" aria-hidden="true" className="pushy pushy-left">
        <ul>
          <li className="pushy-link">
            <Link to="/products">Products</Link>
          </li>
          <li className="pushy-link">
            <Link to="/styles">Styles</Link>
          </li>
          <li className="pushy-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="pushy-link">
            <Link to="/resgister">SignUp</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav id="mobile-nav" aria-hidden="true" className="pushy pushy-left">
        <ul>
          <li className="pushy-link">
            <Link to="/products">Products</Link>
          </li>
          <li className="pushy-link">
            <Link to="/styles">Styles</Link>
          </li>
          <li className="pushy-link">
            <Link to="/myAccount">My Account</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default NavMenu;
