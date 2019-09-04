import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Body of ModalProvider component
 */
function Body({ className, ...rest }) {
  return (
    <div
      className={
        classnames(
          className,
          'modal-provider__body',
        )
      }
      {...rest}/>
  );
}

Body.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** children node */
  children: PropTypes.any,
}

export default Body;