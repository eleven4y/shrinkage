import { getData } from '../index';

import { STORE_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../../action-types';

/**
 * Get users reducer parameters
 * @param {Object} state redux state object
 * @return {Object}
 */
export const getUsers = state =>
  getData(state).users;

/**
 * Get map-object with users parameters
 * @param {Object} state redux state object
 * @return {Object}
 */
export const getUsersItemsMap = state =>
  getUsers(state).itemsMap;

/**
 * Get list of users ids
 * @param {Object} state redux state object
 * @return {string[]}
 */
export const getUsersItemsList = state =>
  getUsers(state).itemsList;

/**
 * Get count of stored users
 * @param {Object} state redux state object
 * @return {number}
 */
export const getUsersItemsCount = state =>
  getUsersItemsList(state).length;

/**
 * Store users parameters
 * @param {Object[]} users list of users with parameters
 * @return {Object}
 */
export function storeUsers(users) {
  const itemsList = users.map(user => user.id);
  const itemsMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return {
    type: STORE_USERS,
    payload: itemsMap,
    meta: { itemsList },
  }
}

/**
 * Create new user
 * @param {Object} user user parameters
 * @return {Object}
 */
export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
    meta: { id: user.id }
  };
}

/**
 * Update user by unique identificator
 * @param {Object} user user parameters
 * @return {Object}
 */
export function updateUserById(id, user) {
  return {
    type: UPDATE_USER,
    payload: user,
    meta: { id },
  };
}

/**
 * Delete user by unique identificator
 * @param {Object} user user parameters
 * @return {Object}
 */
export function deleteUserById(id) {
  return {
    type: DELETE_USER,
    meta: { id },
  };
}

const initialState = {
  /** map-object with user parameters */
  itemsMap: null,
  /** list of users ids */
  itemsList: null,
}

export default (state = initialState, action) => {
  const { type, payload, meta } = action;

  switch(type) {
  case STORE_USERS:
    return {
      ...state,
      itemsMap: payload,
      itemsList: meta.itemsList,
    };
  case CREATE_USER:
    const itemsList = [...state.itemsList, payload];
    const itemsMap = {
      ...state.itemsMap,
      [meta.id]: payload,
    };

    return {
      ...state,
      itemsMap,
      itemsList,
    }
  case UPDATE_USER: {
    const itemsMap = {
      ...state.itemsMap,
      [meta.id]: { ...state.itemsMap[meta.id], ...payload },
    };

    return {
      ...state,
      itemsMap,
    };
  }
  case DELETE_USER: {
    const itemsList = state.itemsList
      .filter(item => item !== meta.id);
    const itemsMap = itemsList
      .reduce((acc, item) => {
        acc[item] = state.itemsMap[item];
        return acc;
      }, {});

    return {
      ...state,
      itemsMap,
      itemsList,
    };
  }
  default:
    return state;
  }
}