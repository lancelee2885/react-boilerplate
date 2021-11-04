import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addCrypto state domain
 */

const selectAddCryptoDomain = state => state.addCrypto || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddCrypto
 */

const makeSelectAddCrypto = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate,
  );

const makeFormDataSelector = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate.formData,
  );

export default makeSelectAddCrypto;
export { selectAddCryptoDomain, makeFormDataSelector };
