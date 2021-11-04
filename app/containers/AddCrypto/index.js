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
import makeSelectAddCrypto, { makeFormDataSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFormData } from './actions';

export function AddCrypto({ formData, onChangeFormData }) {
  useInjectReducer({ key: 'addCrypto', reducer });
  useInjectSaga({ key: 'addCrypto', saga });

  return (
    <div>
      <Form>
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
            name="icon"
            value={formData.icon}
            onChange={evt => onChangeFormData(evt, formData)}
          />
        </label>
      </Form>
    </div>
  );
}

AddCrypto.propTypes = {
  onChangeFormData: PropTypes.func,
  formData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  addCrypto: makeSelectAddCrypto(),
  formData: makeFormDataSelector(),
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCrypto);
