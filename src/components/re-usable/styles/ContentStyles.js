import styled from 'styled-components';

import Careers from '../../../assets/imgs/careers.jpg';

// About Page
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

export const ImgBox = styled.img`
  width: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 1px solid red;
`;

export const TwoBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  justify-content: center;
  align-self: center;
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
