/**
 * @throws
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (name, connectionString) => (error) => {
  console.error(`[${name}] error on connection to ${connectionString}`, error);
  throw error;
}