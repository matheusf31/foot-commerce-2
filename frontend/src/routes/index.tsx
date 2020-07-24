import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" exact component={SignUp} />

    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/cart" component={Cart} isPrivate />
  </Switch>
);

export default Routes;
