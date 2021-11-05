import React from 'react';
import { render } from 'react-testing-library';

import FormWrapper from '../Wrapper';

describe('<FormWrapper />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<FormWrapper />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<FormWrapper />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<FormWrapper attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
