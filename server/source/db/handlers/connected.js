/**
 * @param {string} name database name
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (name, connectionString) => () => {
  console.log(`[${name}] connected to ${connectionString}`);
}