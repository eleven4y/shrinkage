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
export default (name, connectionString) => {
  const mark = colors.magenta(`[${name}]`);
  const underlineConnectionString = colors.underline(connectionString);

  return {
    connected: connected(mark, underlineConnectionString),
    connecting: connecting(mark, underlineConnectionString),
    disconnected: disconnected(mark, underlineConnectionString),
    error: error(mark, underlineConnectionString),
  };
};