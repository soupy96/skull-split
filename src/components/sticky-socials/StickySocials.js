import EdgeIcon from '../icons/EdgeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import classes from './StickySocials.module.css';

function StickySocials() {
  return (
    // TODO: use react-router-dom for menu links
    <div className={classes.socialsColumn}>
      <a href='#' className={classes.socialBG}>
        {/* <EdgeIcon fill='#ff0000' /> */}
        {/* <img src={facebookImg} /> */}
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='#' className={classes.socialBG}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='#' className={classes.socialBG}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default StickySocials;
