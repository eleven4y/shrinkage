import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Body of Paper component
 */
function Body({ className, ...rest }) {
  return (
    <div
      className={classnames(
        className,
        'paper__body'
      )}
      {...rest}/>
  );
}

Body.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** children of component */
  children: PropTypes.node,
}

export default Body;