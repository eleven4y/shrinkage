import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './modal-provider.scss';

import ReactModal from 'react-modal';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

ReactModal.setAppElement('body');

const Nop = () => {};

/**
 * Dictionary of available sizes of modal provider
 * @readonly
 * @enum {string}
 */
export const ModalProviderSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
};

const defaultSize = ModalProviderSizes.medium;

/**
 * ModalProvider component
 */
function ModalProvider({ t, className, size, ...rest }) {
  const componentSize = ModalProviderSizes[size] || defaultSize;

  return (
    <ReactModal
      className={
        classnames(
          className,
          'modal-provider',
          `modal-provider--size-${componentSize}`,
        )
      }
      {...rest}/>
  );
}

ModalProvider.Header = Header;
ModalProvider.Body = Body;
ModalProvider.Footer = Footer;

ModalProvider.defaultProps = {
  isOpen: false,
  size: defaultSize,
  closeTimeoutMS: 0,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  onAfterOpen: Nop,
  onRequestClose: Nop,
  t: text => text,
}

ModalProvider.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** additional class name for portal used by component */
  portalClassName: PropTypes.string,
  /** additional class name for overlay used by component */
  overlayClassName: PropTypes.string,
  /** additional class name for body used by component */
  bodyOpenClassName: PropTypes.string,
  /** additional class name for document used by component */
  htmlOpenClassName: PropTypes.string,
  /** additional class name for component */
  size: PropTypes.oneOf(
    Object.values(ModalProviderSizes),
  ),
  /** flag, defined state of component - open/close */
  isOpen: PropTypes.bool,
  /** number indicating the milliseconds to wait before closing the modal */
  closeTimeoutMS: PropTypes.number,
  /** flag, defined if press 'esc' key should close the modal */
  shouldCloseOnEsc: PropTypes.bool,
  /** flag, defined if the oclick on verlay should close the modal */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** func, that will be run after the modal has opened */
  onAfterOpen: PropTypes.func,
  /** func, that will be run before the modal has closed */
  onRequestClose: PropTypes.func,
  /** func, translator */
  t: PropTypes.func,
}

export default ModalProvider;