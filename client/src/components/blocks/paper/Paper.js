import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './paper.scss';

import Header from './components/Header';
import Body from './components/Body';

/**
 * Paper component
 */
function Paper({ className, ...rest }) {
  return (
    <div
      className={classnames(
        className,
        'paper',
      )}
      {...rest}/>
  );
}

Paper.Header = Header;
Paper.Body = Body;

Paper.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** children of component */
  children: PropTypes.node,
}

export default Paper;