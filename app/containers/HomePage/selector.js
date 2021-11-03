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

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

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

export default makeSelectHomePage;
export { makeSelectHomePage, makeCryptosSelector, makeLoadingSelector };
