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
import Wrapper from './Wrapper';
import ErrorMessage from './ErrorMessage';
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
      return (
        <Wrapper>
          {' '}
          {err.map(e => (
            <ErrorMessage key={e}>{e}</ErrorMessage>
          ))}{' '}
        </Wrapper>
      );
    }
    if (isSubmitted) {
      return <p> {submitted.name} was added</p>;
    }
    return undefined;
  }

  return (
    <Wrapper>
      {showLoading()}
      <Form onSubmit={evt => onSubmitForm(evt)}>
        <label htmlFor="symbol">Symbol:</label>
        <Input
          type="text"
          name="symbol"
          value={formData.symbol}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="description">Description:</label>
        <TextArea
          type="text"
          name="description"
          value={formData.description}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <label htmlFor="icon">Icon Link:</label>
        <Input
          type="text"
          name="iconURL"
          value={formData.iconURL}
          onChange={evt => onChangeFormData(evt, formData)}
        />
        <SubmitBtn text="Submit" />
      </Form>
    </Wrapper>
  );
}

AddCrypto.propTypes = {
  onChangeFormData: PropTypes.func,
  onSubmitForm: PropTypes.func,
  formData: PropTypes.object,
  isSubmitted: PropTypes.bool,
  submitted: PropTypes.object,
  loading: PropTypes.bool,
  err: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
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
