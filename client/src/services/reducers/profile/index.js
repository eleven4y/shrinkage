import { STORE_PROFILE, RESET_PROFILE } from '../action-types';

/**
 * Get user profile parameters
 * @param {Object} state redux state object
 * @return {Object}
 */
export const getProfile = (state) =>
  state.profile;

/**
 * Get user profile unique identificator
 * @param {Object} state redux state object
 * @return {string}
 */
export const getProfileId = (state) =>
  getProfile(state).id;

/**
 * Get user profile login
 * @param {Object} state redux state object
 * @return {string}
 */
export const getProfileLogin = (state) =>
  getProfile(state).login;

/**
 * Get user profile access
 * @param {Object} state redux state object
 * @return {string}
 */
export const getProfileAccess = (state) =>
  getProfile(state).access;

/**
 * Store user profile parameters
 * @param {string} id uniqueu user identificator
 * @param {string} login user login
 * @param {string} access user access
 * @return {Object}
 */
export function storeProfile(id, login, access) {
  return {
    type: STORE_PROFILE,
    payload: { id, login, access },
  };
}

/**
 * Reset user profile parameters
 * @return {Object}
 */
export function resetProfile() {
  return {
    type: RESET_PROFILE,
  };
}

const initialState = {
  /** User unique identificator */
  id: null,
  /** User login */
  login: null,
  /** User access */
  access: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
  case STORE_PROFILE:
    return {
      id: payload.id,
      login: payload.login,
      access: payload.access,
    }
  case RESET_PROFILE:
    return initialState;
  default:
    return state;
  }
}