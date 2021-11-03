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

import Item from '../../components/Item';
import { ItemsContanier, ItemsWrapper } from './Wrapper';
import LoadingSpinner from '../../components/LoadingSpinner';

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
    <ItemsContanier>
      <ItemsWrapper>
        {loading ? <LoadingSpinner /> : null}
        {cryptos.map(c => (
          <Item name={c.name} description={c.description} imgURL={c.iconURL} />
        ))}
      </ItemsWrapper>
    </ItemsContanier>
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
