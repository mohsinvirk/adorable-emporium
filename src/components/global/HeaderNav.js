import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Products</Link>
      <Link to="/styles">Styles</Link>
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
);

export default HeaderNav;
