import styled from 'styled-components';

import Logo from '../re-usable/Logo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    // TODO: make svg path bg of play button/link
    // TODO: try and center text in the play link better. its almost there!
    <NavBarBox>
      <Logo />
      <NavMenu />
      <svg height='75' width='200'>
        <PlayNow href='#'>
          <path
            d='M10 0 L170 0 L200 30 L200 75 L40 75 L10 45 Z'
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
  /* justify-content: space-between; */
  padding: 30px 0px;
  height: 100px;
`;

const LogoNav = styled(Logo)``;

const PlayNow = styled.a``;

export default NavBar;
