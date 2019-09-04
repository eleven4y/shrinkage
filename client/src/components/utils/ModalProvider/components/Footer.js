import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SubmitButton from './components/SubmitButton';
import CancelButton from './components/CancelButton';

/**
 * Footer of ModalProvider component
 */
function Footer({ t, className, hasCancel, hasSubmit, isValid, onCancel, onSubmit }) {
  const submitBtnDisabled = !isValid;

  return (
    <div className={classnames(
      className,
      'modal-provider__footer'
    )}>
      <CancelButton
        label={t('Cancel')}
        visible={hasCancel}
        onClick={onCancel}/>
      <SubmitButton
        label={t('Submit')}
        visible={hasSubmit}
        disabled={submitBtnDisabled}
        onClick={onSubmit}/>
    </div>
  );
}

Footer.defaultProps = {
  hasCancel: true,
  hasSubmit: true,
  isValid: true,
  t: text => text,
}

Footer.propTypes = {
  /** additional class name for component */
  className: PropTypes.string,
  /** flag, defined visibility of cancel button */
  hasCancel: PropTypes.bool,
  /** flag, defined visibility of submit button */
  hasSubmit: PropTypes.bool,
  /** flag, defined disabled styles and behaviour of submit button */
  isValid: PropTypes.bool,
  /** handler on click to cancel button */
  onCancel: PropTypes.func,
  /** handler on click to submit button */
  onSubmit: PropTypes.func,
  /** func, translator */
  t: PropTypes.func,
}

export default Footer;
