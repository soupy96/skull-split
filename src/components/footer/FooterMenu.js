import styled from 'styled-components';
import { Link } from 'react-router-dom';

function FooterMenu() {
  return (
    <FooterNav>
      <li>
        <Link to='/privacy-notice'>Privacy Notice</Link>
      </li>
      <li>
        <Link to='/terms-of-service'>Terms of Service</Link>
      </li>
      <li>
        <Link to='/cookie-preferences'>Cookie Preferences</Link>
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
