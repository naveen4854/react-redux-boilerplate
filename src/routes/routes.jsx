import React from "react"
import { Route, Router, Switch, useRouteMatch, Link, Redirect } from 'react-router-dom';

import history from 'src/routes/history';
import { Header, Footer } from "src/shared-components";
import { Home } from "src/home";

const Routes = () => {
  console.log('hey')

  return (
    <Router history={history}>
      <Route component={Header} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}


export default Routes