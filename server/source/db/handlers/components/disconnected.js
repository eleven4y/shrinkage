/**
 * @param {string} mark mark of instance
 * @param {string} connectionString string of connected database location
 * @return {Function}
 */
export default (mark, connectionString) => () => {
  console.log(`${mark} disconnected on ${connectionString}`);
};
