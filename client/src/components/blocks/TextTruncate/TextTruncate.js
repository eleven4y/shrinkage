import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Truncate from 'react-truncate';

const Nop = () => {};

/**
 * Truncate component
 */
function TextTruncate({ className, lines, ellipsis, trimWhitespace, width, text, onTruncate }) {
  return (
    <Truncate
      className={classnames(
        className,
        'truncate'
      )}
      lines={lines}
      ellipsis={ellipsis}
      trimWhitespace={trimWhitespace}
      width={width}
      onTruncate={onTruncate}>
        {text}
    </Truncate>
  );
}

TextTruncate.defaultProps = {
  trimWhitespace: false,
  width: 0,
  onTruncate: Nop,
}

TextTruncate.propTypes = {
  /** additional class names for component */
  className: PropTypes.string,
  /** text, to be truncated */
  text: PropTypes.string,
  /** count of text lines, until if gets truncated, false - will not truncate text */
  lines: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** flag, defined remove whitespaces before ellepsis */
  trimWhitespace: PropTypes.bool,
  /** width of line, 0 - calculate width, without this parameter */
  width: PropTypes.number,
  /** func, on truncate, will invok on each render */
  onTruncate: PropTypes.func,
}

export default TextTruncate;