import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../re-usable/Logo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <NavBarBox>
      <LogoMenu>
        <Link to='/'>
          <Logo />
        </Link>
        <NavMenu />
      </LogoMenu>
      <svg height='75' width='205'>
        <PlayNow href='#'>
          <path
            d='M10 5 L170 5 L200 30 L200 75 L40 75 L10 45 Z'
            fill='#f0ff00'
          />
          <text
            x='100'
            y='37.5'
            fill='#000000'
            dominant-baseline='middle'
            text-anchor='middle'
          >
            Play Now
          </text>
        </PlayNow>
      </svg>
    </NavBarBox>
  );
}

const NavBarBox = styled.div`
  background-color: #181818;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  height: 100px;
`;

const LogoMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 470px;
`;

const PlayNow = styled.a`
  path,
  text {
    transition: transform 0.25s;
    transition-timing-function: ease-in-out;
  }

  &:hover path {
    fill: #cedb00;
    transform: translateY(-5px);
  }

  &:hover text {
    transform: translateY(-5px);
    fill: #000000;
  }
`;

export default NavBar;
