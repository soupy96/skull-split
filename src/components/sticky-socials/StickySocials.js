import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function StickySocials() {
  return (
    // TODO: make socials sticky and scroll while the user scrolls but stop at the navbar and footer
    <SocialsColumn>
      <SocialBG href='#'>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </SocialBG>
      <SocialBG href='#'>
        <a href='https://www.twitter.com/' rel='noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialBG>
      <SocialBG href='#'>
        <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </SocialBG>
    </SocialsColumn>
  );
}

const SocialsColumn = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  position: absolute;
  left: 50px;
`;

const SocialBG = styled.a`
  background-color: #3a3a3a;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  padding: 5px;
`;

export default StickySocials;
