import { combineReducers } from 'redux';

import users from './users';

/**
 * Get data parameters
 * @param {Object} state redux state object
 * @return {Object}
 */
export const getData = state =>
  state.data;

export default combineReducers({
  users,
});