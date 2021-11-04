/**
 *
 * AddCrypto
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
import Input from './Input';
import makeSelectAddCrypto, {
  makeFormDataSelector,
  makeIsSubmittedSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFormData, submitFormData } from './actions';
import SubmitBtn from '../../components/SubmitBtn';

export function AddCrypto({
  formData,
  onChangeFormData,
  onSubmitForm,
  isSubmitted,
}) {
  useInjectReducer({ key: 'addCrypto', reducer });
  useInjectSaga({ key: 'addCrypto', saga });

  return (
    <div>
      <Form onSubmit={evt => onSubmitForm(evt)}>
        <label htmlFor="symbol">
          Symbol:
          <Input
            type="text"
            name="symbol"
            value={formData.symbol}
            onChange={evt => onChangeFormData(evt, formData)}
          />
        </label>
        <label htmlFor="name">
          Name:
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={evt => onChangeFormData(evt, formData)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={evt => onChangeFormData(evt, formData)}
          />
        </label>
        <label htmlFor="icon">
          Icon Link:
          <Input
            type="text"
            name="iconURL"
            value={formData.iconURL}
            onChange={evt => onChangeFormData(evt, formData)}
          />
        </label>
        <SubmitBtn />
      </Form>
      {isSubmitted ? <p>A new cryptocurrency is added</p> : null}
    </div>
  );
}

AddCrypto.propTypes = {
  onChangeFormData: PropTypes.func,
  onSubmitForm: PropTypes.func,
  formData: PropTypes.object,
  isSubmitted: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  addCrypto: makeSelectAddCrypto(),
  formData: makeFormDataSelector(),
  isSubmitted: makeIsSubmittedSelector(),
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
