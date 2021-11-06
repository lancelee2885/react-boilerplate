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
export async function submitToServer(data) {
  try {
    await axios.post(requestURL, data);
  } catch (err) {
    throw err;
  }
}

/**
 * calls api to sumbit form data.
 * on success, it will triger submitted action.
 * on failiure, it will triger error handler.
 */
export function* createNewCrypto() {
  // Select formData from store
  const data = yield select(makeFormDataSelector());

  try {
    yield call(submitToServer, data);
    yield put(formDataSubmitted(data));
  } catch (err) {
    yield put(formDataError(err.response.data.error.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadNewData() {
  yield takeLatest(SUBMIT_FORM_DATA, createNewCrypto);
}
