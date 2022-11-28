import styled from 'styled-components';

import bgImage from './../../assets/imgs/hero-image.png';

function HeroSection() {
  return (
    // TODO: reference valorant website for button design using ::before and ::after sudo selectors
    <BigImage>
      <MiddleText>
        <p>A 5v5 character-based tactical shooter</p>
        <h1>SKULL SPLIT</h1>
        <MainButt>Play Now</MainButt>
      </MiddleText>
    </BigImage>
  );
}

const BigImage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  p {
    font-size: 35px;
    line-height: normal;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 200px;
    line-height: normal;
  }
`;

const MainButt = styled.button`
  &::before {
  }

  &::after {
  }
`;

export default HeroSection;
