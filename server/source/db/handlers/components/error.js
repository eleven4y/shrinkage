/**
 * @throws
 * @param {string} mark mark of instance
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (mark, connectionString) => (error) => {
  console.error(`${mark} error on connection to ${connectionString}`, error);
  throw error;
};
