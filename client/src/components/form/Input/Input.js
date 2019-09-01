import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './input.scss';

/**
 * Dictionary with possible sizes of component
 * @readonly
 * @enum {string}
 */
export const InputSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const defaultSize = InputSizes.medium;

/**
 * Input component
 */
function Input({ className, size, error, placeholder, value, onChange }) {
  const componentSize = InputSizes[size] || defaultSize;

  return (
    <input
      className={classnames(
        className,
        'input',
        `input--${componentSize}`,
        {'input--error': error}
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
  );
}

Input.defaultProps = {
  error: false,
  size: defaultSize,
  onChange: () => {},
}

Input.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** defined size of component */
  size: PropTypes.oneOf(
    Object.values(InputSizes)
  ),
  /** flag, defined error styles for component */
  error: PropTypes.bool,
  /** placeholder for component */
  placeholder: PropTypes.string,
  /** value of component */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /** handler of change value */
  onChange: PropTypes.func,
}

export default Input;