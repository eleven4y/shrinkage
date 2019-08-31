import colors from 'colors';

import connected from './components/connected';
import connecting from './components/connecting';
import disconnected from './components/disconnected';
import error from './components/error';

/**
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Object}
 */
export default (name ,connectionString) => {
  const mark = colors.magenta(`[${name}]`)

  return {
    connected: connected(mark, connectionString),
    connecting: connecting(mark, connectionString),
    disconnected: disconnected(mark, connectionString),
    error: error(mark, connectionString),
  };
};