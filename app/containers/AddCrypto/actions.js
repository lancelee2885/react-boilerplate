/*
 *
 * AddCrypto actions
 *
 */

import { CHANGE_FORM_DATA, SUBMIT_FORM_DATA } from './constants';

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
