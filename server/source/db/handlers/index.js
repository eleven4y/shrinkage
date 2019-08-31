import connected from './connected';
import connecting from './connecting';
import disconnected from './disconnected';
import error from './error';

/**
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Object}
 */
export default (name ,connectionString) => ({
  connected: connected(name, connectionString),
  connecting: connecting(name, connectionString),
  disconnected: disconnected(name, connectionString),
  error: error(name, connectionString),
});