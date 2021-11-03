import React from 'react';
import { render } from 'react-testing-library';

import Spinner from '../LoadingElements';

describe('<ItemsContanier />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Spinner attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
