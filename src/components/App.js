import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import CheckoutContainer from './Checkout/CheckoutContainer';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OneClickCheckout from './Checkout/OneClickCheckout';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
import Login from './global/login';
import MobileNav from './global/Mobile/MobileNav';
import Footer from './global/Footer';
import Register from './global/resgister';
import Account from './global/myaccount';

const App = props => (
  <div>
    {<MobileNav />}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/myaccount" component={Account} />
      <Route path="/cart" component={Cart} />
      <Route path="/styles" component={StylesContainer} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/checkout" component={CheckoutContainer} />
      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/product/:id" component={SingleProductContainer} />
      <Route
        path="/one-click-checkout/:productId"
        component={OneClickCheckout}
      />
      <Route path="*" component={NotFound} />
    </Switch>

    <Footer />
  </div>
);

export default App;
