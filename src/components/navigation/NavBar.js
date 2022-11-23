import NavMenu from './NavMenu';

import classes from './NavBar.module.css';

import skullImg from './../../imgs/skull.png';

function NavBar() {
  return (
    // TODO: make svg path bg of play button/link
    // TODO: use react-router-dom for play now link if using a link
    <div className={classes.navBar}>
      <div>
        <img src={skullImg} />
      </div>
      <NavMenu />
      <svg height='210' width='400'>
        <path
          d='M10 0 L225 0 L250 30 L250 100 L50 100 L10 70 Z'
          fill='#f0ff00'
        />
      </svg>
      <a href='#' className={classes.playNow}>
        Play Now
      </a>
    </div>
  );
}

export default NavBar;
