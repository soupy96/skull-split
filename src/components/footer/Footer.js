import styled from 'styled-components';
import FooterMenu from './FooterMenu';
import ESRB from './ESRB';
import { LogoImg } from '../header/Logo';

function Footer() {
  return (
    <div>
      <LogoImg />
      <p></p>
      <FooterMenu />
      <ESRB />
    </div>
  );
}

export default Footer;
