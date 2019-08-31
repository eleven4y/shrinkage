import colors from 'colors';

import connected from './components/connected';

/**
 * @param {string} name server name
 * @param {string} host server host
 * @param {number} port server port
 * @return {Object}
 */
export default (name ,host, port) => {
  const mark = colors.green(`[${name}]`);
  const underlineConnectionString = colors.underline(`${host}:${port}`);

  return {
    connected: connected(mark, underlineConnectionString),
  };
};