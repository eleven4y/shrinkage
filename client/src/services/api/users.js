import axiosInstance from '../axios';

import { FETCH_USERS_URL, CREATE_USER_URL, FETCH_USER_URL, UPDATE_USER_URL, DELETE_USER_URL } from './api-urls';

/**
 * Fetch list of users
 * @return {Promise}
 */
export function fetchUsers() {
  return axiosInstance.get(FETCH_USERS_URL);
}

/**
 * Create new user with parameters
 * @param {Object} user object with user parameters
 * @return {Promise}
 */
export function createUser(user) {
  return axiosInstance.post(CREATE_USER_URL, { user });
}

/**
 * Fetch user parameters by unique identificator
 * @param {string} id user unique identificator
 * @return {Promise}
 */
export function fetchUserById(id) {
  return axiosInstance.get(FETCH_USER_URL, { params: { id } });
}

/**
 * Update existed user parameters
 * @param {string} id user unique identificator
 * @param {Object} user object with user parameters
 * @return {Promise}
 */
export function updateUserById(id, user) {
  return axiosInstance.put(UPDATE_USER_URL, { user }, { params: { id } });
}

/**
 * Delete existed user
 * @param {string} id user unique identificator
 * @return {Promise}
 */
export function deleteUserById(id) {
  return axiosInstance.delete(DELETE_USER_URL, { params: { id } });
}