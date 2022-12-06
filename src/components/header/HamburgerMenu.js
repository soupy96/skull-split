import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

function HamburgerMenu() {
  return (
    <HamburgerMenuBox>
      <Menu right noOverlay>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>
        <a href='#'>PLAY NOW</a>
      </Menu>
    </HamburgerMenuBox>
  );
}

const HamburgerMenuBox = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

export default HamburgerMenu;
