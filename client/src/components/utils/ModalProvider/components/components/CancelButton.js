import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * CancelButton of Footer of ModalProvider component
 */
function CancelButton({ label, visible, disabled, onClick }) {
  if (!visible) {
    return null;
  }

  return (
    <button className={classnames(
      'modal-provider__btn',
      'modal-provider__btn-cancel'
      )}
      type='button'
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
}

CancelButton.defaultProps = {
  visible: true,
  disabled: false,
  onClick: () => {},
}

CancelButton.propTypes = {
  /** label of component */
  label: PropTypes.string,
  /** flag, defined visibility of component - visible/invisible */
  visible: PropTypes.bool,
  /** flag, defined disabled styles and behaviour */
  disabled: PropTypes.bool,
  /**  handler on click to component */
  onClick: PropTypes.func,
}

export default CancelButton;