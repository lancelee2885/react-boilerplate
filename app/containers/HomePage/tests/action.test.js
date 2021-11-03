import {
  LOAD_CRYPTO,
  LOAD_CRYPTO_SUCCESS,
  LOAD_CRYPTO_ERROR,
} from '../constants';

import { loadCryptos, cryptosLoaded, cryptossLoadingError } from '../actions';

describe('Home Actions', () => {
  describe('loadCryptos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_CRYPTO,
      };

      expect(loadCryptos()).toEqual(expectedResult);
    });
  });

  describe('cryptosLoaded', () => {
    it('should return the correct type and the passed cryptos', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_CRYPTO_SUCCESS,
        cryptos: fixture,
      };

      expect(cryptosLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('cryptossLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_CRYPTO_ERROR,
        error: fixture,
      };

      expect(cryptossLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
