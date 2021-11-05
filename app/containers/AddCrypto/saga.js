/**
 * Submit form data to backedn server.
 */

import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SUBMIT_FORM_DATA } from './constants';
import { formDataSubmitted, formDataError } from './actions';

import { makeFormDataSelector } from './selectors';

const requestURL = `http://localhost:3000/api/`;

// formdata submission
async function submitToServer(data) {
  try {
    await axios.post(requestURL, data);
  } catch (err) {
    throw err;
  }
}

/**
 * update states to load new sets of cryptos
 */
export function* createNewCrypto() {
  // Select formData from store
  const data = yield select(makeFormDataSelector());

  try {
    // Call our request helper (see 'utils/request')
    yield call(submitToServer, data);
    yield put(formDataSubmitted(data));
  } catch (err) {
    yield put(formDataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadNewData() {
  yield takeLatest(SUBMIT_FORM_DATA, createNewCrypto);
}
