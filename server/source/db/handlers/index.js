import colors from 'colors';

import connected from './connected';
import connecting from './connecting';
import disconnected from './disconnected';
import error from './error';

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