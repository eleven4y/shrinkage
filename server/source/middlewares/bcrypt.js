import bcrypt from 'bcrypt';

const salt = 10;

/**
 * Get hash of input string
 * @param {string} text
 * @return {string}
 */
export async function hash(text) {
  return await bcrypt.hash(text, salt);
}

/**
 * Compare input text and hash
 * @param {string} text
 * @param {string} hash 
 * @return {boolean}
 */
export async function compare(text, hash) {
  return await bcrypt.compare(text, hash);
}