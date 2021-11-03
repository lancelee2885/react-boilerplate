import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const Nav = styled.nav`
  background: black;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in;
  }
`;

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const NavItem = styled.li`
  height: auto;
`;

/**
 * @category Styled Components
 * @subcategory NavbarElements
 * @component
 */
export const NavLinks = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
