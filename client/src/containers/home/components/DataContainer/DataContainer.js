import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import UsersContainer from './components/UserContainer';

/**
 * Data container
 * Root route: '/data/home'
 * Child routes: '/users'
 */
function DataContainer({ location, match }) {
  const { path } = match;

  return (
    <Switch location={location}>
      <Route
        path={`${path}/users`}
        component={UsersContainer}/>
    </Switch>
  );
}

DataContainer.propTypes = {
  /** react router location object */
  location: PropTypes.object,
  /** react router history object */
  history: PropTypes.object,
  /** react router match object */
  match: PropTypes.object,
};

export default DataContainer;