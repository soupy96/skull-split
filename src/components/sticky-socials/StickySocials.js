import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function StickySocials() {
  return (
    <SocialsColumn>
      <SocialBG
        href='https://www.facebook.com/'
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon icon={faFacebook} />
      </SocialBG>
      <SocialBG
        href='https://www.twitter.com/'
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon icon={faTwitter} />
      </SocialBG>
      <SocialBG
        href='https://www.instagram.com/'
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </SocialBG>
    </SocialsColumn>
  );
}

const SocialsColumn = styled.div`
  position: fixed;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  height: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SocialBG = styled.a`
  background-color: #3a3a3a;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 40px;
  }
`;

export default StickySocials;
