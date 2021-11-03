/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_CRYPTO,
  LOAD_CRYPTO_ERROR,
  LOAD_CRYPTO_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  cryptos: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CRYPTO:
        draft.loading = true;
        draft.error = false;
        draft.cryptos = [];
        break;

      case LOAD_CRYPTO_SUCCESS:
        draft.loading = false;
        draft.cryptos = action.cryptos;
        break;

      case LOAD_CRYPTO_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      default:
        return draft;
    }
  });

export default homePageReducer;
