import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { cryptosLoaded, cryptossLoadingError } from './actions';
import { LOAD_CRYPTO } from './constants';

function* fetchCryptos() {
  const URL = 'http://localhost:3000/api/';

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, URL);
    yield put(cryptosLoaded(res.cryptocurrency));
  } catch (err) {
    yield put(cryptossLoadingError(err));
  }
}

function* loadCryptos() {
  yield takeLatest(LOAD_CRYPTO, fetchCryptos);
}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadCryptos()]);
}
