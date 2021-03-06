import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import DataContainer from './components/DataContainer';

/**
 * Home container
 * Root route: '/home'
 * Child routes: '/data'
 */
function HomeContainer({ location, match }) {
  const { path } = match;

  return (
    <Switch location={location}>
      <Route
        path={`${path}/data`}
        component={DataContainer}/>
    </Switch>
  );
}

HomeContainer.propTypes = {
  /** react router location object */
  location: PropTypes.object,
  /** react router history object */
  history: PropTypes.object,
  /** react router match object */
  match: PropTypes.object,
};

export default HomeContainer;