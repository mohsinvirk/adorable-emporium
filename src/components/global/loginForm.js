import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { GetCustomerToken, GetACustomer } from '../../moltin';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    errors: null
  };

  _handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    this.setState({
      loading: true,
      errors: null
    });

    GetCustomerToken(email, password)
      .then(result => {
        const { id, customer_id, token } = result.data;
        localStorage.setItem('customerToken', token);
        localStorage.setItem('mcustomer', id);
        localStorage.setItem('customer_id', customer_id);
        const _customer_id = localStorage.getItem('customer_id');
        GetACustomer(_customer_id).then(response => {
          localStorage.setItem('customerEmail', response.data.email);
        });
        this.props.history.push('/myaccount');
      })
      .catch(error => {
        console.log(error);
        this.setState(() => {
          return {
            error,
            loading: false
          };
        });
      });
  };

  _handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    return (
      <div className="content">
        <div className="form-header">
          <h3>Log in to your account</h3>
        </div>
        <form onSubmit={this._handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => this._handleChange(e)}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this._handleChange(e)}
            />
          </div>
          <div className="form-control">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
