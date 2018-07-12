import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

import Header from '../../assets/img/headers/photo.png';

const StylesHeader = ({ style, header }) => {
  const token = localStorage.getItem('customerToken');
  if (!token) {
    return (
      <header
        className="medium-header light push"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundOrigin: 'border-box',
          backgroundAttachment: 'scroll'
        }}>
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/produce">Produce</Link>
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
          <nav className="secondary-nav light">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container light">
          <div className="content">
            <h1>
              {'Sustainable food Systems'}
              <span className="hide-content"> styles</span>
            </h1>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className="medium-header light push"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundOrigin: 'border-box',
          backgroundAttachment: 'scroll'
        }}>
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/produce">Produce</Link>
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
        <div className="header-container light">
          <div className="content">
            <h1>
              {'Sustainable food Systems'}
              <span className="hide-content"> styles</span>
            </h1>
          </div>
        </div>
      </header>
    );
  }
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);
