import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Header of ModalProvider component
 */
function Header({ className, title, subtitle }) {
  return (
    <div className={classnames(
      className,
      'modal-provider__header'
      )}>
      <span className='modal-provider__title'>
        {title}
      </span>
    </div>
  );
}

Header.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** title of component */
  title: PropTypes.string,
  /** subtitle of */
  subtitle: PropTypes.string,
}

export default Header;