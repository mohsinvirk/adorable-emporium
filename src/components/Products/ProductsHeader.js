import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

class ProductsHeader extends Component {
  render() {
    const token = localStorage.getItem('customerToken');
    if (!token) {
      return (
        <header className="push">
          <div className="nav-container">
            <nav className="primary-nav">
              <Link to="/products">Products</Link>
              <Link to="/styles">Styles</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">SignUp</Link>
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
          <div className="header-container hide-content">
            <div className="content">
              <h1>Products listing</h1>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header className="push">
          <div className="nav-container">
            <nav className="primary-nav">
              <Link to="/products">Products</Link>
              <Link to="/styles">Styles</Link>
              <Link to="/myaccount">My Account</Link>
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
          <div className="header-container hide-content">
            <div className="content">
              <h1>Products listing</h1>
            </div>
          </div>
        </header>
      );
    }
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
