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

export default makeSelectAddCrypto;
export { selectAddCryptoDomain };
