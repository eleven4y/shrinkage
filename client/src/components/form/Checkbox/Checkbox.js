import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './checkbox.scss';

import Box from './components/Box';

/**
 * Checkbox component
 */
function Checkbox({ className, id, name, label, tabIndex, value, disabled, onChange }) {
  const componentValue = !!value;
  const componentTabIndex = disabled ? -1 : tabIndex;

  function onKeyPressHandler(event) {
    if (event.key === 'Enter') {
      onChangeHandler(event);
    }
  }

  function onChangeHandler(event) {
    !disabled && onChange({ id, name, value: !componentValue }, event);
  }

  return (
    <div
      id={id}
      className={classnames(
        className,
        'checkbox',
      )}>
        <input
          className='checkbox__input'
          type='checkbox'
          readOnly
          name={name}
          value={value}
          checked={componentValue}
          disabled={disabled}/>
          <label
            className='checkbox__content'
            tabIndex={componentTabIndex}
            onClick={onChangeHandler}
            onKeyPress={onKeyPressHandler}>
            <Box/>
            {label && (
              <span className='checkbox__label'>
                {label}
              </span>
            )}
          </label>
    </div>
  );
}

Checkbox.defaultProps = {
  tabIndex: -1,
  value: false,
  disabled: false,
  onChange: () => {},
}

Checkbox.propTypes = {
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
  /** tab index of component */
  tabIndex: PropTypes.number,
  /** value of component - checked/unchecked */
  value: PropTypes.bool,
  /** flag, defined disabled styles and behaviour */
  disabled: PropTypes.bool,
  /**  handler on change value of component */
  onChange: PropTypes.func,
}

export default Checkbox;
