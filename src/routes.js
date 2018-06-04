import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './home';
import About from './about';
import PageNotFound from './common/components/PageNotFound';
import RedirectedLogin, {userIsAuthenticated} from "./authentification";

export default (
  <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={RedirectedLogin}/>
  </Switch>
);