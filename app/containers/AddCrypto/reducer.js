/*
 *
 * AddCrypto reducer
 *
 */
import produce from 'immer';
import { CHANGE_FORM_DATA } from './constants';

export const initialState = {
  formData: {
    symbol: '',
    name: '',
    description: '',
    icon: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const addCryptoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_FORM_DATA:
        draft.formData = action.formData;
        break;
    }
  });

export default addCryptoReducer;
