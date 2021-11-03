import {
  selectHomePageDomain,
  makeCryptosSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the home page state', () => {
    const homeState = {};
    const mockedState = {
      homePage: homeState,
    };
    expect(selectHomePageDomain(mockedState)).toEqual(homeState);
  });
});

describe('makeCryptosSelector', () => {
  const cryptosSelector = makeCryptosSelector();
  it('should select the cryptos', () => {
    const mockCryptos = ['test'];
    const mockedState = {
      homePage: {
        cryptos: mockCryptos,
      },
    };
    expect(cryptosSelector(mockedState)).toEqual(mockCryptos);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeLoadingSelector();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      homePage: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeErrorSelector();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      homePage: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
