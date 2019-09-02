import { combineReducers } from 'redux';

import profile from './profile';
import data from './data';
import notifications from './notifications';

export default combineReducers({
  profile,
  data,
  notifications,
});