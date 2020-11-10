import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormComponent from '../../pages/Form';
import LandingComponent from '../../pages/Landing';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/Register" component={FormComponent} />
      <Route exact path="/Landing" component={LandingComponent} />
      <Route exact path="/" component={LandingComponent} />
      <Route exact path="*" component={LandingComponent} />    
    </Switch>
  );
};

export default PrivateRoutes;
