/**
 * Submit form data to backedn server.
 */

import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SUBMIT_FORM_DATA } from './constants';
import { cryptosLoaded, cryptossLoadingError } from '../HomePage/actions';

import { makeFormDataSelector } from './selectors';

const requestURL = `http://localhost:3000/api/`;

// formdata submission
async function submitToServer(data) {
  try {
    await axios.post(requestURL, data);
  } catch (err) {
    console.log(err);
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
    const res = yield call(request, requestURL);
    yield put(cryptosLoaded(res.cryptocurrency));
  } catch (err) {
    yield put(cryptossLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadNewData() {
  yield takeLatest(SUBMIT_FORM_DATA, createNewCrypto);
}
