import styled from 'styled-components';
import { Link } from 'react-router-dom';

function FooterMenu() {
  return (
    // TODO: figure out why the page doesnt go to the top when i click a link
    <FooterNav>
      <Link to='/privacy-notice'>Privacy Notice</Link>
      <Link to='/terms-of-service'>Terms of Service</Link>
      <Link to='/cookie-preferences'>Cookie Preferences</Link>
    </FooterNav>
  );
}

const FooterNav = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  a {
    margin: 0px 10px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    background-color: #181818;
    border-radius: 10px;
    padding: 5px 10px;
    position: relative;
    text-align: center;
  }

  a:hover {
    background-color: #3a3a3a;
    text-decoration: underline;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;

    a {
      margin: 20px 0px;
    }
  }
`;

export default FooterMenu;
