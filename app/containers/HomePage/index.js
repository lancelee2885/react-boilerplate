/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeCryptosSelector, makeLoadingSelector } from './selector';

import { loadCryptos } from './actions';

import reducer from './reducer';
import saga from './saga';

export function HomePage({ cryptos, loading, loadCryptosProp }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(function fetchDataOnMount() {
    function fetchData() {
      loadCryptosProp();
    }
    fetchData();
  }, []);

  return (
    <div>
      {cryptos.map(c => (
        <div key={c.symbol}>
          <p>{c.symbol}</p>
          <p>{c.name}</p>
          <p>{c.description}</p>
          <p>{c.iconURL}</p>
        </div>
      ))}
    </div>
  );
}

HomePage.propTypes = {
  cryptos: PropTypes.array,
  loading: PropTypes.bool,
  loadCryptosProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cryptos: makeCryptosSelector(),
  loading: makeLoadingSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadCryptosProp: () => dispatch(loadCryptos()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
