/**
 * Gets the repositories of the user from Github
 */

import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SUBMIT_FORM_DATA } from './constants';
import { cryptosLoaded, cryptossLoadingError } from '../HomePage/actions';

import { makeFormDataSelector } from './selectors';

const requestURL = `http://localhost:3000/api/`;

async function submitToServer(data) {
  try {
    await axios.post(requestURL, data);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Github repos request/response handler
 */
export function* createNewCrypto() {
  // Select username from store
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
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SUBMIT_FORM_DATA, createNewCrypto);
}
