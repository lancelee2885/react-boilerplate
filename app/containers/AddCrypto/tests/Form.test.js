import React from 'react';
import { render } from 'react-testing-library';

import From from '../Form';

describe('<From />', () => {
  it('should render an <form> tag', () => {
    const { container } = render(<From />);
    expect(container.firstChild.tagName).toEqual('FORM');
  });

  it('should have a class attribute', () => {
    const { container } = render(<From />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<From attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
