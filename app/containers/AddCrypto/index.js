/**
 *
 * AddCrypto
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddCrypto from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddCrypto() {
  useInjectReducer({ key: 'addCrypto', reducer });
  useInjectSaga({ key: 'addCrypto', saga });

  return (
    <div>
      <Helmet>
        <title>AddCrypto</title>
        <meta name="description" content="Description of AddCrypto" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddCrypto.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addCrypto: makeSelectAddCrypto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCrypto);
