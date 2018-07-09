import React, { Component } from 'react';
import { CreateCustomer, GetCustomerToken } from '../../moltin';
import Header from './HeaderNav';

export default class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false,
    type: 'customer'
  };
  _handleSubmit = e => {
    e.preventDefault();
    const { type, name, email, password } = this.state;
    const customer = {
      type,
      name,
      email,
      password
    };

    this.setState({
      loading: true
    });

    CreateCustomer(customer)
      .then(response => {
        GetCustomerToken(email, password)
          .then(result => {
            const { id, token } = result.data;
            localStorage.setItem('clientToken', token);
            localStorage.setItem('mcustomer', id);
            console.log(
              `Here is the clientToken ${token.toString()} and client id is ${id} `
            );
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
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.setState({
          loading: false
        });
      });
  };

  _handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const { loading } = this.state;
    return (
      <div style={{ marginTop: 200 }}>
        <Header />
        <div className="content">
          <div className="form-group">
            <h3>SignUp for a New Account</h3>
          </div>
          <form onSubmit={this._handleSubmit} loading={loading}>
            <div className="from-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={e => this._handleChange(e)}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={e => this._handleChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => this._handleChange(e)}
              />
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import { register } from '../../moltin'

// export default class Register extends React.Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         loading: false
//     }

//     _handleSubmit = async e => {
//         e.preventDefault()

//         const { name, email, password } = this.state

//         this.setState({
//             loading: true
//         })

//         try {
//             const { id, token } = await register({ name, email, password })
//             localStorage.setItem('customerToken', token)
//             localStorage.setItem('mcustomer', id)
//             console.log();

//         } catch (e) {
//             this.setState({
//                 loading: false
//             })
//         }
//     }

//     _handleChange = ({ target: { name, value } }) =>
//         this.setState({ [name]: value })

//     render() {
//         const { loading } = this.state

//         return (
//             <div>
//                 <form onSubmit={this._handleSubmit} loading={loading}>
//                     <div>
//                         <label>Name</label>
//                         <input
//                             fluid
//                             name="name"
//                             autoFocus
//                             onChange={e => this._handleChange(e)}
//                         />
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input
//                             fluid
//                             name="email"
//                             type="email"
//                             onChange={e => this._handleChange(e)}
//                         />
//                     </div>

//                     <div>
//                         <label>Password</label>
//                         <input
//                             fluid
//                             name="password"
//                             type="password"
//                             onChange={e => this._handleChange(e)}
//                         />
//                     </div>

//                     <button type="submit" color="orange">
//                         Register
//             </button>
//                 </form>
//             </div>
//         )
//     }
// }
