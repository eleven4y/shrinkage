import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Dictionary with possible modes of component
 * @readonly
 * @enum {string}
 */
export const ButtonModes = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
};

/**
 * Dictionary with possible sizes of component
 * @readonly
 * @enum {string}
 */
export const ButtonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const defaultMode = ButtonModes.primary;
const defaultSize = ButtonSizes.medium;

/**
 * Button component
 */
function Button({ className, type, mode, size, label, disabled, onClick }) {
  const componentMode = ButtonModes[mode] || defaultMode;
  const componentSize = ButtonSizes[size] || defaultSize;

  return (
    <button
      className={classnames(
        className,
        'button',
        `button--mode-${componentMode}`
        `button--size-${componentSize}`
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  mode: defaultMode,
  size: defaultSize,
  disabled: false,
  onClick: () => {},
}

Button.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** type of component */
  type: PropTypes.string,
  /** mode, defined styles of component */
  mode: PropTypes.oneOf(
    Object.values(ButtonModes),
  ),
  /** label of component */
  label: PropTypes.string,
  /** flag, defined disabled styles of component */
  disabled: PropTypes.bool,
  /** handler of click on component */
  onClick: PropTypes.func,
}

export default Button;
