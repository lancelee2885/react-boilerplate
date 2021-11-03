import React from 'react';
import { render } from 'react-testing-library';

import { ItemsWrapper, ItemsContanier } from '../Wrapper';

describe('<ItemsContanier />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ItemsContanier />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsContanier />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsContanier attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<ItemsWrapper />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ItemsWrapper />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsWrapper />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsWrapper attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
