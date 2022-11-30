import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NestedStyle } from './../re-usable/NestedRoot';
import Logo from '../re-usable/Logo';
import FooterSocials from './FooterSocials';
import FooterMenu from './FooterMenu';
import ESRB from './ESRB';

function Footer() {
  return (
    <Root>
      <NestedRootFooter>
        <Link to='/'>
          <HoverLogo />
        </Link>
        <Copyright>
          &copy; 2022 Skull Games Inc, Skull Split, and any associated logos are
          trademarks, service marks, and/or registered trademarks of Skull
          Games, Inc.
        </Copyright>
        <FooterSocials />
        <FooterMenu />
        <ESRB />
      </NestedRootFooter>
    </Root>
  );
}

const Root = styled.div`
  background-color: #181818;
  color: #ffffff;
  width: 100%;
  height: 500px;

  @media only screen and (max-width: 900px) {
    height: 750px;
    padding: 50px 0px;
  }
`;

const NestedRootFooter = styled(NestedStyle)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const HoverLogo = styled(Logo)`
  filter: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 2px #ffffff);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #7e7e7e;
`;

export default Footer;
