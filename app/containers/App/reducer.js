/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_ITEMS, LOAD_ITEMS_ERROR, LOAD_ITEMS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  items: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ITEMS:
        draft.loading = true;
        draft.error = false;
        draft.items = [];
        break;

      case LOAD_ITEMS_ERROR:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.items = action.items;
        break;

      case LOAD_ITEMS_SUCCESS:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
