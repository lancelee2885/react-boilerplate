/**
 *
 * AddCrypto: A page dedicating to adding a crypto to backend using a form submission.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Form from './Form';
import { Input, TextArea } from './Input';
import SubmitBtn from '../../components/SubmitBtn';
import FormWrapper from './Wrapper';
import LoadingSpinner from '../../components/LoadingSpinner';
import makeSelectAddCrypto, {
  makeFormDataSelector,
  makeIsSubmittedSelector,
  makeSubmittedSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFormData, submitFormData } from './actions';

export function AddCrypto({
  formData,
  onChangeFormData,
  onSubmitForm,
  isSubmitted,
  submitted,
  loading,
  err,
}) {
  useInjectReducer({ key: 'addCrypto', reducer });
  useInjectSaga({ key: 'addCrypto', saga });

  // determines if loading/errors/success messages
  function showLoading() {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (err) {
      return <p> Something Went Wrong</p>;
    }
    if (isSubmitted) {
      return <p> {submitted.name} is added</p>;
    }
    return null;
  }

  return (
    <FormWrapper>
      <Form onSubmit={evt => onSubmitForm(evt)}>
        <label htmlFor="symbol">Symbol:</label>
        <Input
          type="text"
          name="symbol"
          required
          value={formData.symbol}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="description">Description:</label>
        <TextArea
          type="text"
          name="description"
          required
          value={formData.description}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="icon">Icon Link:</label>
        <Input
          type="url"
          name="iconURL"
          required
          value={formData.iconURL}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <SubmitBtn text="Submit" />
      </Form>
      {showLoading()}
    </FormWrapper>
  );
}

AddCrypto.propTypes = {
  onChangeFormData: PropTypes.func,
  onSubmitForm: PropTypes.func,
  formData: PropTypes.object,
  isSubmitted: PropTypes.bool,
  submitted: PropTypes.object,
  loading: PropTypes.bool,
  err: PropTypes.bool || PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  addCrypto: makeSelectAddCrypto(),
  formData: makeFormDataSelector(),
  isSubmitted: makeIsSubmittedSelector(),
  submitted: makeSubmittedSelector(),
  loading: makeLoadingSelector(),
  err: makeErrorSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFormData: (evt, formData) => {
      const newData = {
        ...formData,
        [evt.target.name]: evt.target.value,
      };
      dispatch(changeFormData(newData));
    },
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(submitFormData());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCrypto);
