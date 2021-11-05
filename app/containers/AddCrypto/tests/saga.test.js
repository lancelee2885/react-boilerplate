/**
 * Tests for AddCrypto sagas
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { SUBMIT_FORM_DATA } from '../constants';
import { formDataSubmitted, formDataError } from '../actions';

import loadNewData, { createNewCrypto, submitToServer } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('createNewCrypto Saga', () => {
  let createCryptosGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    createCryptosGenerator = createNewCrypto();

    const callDescriptor = createCryptosGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the submitToServer action if it sends the data successfully', () => {
    const callDescriptor = createCryptosGenerator.next('test');
    expect(callDescriptor.value).toEqual(call(submitToServer, 'test'));
  });

  it('should dispatch the formDataSubmitted action if it sends the data successfully', () => {
    createCryptosGenerator.next('test');
    const putDescriptor = createCryptosGenerator.next('test');
    expect(putDescriptor.value).toEqual(put(formDataSubmitted('test')));
  });

  it('should call the formDataError action if the response errors', () => {
    const response = new Error('Some error');
    createCryptosGenerator.next();
    const putDescriptor = createCryptosGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(formDataError(response)));
  });
});

describe('loadNewData Saga', () => {
  const newDataSaga = loadNewData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = newDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(SUBMIT_FORM_DATA, createNewCrypto),
    );
  });
});
