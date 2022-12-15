import { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';

import NestedRoot from '../../../re-usable/NestedRoot';
import 'aos/dist/aos.css';

function GameInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <MainInfo>
      <NestedRoot>
        <InnerRoot data-aos='fade-up'>
          <Title>Lorem Ipsum 2077/08/14</Title>
          <InfoText>
            <MediumText>Ut at eleifend mi.</MediumText>
            <YellowText>Lorem ipsum dolor sit amet, consectetur</YellowText>
            <p>
              Hasellus vestibulum pellentesque lacinia. Ut eget faucibus nisi,
              nec mattis arcu. Etiam tincidunt leo leo, ut pretium massa mattis
              id. Donec dictum sem vel condimentum accumsan.
            </p>
            <p>
              Nulla sagittis lacinia odio, sed vestibulum ex laoreet ac. In
              tristique, sem ut tempus mattis
            </p>
          </InfoText>
        </InnerRoot>
      </NestedRoot>
    </MainInfo>
  );
}

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: rgb(58, 66, 57);
  background: -moz-radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a4239",endColorstr="#222721",GradientType=1);
  background-position: 0px -150px;
  padding: 200px 0px;

  text {
    font-size: 55px;
    line-height: normal;
  }
`;

const InnerRoot = styled.div`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 1200px) {
    width: 75%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 60px;
  color: #f0ff00;
  line-height: 50px;
`;

const InfoText = styled.div`
  > * {
    margin: 30px 0px;
  }
`;

const MediumText = styled.p`
  font-size: 60px;
  line-height: 50px;
`;

const YellowText = styled.p`
  color: #f0ff00;
  font-size: 35px;
`;

export default GameInfo;
