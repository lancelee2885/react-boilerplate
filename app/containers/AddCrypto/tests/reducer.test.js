import produce from 'immer';
import addCryptoReducer from '../reducer';
import {
  changeFormData,
  submitFormData,
  formDataSubmitted,
  formDataError,
} from '../actions';

const testFormData = {
  symbol: 'testSymbol',
  name: 'testName',
  description: 'testDes',
  iconURL: 'testUrl',
};

const emptyFormData = {
  symbol: '',
  name: '',
  description: '',
  iconURL: '',
};

/* eslint-disable default-case, no-param-reassign */
describe('addCryptoReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      formData: {
        symbol: '',
        name: '',
        description: '',
        iconURL: '',
      },
      submitted: {
        symbol: '',
        name: '',
        description: '',
        iconURL: '',
      },
      isSubmitted: false,
      loading: false,
      err: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(addCryptoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeFormData action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isSubmitted = false;
      draft.formData = testFormData;
    });

    expect(addCryptoReducer(state, changeFormData(testFormData))).toEqual(
      expectedResult,
    );
  });

  it('should handle the submitFormData action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.err = false;
    });

    expect(addCryptoReducer(state, submitFormData())).toEqual(expectedResult);
  });

  it('should handle the formDataSubmitted action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.err = false;
      draft.isSubmitted = true;
      draft.submitted = testFormData;
      draft.formData = emptyFormData;
    });

    expect(addCryptoReducer(state, formDataSubmitted(testFormData))).toEqual(
      expectedResult,
    );
  });

  it('should handle the formDataError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.isSubmitted = false;
      draft.err = fixture;
    });

    expect(addCryptoReducer(state, formDataError(fixture))).toEqual(
      expectedResult,
    );
  });
});
