import styled from 'styled-components';

function GameInfo() {
  return (
    // TODO: once i have the svg path done for the play now button/link in the header, use here as well
    <MainInfo>
      <BlackText>Lorem Ipsum 23/11/2022</BlackText>
      <div>
        <p>Lorem Ipsum</p>
        <YellowText>Lorem Ipsum</YellowText>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </MainInfo>
  );
}

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const BlackText = styled.h2`
  color: #000000;
`;

const YellowText = styled.p`
  color: #f0ff00;
`;

export default GameInfo;
