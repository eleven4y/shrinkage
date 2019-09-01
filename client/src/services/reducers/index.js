import { combineReducers } from 'redux';

import profile from './profile';
import data from './data';

export default combineReducers({
  profile,
  data,
});