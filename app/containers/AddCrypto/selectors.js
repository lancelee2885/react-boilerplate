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

const makeIsSubmittedSelector = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate.isSubmitted,
  );

const makeSubmittedSelector = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate.submitted,
  );

const makeLoadingSelector = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate.loading,
  );

const makeErrorSelector = () =>
  createSelector(
    selectAddCryptoDomain,
    substate => substate.err,
  );

export default makeSelectAddCrypto;
export {
  selectAddCryptoDomain,
  makeFormDataSelector,
  makeIsSubmittedSelector,
  makeSubmittedSelector,
  makeLoadingSelector,
  makeErrorSelector,
};
