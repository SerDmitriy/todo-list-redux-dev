import React from 'react';
import { Route, Switch } from 'react-router-dom';
import publicRouter from './publicRouter';
import privatRouter from './privatRouter';

export default () => 
  <Switch>
    {publicRouter.map((_route, idx) => <Route key={`public-${idx}`} {..._route} />)}
    {privatRouter.map((_route, id) => <Route key={`privat-${id}`} {..._route} />)}
    <Route exact path="/*" component={ () => <div>Not found page</div>} />
  </Switch>