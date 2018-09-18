import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../app/common';
import { HomePage } from '../pages';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage}/>
      {/*<Route exact={true} path="/note/:noteId" component={FullNotesPage}/>*/}
      <Route component={NotFound}/>
    </Switch>
  );
};

export default Routes;