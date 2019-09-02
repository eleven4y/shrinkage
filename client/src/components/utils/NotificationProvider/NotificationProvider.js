import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const defaultAutoClose = 5000;
const Nop = () => {};

/**
 * Notification provider
 */
function NotificationProvider({ t, items, deleteItem, ...rest }) {
  useEffect(() => {
    if (items.length) {
      const deletedItem = items[items.length - 1];

      if (typeof deletedItem === 'object') {
        const { id, type, message, options = {} } = deletedItem;
        const {
          autoClose = defaultAutoClose,
          delay = 0,
          progress,
          hideProgressBar = true,
          closeButton = true,
          onOpen = Nop,
          onClose = Nop,
          onClick = Nop,
        } = options;

        toast(t(message), { type, autoClose, delay, closeButton, progress, hideProgressBar, onOpen, onClose, onClick });
        deleteItem(id);
      }
    }
  }, [items, deleteItem]);


  const { position, transition, autoClose, hideProgressBar, newestOnTop, closeOnClick, rtl, draggable } = rest;

  return (
    <ToastContainer
      position={position}
      transition={transition}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      rtl={rtl}
      draggable={draggable}/>
  );
}

NotificationProvider.defaultProps = {
  position: 'top-right',
  transition: Flip,
  autoClose: defaultAutoClose,
  hideProgressBar: true,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  draggable: false,
  items: [],
  deleteItem: Nop,
  t: text => text,
}

NotificationProvider.propTypes = {
  /** position of notifications */
  position: PropTypes.string,
  /** type of show/hide animations */
  transition: PropTypes.func,
  /** time of show notification */
  autoClose: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** flag, defined hide progress bar */
  hideProgressBar: PropTypes.bool,
  /** flag, defined add new notification on top */
  newestOnTop: PropTypes.bool,
  /** flag, defined close notification on click event */
  closeOnClick: PropTypes.bool,
  /** flag, defined 'right to left' content mode */
  rtl: PropTypes.bool,
  /** flag, defined possibility to drag notifications */
  draggable: PropTypes.bool,
  /** list of notifications */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** unique identificator of item */
      id: PropTypes.string,
      /** type of item */
      type: PropTypes.string,
      /** message of item */
      message: PropTypes.string,
    }),
  ),
  /** func, for delete item by id */
  deleteItem: PropTypes.func,
  /** func, translator */
  t: PropTypes.func,
};

export default NotificationProvider;