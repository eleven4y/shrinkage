import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * SubmitButton of Footer of ModalProvider component
 */
function SubmitButton({ label, visible, disabled, onClick }) {
  if (!visible) {
    return null;
  }

  return (
    <button className={classnames(
      'modal-provider__btn',
      'modal-provider__btn-submit'
      )}
      type='submit'
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
}

SubmitButton.defaultProps = {
  visible: true,
  disabled: false,
  onClick: () => {},
}

SubmitButton.propTypes = {
  /** label of component */
  label: PropTypes.string,
  /** flag, defined visibility of component - visible/invisible */
  visible: PropTypes.bool,
  /** flag, defined disabled styles and behaviour */
  disabled: PropTypes.bool,
  /**  handler on click to component */
  onClick: PropTypes.func,
}

export default SubmitButton;