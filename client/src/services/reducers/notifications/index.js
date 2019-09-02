import uuid from 'uuid';

import { PUSH_NOTIFY, PULL_NOTIFY } from '../action-types';

/**
 * Dictionary of available notify types
 * @readonly
 * @enum {string}
 */
export const NotifyTypes = {
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error',
};

/**
 * Get notifications reducer parameters
 * @param {Object} state redux state object
 * @return {Object}
 */
export const getNotifications = state =>
  state.notifications;

/**
 * Get list of notifications items
 * @param {Object} state redux state object
 * @return {Object[]}
 */
export const getNotificationsItems = state =>
  getNotifications(state).items;

/**
 * Push to list of notification new item
 * @param {string} [id] unique identificator of notification
 * @param {string} message text of notification
 * @param {NotifyTypes} type type of notification
 * @return {Object}
 */
export function pushNotify({ id: _id, message, type }) {
  const id = _id ? _id : uuid();

  return {
    type: PUSH_NOTIFY,
    payload: { id, message, type },
  };
}

/**
 * Pull notification items by id
 * @param {string} id unique identificator of notification
 * @return {Object}
 */
export function pullNotify(id) {
  return {
    type: PULL_NOTIFY,
    meta: { id },
  };
}

/**
 * Push success notification
 * @param {string} [id] unique identificator of notification
 * @param {string} message text of notification
 * @return {Object}
 */
export function pushSuccessNotification({ id, message }) {
  return pushNotify({ id, message, type: NotifyTypes.success });
}

/**
 * Push info notification
 * @param {string} [id] unique identificator of notification
 * @param {string} message text of notification
 * @return {Object}
 */
export function pushInfoNotification({ id, message }) {
  return pushNotify({ id, message, type: NotifyTypes.info });
}

/**
 * Push warn notification
 * @param {string} [id] unique identificator of notification
 * @param {string} message text of notification
 * @return {Object}
 */
export function pushWarnNotification({ id, message }) {
  return pushNotify({ id, message, type: NotifyTypes.warn });
}

/**
 * Push error notification
 * @param {string} [id] unique identificator of notification
 * @param {string} message text of notification
 * @return {Object}
 */
export function pushErrorNotification({ id, message }) {
  return pushNotify({ id, message, type: NotifyTypes.error });
}


const initialState = {
  /** List of notifications */
  items: [],
};

export default (state = initialState, action) => {
  const { type, payload, meta } = action;

  switch(type) {
  case PUSH_NOTIFY:
    return {
      ...state,
      items: [
        payload,
        ...state.items,
      ],
    };
  case PULL_NOTIFY:
    return {
      ...state,
      items: state.items
        .filter(item => item.id !== meta.id),
    }
  default:
    return state;
  }
}