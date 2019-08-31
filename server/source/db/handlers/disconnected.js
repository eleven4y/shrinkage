/**
 * @throws
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (name, connectionString) => (error) => {
  console.error(`[${name}] disconnected on ${connectionString}`, error);
  throw error;
}