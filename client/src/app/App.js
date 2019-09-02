import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthContainer from 'containers/auth';
import HomeContainer from 'containers/home';
import NotificationContainer from 'containers/notifications';

/**
 * App entry point
 * Child routes: '/auth'
 */
function App() {
  return (
    <Fragment>
      <Switch>
        <Route
          path='/auth'
          component={AuthContainer}/>
        <Route
          path='/home'
          component={HomeContainer}/>
      </Switch>
      <NotificationContainer/>
    </Fragment>
  );
}

export default App;