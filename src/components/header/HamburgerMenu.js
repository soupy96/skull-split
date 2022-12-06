import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { useState } from 'react';

function HamburgerMenu() {
  // TODO: fix issue where menu closes on first menu item click
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HamburgerMenuBox>
      <Menu right noOverlay isOpen={isMenuOpen}>
        <Link to='/' onClick={menuOpenHandler}>
          HOME
        </Link>
        <Link to='/about' onClick={menuOpenHandler}>
          ABOUT
        </Link>
        <Link to='/contact' onClick={menuOpenHandler}>
          CONTACT
        </Link>
        <a href='#' onClick={menuOpenHandler}>
          PLAY NOW
        </a>
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
