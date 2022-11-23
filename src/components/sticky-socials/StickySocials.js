import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function StickySocials() {
  return (
    // TODO: use react-router-dom for menu links
    // TODO: make socials sticky and scroll while the user scrolls but stop at the navbar and footer
    <SocialsColumn>
      <SocialBG href='#'>
        <FontAwesomeIcon icon={faFacebook} />
      </SocialBG>
      <SocialBG href='#'>
        <FontAwesomeIcon icon={faTwitter} />
      </SocialBG>
      <SocialBG href='#'>
        <FontAwesomeIcon icon={faInstagram} />
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
