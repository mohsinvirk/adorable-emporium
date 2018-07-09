import React, { Component } from 'react';
import LoginForm from './loginForm';
import Header from './HeaderNav';

export default class Login extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 200 }}>
        <Header />
        <LoginForm />
      </div>
    );
  }
}
