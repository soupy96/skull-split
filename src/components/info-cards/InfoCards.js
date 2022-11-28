import styled from 'styled-components';
import NestedRoot from '../re-usable/NestedRoot';

function InfoCards() {
  return (
    // TODO: refine the overlay
    // TODO: Make the size of the cards closer to the design, more rectangle than square
    <NestedRoot>
      <Root>
        <LeftDropShadow>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Ut sit amet pretuim ex</p>
          <GreenText>$100,000,000!</GreenText>
        </LeftDropShadow>
        <MiddleDropShadow>
          <p>Lorem ipsum</p>
          <GreenText>Rutrum odio</GreenText>
          <p>Sit amet purus</p>
        </MiddleDropShadow>
        <RightDropShadow>
          <p>Vestibulum</p>
          <p>DOLOR ACCUMSAN LAOREET Dolor accumsan laoreet</p>
          <GreenText>
            Vestibulum ultrices magna a pellentesque maximus egestat at nibh
          </GreenText>
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
