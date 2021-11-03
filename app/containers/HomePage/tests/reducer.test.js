import produce from 'immer';

import homePageReducer from '../reducer';
import { loadCryptos, cryptosLoaded, cryptossLoadingError } from '../actions';

const testCrypto = [
  {
    symbol: 'testSymbol',
    name: 'testName',
    description: 'testDes',
    iconURL: 'testUrl',
  },
];

/* eslint-disable default-case, no-param-reassign */
describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      cryptos: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadCryptos action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.cryptos = [];
    });

    expect(homePageReducer(state, loadCryptos())).toEqual(expectedResult);
  });

  it('should handle the cryptosLoaded action correctly', () => {
    const fixture = testCrypto;
    const expectedResult = produce(state, draft => {
      draft.cryptos = fixture;
      draft.loading = false;
    });

    expect(homePageReducer(state, cryptosLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the cryptossLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(homePageReducer(state, cryptossLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
