/*
 *
 * AddCrypto reducer
 *
 */
import produce from 'immer';
import { CHANGE_FORM_DATA, SUBMIT_FORM_DATA } from './constants';

export const initialState = {
  formData: {
    symbol: '',
    name: '',
    description: '',
    iconURL: '',
  },
  isSubmitted: false,
  submitted: {
    symbol: '',
    name: '',
    description: '',
    iconURL: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const addCryptoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_FORM_DATA:
        draft.isSubmitted = false;
        draft.formData = action.formData;
        break;
      case SUBMIT_FORM_DATA:
        draft.isSubmitted = true;
        draft.submitted = action.formData;
        draft.formData = initialState.formData;
        break;
    }
  });

export default addCryptoReducer;
