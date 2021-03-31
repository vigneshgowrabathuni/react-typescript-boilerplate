import React, { FunctionComponent, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: FunctionComponent<{}> = () => {
  const Home = lazy(() => import('./pages/Home'));
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
