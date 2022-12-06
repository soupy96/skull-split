import styled from 'styled-components';

import NestedRoot from '../re-usable/NestedRoot';

import bgImage from './../../assets/imgs/hero-image.png';

function HeroSection() {
  return (
    <BigImage>
      <NestedRoot>
        <MiddleText>
          <p>A 5v5 character-based tactical shooter</p>
          <h1>SKULL SPLIT</h1>
          <MainButt>
            <ButtDiv>
              <ButtOverlay></ButtOverlay>
              <p>Play Now</p>
            </ButtDiv>
          </MainButt>
        </MiddleText>
      </NestedRoot>
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
  text-align: center;

  p {
    font-size: 35px;
    line-height: normal;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 9rem;
    line-height: 200px;
    text-align: center;
    margin: 50px auto;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 6rem;
      line-height: 140px;
    }
  }
`;

const buttWidth = 250;
const MainButt = styled.button`
  position: relative;
  width: auto;
  min-width: ${buttWidth}px;
  background: none;
  border: 0;
  font-size: 35px;
  padding: 10px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 25px;
    border: 1px solid #ffffff;
    border-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 25px;
    border: 1px solid #ffffff;
    border-top: 0;
  }

  &:hover span {
    transform: translateX(-10%) skew(-10deg);
  }

  p {
    position: relative;
    z-index: 2;
    color: #000000;
    transition: color 0.75s ease-in-out;
  }

  &:hover p {
    color: #ffffff;
  }
`;

const ButtDiv = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: #f0ff00;
`;

const ButtOverlay = styled.span`
  content: '';
  z-index: 1;
  position: absolute;
  display: block;
  height: 100%;
  width: 120%;
  top: 0;
  background-color: #3b4339;
  cursor: pointer;
  transform: translateX(-110%) skew(-10deg);
  transition: all 0.5s ease-in-out;
`;

export default HeroSection;
