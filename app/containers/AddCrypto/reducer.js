/*
 *
 * AddCrypto reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_FORM_DATA,
  SUBMIT_FORM_DATA,
  SUBMIT_FORM_DATA_SUCCESS,
  SUBMIT_FORM_DATA_ERROR,
} from './constants';

export const initialState = {
  formData: {
    symbol: '',
    name: '',
    description: '',
    iconURL: '',
  },
  submitted: {
    symbol: '',
    name: '',
    description: '',
    iconURL: '',
  },
  isSubmitted: false,
  loading: false,
  err: false,
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
        draft.loading = true;
        draft.err = false;
        break;
      case SUBMIT_FORM_DATA_SUCCESS:
        draft.loading = false;
        draft.err = false;
        draft.isSubmitted = true;
        draft.submitted = action.formData;
        draft.formData = initialState.formData;
        break;
      case SUBMIT_FORM_DATA_ERROR:
        draft.loading = false;
        draft.isSubmitted = false;
        draft.err = action.err;
        break;
    }
  });

export default addCryptoReducer;
