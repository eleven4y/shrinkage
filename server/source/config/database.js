/**
 * Configuration of used database
 * @property {string} name 
 * @property {string} host
 * @property {string} database
 * @property {string} base
 * @property {Object} options connection options
 */
const config = {
  name: 'mongodb',
  host: 'localhost',
  port: '27017',
  base: 'shrinkage',
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
  },
};

export default config;