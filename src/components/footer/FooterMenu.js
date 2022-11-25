import styled from 'styled-components';
import { Link } from 'react-router-dom';

function FooterMenu() {
  return (
    <FooterNav>
      <li>
        <Link to='/privacynotice'>Privacy Notice</Link>
      </li>
      <li>
        <Link to='/termsofservice'>Terms of Service</Link>
      </li>
      <li>
        <Link to='/cookiePreferences'>Cookie Preferences</Link>
      </li>
    </FooterNav>
  );
}

const FooterNav = styled.div`
  list-style-type: none;

  li {
    display: inline;
  }
`;

export default FooterMenu;
