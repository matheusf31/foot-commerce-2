import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CreateOrderSuccess from '../pages/CreateOrderSuccess';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" exact component={SignUp} />

    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/cart" component={Cart} isPrivate />
    <Route path="/order/success" component={CreateOrderSuccess} isPrivate />
  </Switch>
);

export default Routes;
