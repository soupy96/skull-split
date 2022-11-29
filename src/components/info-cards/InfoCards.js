import styled from 'styled-components';
import NestedRoot from '../re-usable/NestedRoot';

function InfoCards() {
  return (
    // TODO: refine the overlay
    // TODO: Make the size of the cards closer to the design, more rectangle than square
    <NestedRoot>
      <Root>
        <LeftDropShadow>
          <SmallText>Lorem ipsum dolor sit amet</SmallText>
          <MiddleText>Ut sit amet pretuim ex</MiddleText>
          <LargeText>
            <GreenText>$100,000,000!</GreenText>
          </LargeText>
        </LeftDropShadow>
        <MiddleDropShadow>
          <LargeText>Lorem ipsum</LargeText>
          <MiddleText>
            <GreenText>Rutrum odio</GreenText>
          </MiddleText>
          <SmallText>Sit amet purus</SmallText>
        </MiddleDropShadow>
        <RightDropShadow>
          <LargeText>Vestibulum</LargeText>
          <MiddleText>Dolor accumsan laoreet</MiddleText>
          <SmallText>
            <GreenText>
              Vestibulum ultrices magna a pellentesque maximus egestat at nibh
            </GreenText>
          </SmallText>
        </RightDropShadow>
      </Root>
    </NestedRoot>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0px;
  margin-top: -125px;
  text-align: center;
`;

const Card = styled.div`
  width: 450px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  text-transform: uppercase;
`;

const LeftDropShadow = styled(Card)`
  -webkit-box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const MiddleDropShadow = styled(Card)`
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const RightDropShadow = styled(Card)`
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const SmallText = styled.p`
  font-size: 25px;
  line-height: 35px;
  text-align: center;

  p {
    width: 50%;
    margin: auto;
    font-size: 25px;
    text-align: center;
  }
`;
const MiddleText = styled.p`
  font-size: 40px;
  line-height: 40px;
  text-align: center;

  p {
    font-size: 50px;
    text-align: center;
  }
`;
const LargeText = styled.p`
  line-height: 75px;
  font-size: 75px;
  text-align: center;

  p {
    font-size: 75px;
    line-height: 75px;
    text-align: center;
  }
`;

const GreenText = styled.p`
  color: #88c228;
`;

export default InfoCards;
