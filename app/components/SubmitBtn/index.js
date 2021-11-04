import React from 'react';
import PropTypes from 'prop-types';
import { SubmitBtnWrapper } from './SubmitBtnElements';

/** SubmitBtn:
 *  - Simple button for sumbitting a form.
 */
function SubmitBtn({ text }) {
  return <SubmitBtnWrapper> {text} </SubmitBtnWrapper>;
}

SubmitBtn.propTypes = {
  text: PropTypes.string,
};

export default SubmitBtn;
