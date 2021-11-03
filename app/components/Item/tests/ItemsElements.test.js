import React from 'react';
import { render } from 'react-testing-library';

import {
  ItemsCard,
  ItemsH1,
  ItemsH2,
  ItemsIcon,
  ItemsP,
} from '../ItemsElements';

describe('<ItemsCard />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ItemsCard />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsCard />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsCard attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<ItemsIcon />', () => {
  it('should render an <img> tag', () => {
    const { container } = render(<ItemsIcon />);
    expect(container.firstChild.tagName).toEqual('IMG');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsIcon />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsIcon attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<ItemsH1 />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ItemsH1 />);
    expect(container.firstChild.tagName).toEqual('H1');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsH1 />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsH1 attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<ItemsH2 />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ItemsH2 />);
    expect(container.firstChild.tagName).toEqual('H2');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsH2 />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsH2 attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<ItemsP />', () => {
  it('should render an <p> tag', () => {
    const { container } = render(<ItemsP />);
    expect(container.firstChild.tagName).toEqual('P');
  });

  it('should have a class attribute', () => {
    const { container } = render(<ItemsP />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ItemsP attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
