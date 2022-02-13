import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes, IRoutes } from 'router/Routes';

const App = () => {
  return (
    <Switch>
      {routes.map((item: IRoutes, index: number) => (
        <Route path={item.path} key={index} component={item.component} />
      ))}
      <Redirect to='/home' from='/'></Redirect>
    </Switch>
  );
};

export default App;
