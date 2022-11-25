import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    // TODO: make menu 'popout' on menu click
    // TODO: make smooth css animation on menu button click
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
