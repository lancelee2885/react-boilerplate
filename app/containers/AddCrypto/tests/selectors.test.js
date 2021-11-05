import {
  selectAddCryptoDomain,
  makeFormDataSelector,
  makeLoadingSelector,
  makeErrorSelector,
  makeSubmittedSelector,
  makeIsSubmittedSelector,
} from '../selectors';

const mockFormData = {
  symbol: 'testSymbol',
  name: 'testName',
  description: 'testDes',
  iconURL: 'testUrl',
};

describe('selectAddCryptoDomain', () => {
  it('should select the adding page state', () => {
    const addCrypto = {};
    const mockedState = {
      addCrypto,
    };
    expect(selectAddCryptoDomain(mockedState)).toEqual(addCrypto);
  });
});

describe('makeFormDataSelector', () => {
  const formDataSelector = makeFormDataSelector();
  it('should select the formData', () => {
    const mockedState = {
      addCrypto: {
        formData: mockFormData,
      },
    };
    expect(formDataSelector(mockedState)).toEqual(mockFormData);
  });
});

describe('makeLoadingSelector', () => {
  const loadingSelector = makeLoadingSelector();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      addCrypto: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeErrorSelector', () => {
  const errorSelector = makeErrorSelector();
  it('should select the error', () => {
    const err = 404;
    const mockedState = {
      addCrypto: {
        err,
      },
    };
    expect(errorSelector(mockedState)).toEqual(err);
  });
});

describe('makeSubmittedSelector', () => {
  const submittedSelector = makeSubmittedSelector();
  it('should select the submitted data', () => {
    const mockedState = {
      addCrypto: {
        submitted: mockFormData,
      },
    };
    expect(submittedSelector(mockedState)).toEqual(mockFormData);
  });
});

describe('makeIsSubmittedSelector', () => {
  const isSubmittedSelector = makeIsSubmittedSelector();
  it('should select the isSubmitted Boolean', () => {
    const mockedState = {
      addCrypto: {
        isSubmitted: false,
      },
    };
    expect(isSubmittedSelector(mockedState)).toEqual(false);
  });
});
