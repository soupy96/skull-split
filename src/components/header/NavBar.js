import styled from 'styled-components';
import NavMenu from './NavMenu';

import skullImg from './../../imgs/skull.png';
import { LogoImg } from './Logo';

function NavBar() {
  return (
    // TODO: make svg path bg of play button/link
    // TODO: use react-router-dom for play now link if using a link
    <NavBarBox>
      <div>
        <LogoImg src={skullImg} />
        {/* <img src={skullImg} /> */}
      </div>
      <NavMenu />
      <svg height='210' width='400'>
        <path
          d='M10 0 L225 0 L250 30 L250 100 L50 100 L10 70 Z'
          fill='#f0ff00'
        />
      </svg>
      <PlayNow href='#'>Play Now</PlayNow>
    </NavBarBox>
  );
}

const NavBarBox = styled.div`
  background-color: #181818;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PlayNow = styled.a``;

export default NavBar;
