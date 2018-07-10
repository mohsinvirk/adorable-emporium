import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';
import MobileNav from './Mobile/MobileNav';

const token = localStorage.getItem('customerToken');
const HeaderNav = props => {
  if (!token) {
    return (
      <div>
        <MobileNav />
        <header className="push">
          <div className="nav-container" style={props.style}>
            <nav className="primary-nav light">
              <Link to="/products">Products</Link>
              <Link to="/styles">Styles</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </nav>
            <div className="logo light">
              <Link to="/" className="logo-link">
                <span className="logo-text">
                  <b> GREEN</b> HEART
                </span>
              </Link>
            </div>
            <nav className="secondary-nav light">
              <CartCounter />
            </nav>
          </div>
        </header>
      </div>
    );
  } else if (token) {
    return (
      <div>
        <MobileNav />
        <header className="push">
          <div className="nav-container" style={props.style}>
            <nav className="primary-nav light">
              <Link to="/products">Products</Link>
              <Link to="/styles">Styles</Link>
              <Link to="/myAccount">My Account</Link>
            </nav>
            <div className="logo light">
              <Link to="/" className="logo-link">
                <span className="logo-text">
                  <b> GREEN</b> HEART
                </span>
              </Link>
            </div>
            <nav className="secondary-nav light">
              <CartCounter />
            </nav>
          </div>
        </header>
      </div>
    );
  }
};

export default HeaderNav;
