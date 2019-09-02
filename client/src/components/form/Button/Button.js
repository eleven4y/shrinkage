import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

/**
 * Dictionary of available sizes of button
 * @readonly
 * @enum {string}
 */
export const ButtonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

/**
 * Dictionary of available themes of button
 * @readonly
 * @enum {string}
 */
export const ButtonThemes = {
  blue: 'blue',
  green: 'green',
  grey: 'grey',
  orange: 'orange',
  red: 'red',
};

const defaultSize = ButtonSizes.medium;
const defaultTheme = ButtonThemes.blue;

/**
 * Button component
 */
function Button({ className, type, size, theme, label, disabled, onClick }) {
  const componentSize = ButtonSizes[size] || defaultSize;
  const componentTheme = ButtonThemes[theme] || defaultTheme;

  return (
    <button
      className={classnames(
        className,
        'button',
        `button--size-${componentSize}`,
        `button--theme-${componentTheme}`,
        {'button--disabled': disabled},
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
  size: defaultSize,
  theme: defaultTheme,
  disabled: false,
  onClick: () => {},
}

Button.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** type of component */
  type: PropTypes.string,
  /** size of component */
  size: PropTypes.oneOf(
    Object.values(ButtonSizes)
  ),
  /** theme of component, defined styles */
  theme: PropTypes.oneOf(
    Object.values(ButtonThemes)
  ),
  /** label of component */
  label: PropTypes.string,
  /** flag, defined disabled styles and behaviour */
  disabled: PropTypes.bool,
  /**  handler on click to component */
  onClick: PropTypes.func,
}

export default Button;