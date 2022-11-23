import EdgeIcon from '../icons/EdgeIcon';

import classes from './StickySocials.module.css';

import facebookImg from './../../imgs/facebook.png';
import twitterImg from './../../imgs/twitter.png';
import instaImg from './../../imgs/insta.png';

function StickySocials() {
  return (
    // TODO: use react-router-dom for menu links
    <div className={classes.socialsColumn}>
      <a href='#' className={classes.socialBG}>
        {/* <EdgeIcon fill='#ff0000' /> */}
        <img src={facebookImg} />
      </a>
      <a href='#' className={classes.socialBG}>
        <img src={twitterImg} />
      </a>
      <a href='#' className={classes.socialBG}>
        <img src={instaImg} />
      </a>
    </div>
  );
}

export default StickySocials;
