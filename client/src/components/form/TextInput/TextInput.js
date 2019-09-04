import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './text-input.scss';

/**
 * TextInput component
 */
function TextInput({ className, id, name, label, placeholder, value, disabled, onChange }) {
  /** on Change value handler */
  const onChangeHandler = useCallback((event) => {
    const { value } = event.target;
    !disabled && onChange({ id, name, value }, event);
  }, [id, name, disabled, onChange]);

  return (
    <label className={classnames(
      className,
      'text-input',
      {'text-input--disabled': disabled},
    )}
      id={id}>
      {label && (
        <label className='text-input__label' htmlFor='textInput'>
          {label}
        </label>
      )}
      <input
        id='textInput'
        name={name}
        className='text-input__value'
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}/>
    </label>
  );
}

TextInput.defaultProps ={
  disabled: false,
  onChange: () => {},
}

TextInput.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** unique identificator of component */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** name of component */
  name: PropTypes.string,
  /** label of component */
  label: PropTypes.string,
  /** placeholder of component */
  placeholder: PropTypes.string,
  /** value of component - checked/unchecked */
  value: PropTypes.bool,
  /** flag, defined disabled styles and behaviour */
  disabled: PropTypes.bool,
  /**  handler on change value of component */
  onChange: PropTypes.func,
}

export default TextInput;