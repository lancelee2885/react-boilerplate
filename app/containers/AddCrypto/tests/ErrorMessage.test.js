import React from 'react';
import { render } from 'react-testing-library';

import ErrorMessage from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should render an <p> tag', () => {
    const { container } = render(<ErrorMessage />);
    expect(container.firstChild.tagName).toEqual('P');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ErrorMessage />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ErrorMessage attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
