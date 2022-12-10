import styled from 'styled-components';

import Careers from '../../../assets/imgs/careers.webp';

// About Page
export const TwoBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 100px;
`;

export const ImgBox = styled.img`
  width: 100%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBox = styled.div`
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #f0ff00;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
  height: 400px;
  position: relative;

  img {
    padding: 0px 10px;
  }

  ::before {
    content: '';
    background-color: #000000;
    position: absolute;
    height: 15px;
    width: 99%;
    bottom: 0px;
    left: 0px;
    transform: skewX(0deg);
    z-index: -1;
    transition: all 0.25s ease-in-out;
  }

  &::after {
    content: '';
    background-color: #000000;
    position: absolute;
    height: 100%;
    width: 15px;
    top: 0px;
    right: 0px;
    transform: skewY(0deg);
    z-index: -1;
    transition: all 0.25s ease-in-out;
  }

  &:hover::before {
    content: '';
    background-color: #000000;
    position: absolute;
    bottom: -15px;
    left: 8px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }

  &:hover&::after {
    content: '';
    background-color: #000000;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
  }
`;

export const TwoBoxRowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BGImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${Careers});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BGImageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);
  margin: 30px !important;
  background-color: rgba(255, 255, 255, 0.5);
`;

// Contact Page
export const ContactInfoBox = styled.div`
  width: 50%;
  height: 500px;
  background-color: red;
`;

export const ContactFormBox = styled.div`
  width: 50%;
  height: 500px;
  background-color: blue;
`;
