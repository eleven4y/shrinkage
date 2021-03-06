/**
 * @param {string} mark mark of instance
 * @param {string} connectionString string of connected server location
 * @return {Function}
 */
export default (mark, connectionString) => () => {
  console.log(`${mark} listenning ${connectionString}`);
};
