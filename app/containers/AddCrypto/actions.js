/*
 *
 * AddCrypto actions
 *
 */

import {
  CHANGE_FORM_DATA,
  SUBMIT_FORM_DATA,
  SUBMIT_FORM_DATA_ERROR,
  SUBMIT_FORM_DATA_SUCCESS,
} from './constants';

/**
 * Changes the input fields of the form
 */
export function changeFormData(formData) {
  return {
    type: CHANGE_FORM_DATA,
    formData,
  };
}

/**
 * Changes the input fields of the form
 */
export function submitFormData() {
  return {
    type: SUBMIT_FORM_DATA,
  };
}

/**
 * Changes the input fields of the form
 */
export function formDataSubmitted(formData) {
  return {
    type: SUBMIT_FORM_DATA_SUCCESS,
    formData,
  };
}

/**
 * Changes the input fields of the form
 */
export function formDataError(err) {
  return {
    type: SUBMIT_FORM_DATA_ERROR,
    err,
  };
}
