import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CartCounter from './CartCounter';

const CartHeader = props => {
  let headerText;

  if (props.location.pathname.includes('cart')) {
    headerText = 'Shopping Cart';
  } else if (props.location.pathname.includes('checkout')) {
    headerText = 'Checkout';
  } else if (props.location.pathname.includes('order-confirmation')) {
    headerText = 'Order Confirmation';
  }
  const token = localStorage.getItem('customerToken');
  if (!token) {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/produce">Produce</Link>
            <Link to="login">Login</Link>
            <Link to="register">SignUp</Link>
          </nav>
          <div className="logo light">
            <Link to="/" className="logo-link">
              <span className="logo-text">
                <b> GREEN</b> HEART
              </span>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container smaller">
          <div className="content">
            <h1>{headerText}</h1>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/produce">Produce</Link>
            <Link to="myaccount">My Account</Link>
          </nav>
          <div className="logo light">
            <Link to="/" className="logo-link">
              <span className="logo-text">
                <b> GREEN</b> HEART
              </span>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container smaller">
          <div className="content">
            <h1>{headerText}</h1>
          </div>
        </div>
      </header>
    );
  }
};

export default withRouter(CartHeader);
