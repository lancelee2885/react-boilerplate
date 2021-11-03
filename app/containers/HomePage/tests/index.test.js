/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { loadCryptos } from '../actions';

describe('<HomePage />', () => {
  const cryptos = [
    {
      symbol: 'testSymbol',
      name: 'testName',
      description: 'testDescription',
      iconURL: 'testURL',
    },
  ];
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            cryptos={[]}
            loadCryptosProp={() => null}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should try to fetch crypto on first mount', () => {
    const fetchSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            cryptos={cryptos}
            loadCryptosProp={fetchSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(fetchSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('loadCryptosProp', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadCryptosProp).toBeDefined();
      });

      it('should dispatch loadCryptos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadCryptosProp();
        expect(dispatch).toHaveBeenCalledWith(loadCryptos());
      });
    });
  });
});
