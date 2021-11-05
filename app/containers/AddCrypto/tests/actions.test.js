import {
  CHANGE_FORM_DATA,
  SUBMIT_FORM_DATA,
  SUBMIT_FORM_DATA_SUCCESS,
  SUBMIT_FORM_DATA_ERROR,
} from '../constants';

import {
  changeFormData,
  submitFormData,
  formDataSubmitted,
  formDataError,
} from '../actions';

describe('Adding Page Actions', () => {
  describe('changeFormData', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHANGE_FORM_DATA,
      };

      expect(changeFormData()).toEqual(expectedResult);
    });
  });

  describe('submitFormData', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SUBMIT_FORM_DATA,
      };

      expect(submitFormData()).toEqual(expectedResult);
    });
  });

  describe('formDataSubmitted', () => {
    it('should return the correct type and the passed formData', () => {
      const fixture = 'test';
      const expectedResult = {
        type: SUBMIT_FORM_DATA_SUCCESS,
        formData: fixture,
      };

      expect(formDataSubmitted(fixture)).toEqual(expectedResult);
    });
  });

  describe('SUBMIT_FORM_DATA_ERROR', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: SUBMIT_FORM_DATA_ERROR,
        err: fixture,
      };

      expect(formDataError(fixture)).toEqual(expectedResult);
    });
  });
});
