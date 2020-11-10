import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListComponent from '../../pages/List';
import NotFound from '../../pages/PageNotFound';
import LandingComponent from '../../pages/Landing';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/List" component={ListComponent} />
      <Route component={NotFound} />
      <Route exact path="/" component={LandingComponent} />

    </Switch>
  );
};

export default PrivateRoutes;
