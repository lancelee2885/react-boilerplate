/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { AddCrypto, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { submitFormData, changeFormData } from '../actions';

describe('<AddCrypto />', () => {
  const submittedData = {
    symbol: 'testSymbol',
    name: 'testNamewithsomeextrastringssoitsuniqle',
    description: 'testDescription',
    iconURL: 'testURL',
  };
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
          <AddCrypto
            formData={submittedData}
            onChangeFormData={() => null}
            onSubmitForm={() => null}
            isSubmitted
            submitted={submittedData}
            loading
            err={[]}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should contain loading spinner if loading', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddCrypto
            formData={{}}
            onChangeFormData={() => null}
            onSubmitForm={() => null}
            isSubmitted={false}
            submitted={submittedData}
            loading
            err={false}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild.innerHTML).toContain('Loading');
    expect(firstChild.innerHTML).not.toContain('ErrorMessage');
    expect(firstChild.innerHTML).not.toContain(
      'testNamewithsomeextrastringssoitsuniqle',
    );
  });

  it('should contain error message if there are error(s)', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddCrypto
            formData={{}}
            onChangeFormData={() => null}
            onSubmitForm={() => null}
            isSubmitted={false}
            submitted={submittedData}
            loading={false}
            err={['error']}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild.innerHTML).toContain('ErrorMessage');
    expect(firstChild.innerHTML).not.toContain('Loading');
    expect(firstChild.innerHTML).not.toContain(
      'testNamewithsomeextrastringssoitsuniqle',
    );
  });

  it('should contain submitted crypto name if isSubmitted is true', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddCrypto
            formData={{}}
            onChangeFormData={() => null}
            onSubmitForm={() => null}
            isSubmitted
            submitted={submittedData}
            loading={false}
            err={false}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild.innerHTML).not.toContain('Error Message');
    expect(firstChild.innerHTML).not.toContain('Loading');
    expect(firstChild.innerHTML).toContain(
      'testNamewithsomeextrastringssoitsuniqle',
    );
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeFormData', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeFormData).toBeDefined();
      });

      it('should dispatch changeFormData when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const mockEvt = {
          target: {
            name: 'test',
            value: 'test',
          },
        };
        result.onChangeFormData(mockEvt);
        expect(dispatch).toHaveBeenCalledWith(changeFormData({ test: 'test' }));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch submitFormData when called', () => {
        const preventDefault = jest.fn();
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(dispatch).toHaveBeenCalledWith(submitFormData());
      });
    });
  });
});
