import styled from 'styled-components';
import NestedRoot from '../re-usable/NestedRoot';

function InfoCards() {
  return (
    // TODO: make three squares into a slider rather than side by side
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
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 30%;
  /* width: 400px; */
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
  font-size: 1.25vw;
  line-height: 1.75vw;
  text-align: center;

  p {
    width: 50%;
    margin: auto;
    font-size: 1.25vw;
    text-align: center;
  }
`;
const MiddleText = styled.p`
  font-size: 2vw;
  line-height: 2.25vw;
  text-align: center;

  p {
    font-size: 2.5vw;
    text-align: center;
  }
`;
const LargeText = styled.p`
  font-size: 4vw;
  line-height: 4vw;
  text-align: center;

  p {
    font-size: 4vw;
    line-height: 4vw;
    text-align: center;
  }
`;

const GreenText = styled.p`
  color: #88c228;
`;

export default InfoCards;
