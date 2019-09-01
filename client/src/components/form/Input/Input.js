import React from 'react';
import PropTypes from 'prop-types';

function Input({ className, value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}/>
  );
}

Input.defaultProps = {
  onChange: () => {},
}

Input.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** value of component */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /** handler of change value */
  onChange: PropTypes.func,
}

export default Input;