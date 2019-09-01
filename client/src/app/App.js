import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthContainer from '../containers/auth';
import HomeContainer from '../containers/home';

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
      <Route
        path='/home'
        component={HomeContainer}/>
    </Switch>
  );
}

export default App;