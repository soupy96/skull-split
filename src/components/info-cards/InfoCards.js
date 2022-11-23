import styled from 'styled-components';

function InfoCards() {
  return (
    // TODO: refine the overlay
    // TODO: Make the size of the cards closer to the design, more rectangle than square
    <Root>
      <LeftDropShadow>
        <StyledPara>Lorem Ipsum</StyledPara>
        <p>Lorem Ipsum</p>
        <GreenText>Lorem Ipsum</GreenText>
      </LeftDropShadow>
      <MiddleDropShadow>
        <p>Lorem Ipsum</p>
        <GreenText>Lorem Ipsum</GreenText>
        <p>Lorem Ipsum</p>
      </MiddleDropShadow>
      <RightDropShadow>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <GreenText>Lorem Ipsum</GreenText>
      </RightDropShadow>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0px;
  margin-top: -125px;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

const LeftDropShadow = styled(Card)`
  -webkit-box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
`;

const MiddleDropShadow = styled(Card)`
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.4);
`;

const RightDropShadow = styled(Card)`
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
`;

const GreenText = styled.p`
  color: #88c228;
`;

export default InfoCards;
