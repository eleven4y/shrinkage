import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthContainer from '../containers/auth'

/**
 * App entry point
 * Child routes: '/auth'
 */
function App() {
  return (
    <Switch>
      <Route
        path='/auth'
        component={AuthContainer}/>
    </Switch>
  );
}

export default App;