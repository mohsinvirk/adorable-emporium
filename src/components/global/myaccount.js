import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { GetAllOrders } from '../../moltin';
import Header from './HeaderNav';

class MyAccount extends React.Component {
  state = {
    loading: false,
    orders: [],
    customerEmail: ''
  };

  componentDidMount() {
    const token = localStorage.getItem('customerToken');

    if (!token) {
      this.props.history.push('/');
    }

    console.log(this.state.customerEmail);

    GetAllOrders.then(response => {
      let data = response.data;
      var filteredArray = data.filter(item => {
        const ItemEmail = item['customer']['email'];
        const customerEmail = localStorage.getItem('customerEmail');
        return customerEmail === ItemEmail;
      });
      this.setState({
        orders: filteredArray
      });
    });
  }

  render() {
    const data = [];
    this.state.orders.map(item => {
      return data.push({
        id: item.id,
        name: item.customer.name,
        status: item.status,
        shipping: item.shipping,
        payment: item.payment,
        amount: item.meta.display_price.with_tax.formatted
      });
    });
    console.log(data);
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Order ID',
        accessor: 'id'
      },
      {
        Header: 'Order Status',
        accessor: 'status'
      },
      {
        Header: 'Shipping Status',
        accessor: 'shipping'
      },
      {
        Header: 'Payment',
        accessor: 'payment'
      },
      {
        Header: 'Amount',
        accessor: 'amount'
      }
    ];

    return (
      <div>
        <Header style={{ backgroundColor: '#fff' }} />
        <div className="content" style={{ marginTop: 150 }}>
          <h4>MY ORDERS</h4>
          <ReactTable columns={columns} data={data} defaultPageSize={5} />
        </div>
      </div>
    );
  }
}

export default withRouter(MyAccount);
