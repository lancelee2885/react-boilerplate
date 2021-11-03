import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

/** Navbar:
 *  Navigation bar appears and stays on top of the page throughout scrolling.
 */
function Navbar() {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LOGO</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/cryptos" exact="true">
                Cryptos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/addcryptos" exact="true">
                Add Crypto
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
