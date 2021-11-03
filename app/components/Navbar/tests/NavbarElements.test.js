import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-testing-library';

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from '../NavbarElements';

describe('<Nav />', () => {
  it('should render an <nav> tag', () => {
    const { container } = render(<Nav />);
    expect(container.firstChild.tagName).toEqual('NAV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Nav />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Nav attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<NavbarContainer />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<NavbarContainer />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<NavbarContainer />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<NavbarContainer attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<NavMenu />', () => {
  it('should render an <ul> tag', () => {
    const { container } = render(<NavMenu />);
    expect(container.firstChild.tagName).toEqual('UL');
  });

  it('should have a class attribute', () => {
    const { container } = render(<NavMenu />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<NavMenu attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<NavItem />', () => {
  it('should render an <li> tag', () => {
    const { container } = render(<NavItem />);
    expect(container.firstChild.tagName).toEqual('LI');
  });

  it('should have a class attribute', () => {
    const { container } = render(<NavItem />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<NavItem attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});

describe('<NavLinks />', () => {
  it('should render an <a> tag', () => {
    const { container } = render(
      <BrowserRouter>
        <NavLinks to="" />
      </BrowserRouter>,
    );
    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should have a class attribute', () => {
    const { container } = render(
      <BrowserRouter>
        <NavLinks to="" />
      </BrowserRouter>,
    );
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const to = 'test';
    const { container } = render(
      <BrowserRouter>
        <NavLinks to={to} />
      </BrowserRouter>,
    );
    expect(container.querySelector('a').href).toEqual('http://localhost/test');
  });
});
