/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CRYPTO,
  LOAD_CRYPTO_ERROR,
  LOAD_CRYPTO_SUCCESS,
} from './constants';

/**
 * Load the crypto from backend, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CRYPTO
 */
export function loadCryptos() {
  return {
    type: LOAD_CRYPTO,
  };
}

/**
 * Dispatched when the cryptocurrencies are loaded by the request saga
 *
 * @param  {array} cryptos The crypto data
 *
 * @return {object}      An action object with a type of LOAD_CRYPTO_SUCCESS passing the cryptos
 */
export function cryptosLoaded(cryptos) {
  return {
    type: LOAD_CRYPTO_SUCCESS,
    cryptos,
  };
}

/**
 * Dispatched when loading the cryptocurrencies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CRYPTO_ERROR passing the error
 */
export function cryptossLoadingError(error) {
  return {
    type: LOAD_CRYPTO_ERROR,
    error,
  };
}
