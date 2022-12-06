import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    // TODO: make interactive menu later when the website is done, make menu 'popout' on menu click, make smooth css animation on menu button click
    <Nav>
      <MenuCircle></MenuCircle>
      <NavUl>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </NavUl>
    </Nav>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 300px;

  a {
    font-size: 35px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const MenuCircle = styled.div`
  background-color: #3a3a3a;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  position: relative;
  animation: ${rotate} 0.5s linear infinite;
  display: none;

  &:before {
    content: '';
    position: absolute;
    transform: rotate(30deg);
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    left: 20px;
    top: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    transform: rotate(-30deg);
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    left: 20px;
    top: 37px;
  }
`;

export default NavMenu;
