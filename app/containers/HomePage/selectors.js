import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeCryptosSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.cryptos,
  );

const makeLoadingSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.loading,
  );

const makeErrorSelector = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.error,
  );

export default selectHomePageDomain;
export {
  selectHomePageDomain,
  makeCryptosSelector,
  makeLoadingSelector,
  makeErrorSelector,
};
