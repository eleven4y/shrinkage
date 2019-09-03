import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Header of Paper component
 */
function Header({ className, ...rest }) {
  return (
    <div
      className={classnames(
        className,
        'paper__header'
      )}
      {...rest}/>
  );
}

Header.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** children of component */
  children: PropTypes.node,
}

export default Header;