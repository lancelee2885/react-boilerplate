import React from 'react';
import { render } from 'react-testing-library';

import { SubmitBtnWrapper } from '../SubmitBtnElements';

describe('<SubmitBtnWrapper />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<SubmitBtnWrapper />);
    expect(container.firstChild.tagName).toEqual('BUTTON');
  });

  it('should have a class attribute', () => {
    const { container } = render(<SubmitBtnWrapper />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<SubmitBtnWrapper attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
