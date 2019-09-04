import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './scrollbar.scss';

import { Scrollbars } from 'react-custom-scrollbars';

const Nop = () => {};

/**
 * Scrollbar component
 */
function Scrollbar({ className, children, ...rest }) {
  return (
    <Scrollbars
      className={classnames(
        className,
        'scrollbar'
      )
      }
      {...rest}>
        <div className='scrollbar__content'>
          {children}
        </div>
    </Scrollbars>
  );
}

Scrollbar.defaultProps = {
  autoHide: true,
  autoHideTimeout: 1000,
  autoHideDuration: 200,
  autoHeight: true,
  autoHeightMin: 100,
  autoHeightMax: 300,
  universal: false,
  onScroll: Nop,
  onScrollFrame: Nop,
  onScrollStart: Nop,
  onScrollStop: Nop,
  onUpdate: Nop,
}

Scrollbar.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** flag, defined hide scroll behavior for component */
  autoHide: PropTypes.bool,
  /** number of miliseconds, before hide scroll */
  autoHideTimeout: PropTypes.bool,
  /** number of miliseconds, to hide scroll */
  autoHideDuration: PropTypes.bool,
  /** flag, defined auto height [autoHeightMin, autoHeightMax] values */
  autoHeight: PropTypes.bool,
  /** number of min-height component, with autoHeight props */
  autoHeightMin: PropTypes.bool,
  /** number of max-height component, with autoHeight props */
  autoHeightMax: PropTypes.bool,
  /** flag, defined universal rendering */
  universal: PropTypes.bool,
  /** func, handle on scroll event */
  onScroll: PropTypes.func,
  /** func, handle on scroll event, run inside the animation frame */
  onScrollFrame: PropTypes.func,
  /** func, handle on scroll start event */
  onScrollStart: PropTypes.func,
  /** func, handle on scroll stop event */
  onScrollStop: PropTypes.func,
  /** func, handle update ever the component, run inside the animation frame */
  onUpdate: PropTypes.func,
  /** children of component */
  children: PropTypes.any,
}

export default Scrollbar;
