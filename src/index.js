import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import App from './components/App';
import { GetProducts, GetCategories } from './moltin';

import './index.css';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        {console.log(GetProducts, GetCategories)}
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
