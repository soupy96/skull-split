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
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  li {
  }

  a {
    color: #ffffff;
    text-decoration: none;
    background-color: #181818;
    border-radius: 10px;
    padding: 5px 10px;
    position: relative;
  }

  a:hover {
    background-color: #3a3a3a;
    text-decoration: underline;
  }
`;

export default FooterMenu;
