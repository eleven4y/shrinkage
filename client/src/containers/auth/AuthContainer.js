import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import LoginContainer from './components/LoginContainer';
import RegisterContainer from './components/RegisterContainer';

/**
 * Authorization container
 * Root route: '/auth'
 * Child routes: '/login', '/register'
 */
function AuthContainer({ match, location }) {
  const { path } = match;

  return (
    <Switch location={location}>
      <Route
        path={`${path}/login`}
        component={LoginContainer}/>
      <Route
        path={`${path}/register`}
        component={RegisterContainer}/>
    </Switch>
  );
}

AuthContainer.propTypes = {
  /** react router location object */
  location: PropTypes.object,
  /** react router history object */
  history: PropTypes.object,
  /** react router match object */
  match: PropTypes.object,
};

export default withRouter(AuthContainer);
