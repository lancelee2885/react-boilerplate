import React from 'react';
import { render } from 'react-testing-library';

import { Input, TextArea } from '../Input';

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const { container } = render(<Input />);
    expect(container.firstChild.tagName).toEqual('INPUT');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Input />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Input attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<TextArea />', () => {
  it('should render an <textarea> tag', () => {
    const { container } = render(<TextArea />);
    expect(container.firstChild.tagName).toEqual('TEXTAREA');
  });

  it('should have a class attribute', () => {
    const { container } = render(<TextArea />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<TextArea attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
