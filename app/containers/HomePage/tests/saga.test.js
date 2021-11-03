/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_CRYPTO } from '../constants';
import { cryptosLoaded, cryptossLoadingError } from '../actions';

import loadCryptos, { fetchCryptos } from '../saga';

const mockCryptos = ['test'];

/* eslint-disable redux-saga/yield-effects */
describe('fetchCryptos Saga', () => {
  let getCryptosGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getCryptosGenerator = fetchCryptos();

    const callDescriptor = getCryptosGenerator.next(mockCryptos).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the cryptosLoaded action if it requests the data successfully', () => {
    const response = { cryptocurrency: mockCryptos };
    const putDescriptor = getCryptosGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(cryptosLoaded(mockCryptos)));
  });

  it('should call the cryptossLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getCryptosGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(cryptossLoadingError(response)));
  });
});

describe('loadCryptos Saga', () => {
  const githubDataSaga = loadCryptos();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_CRYPTO, fetchCryptos));
  });
});
