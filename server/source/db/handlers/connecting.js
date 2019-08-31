/**
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (name, connectionString) => () => {
  console.log(`[${name}] try establish connection to ${connectionString}`);
}