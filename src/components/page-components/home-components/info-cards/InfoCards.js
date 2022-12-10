import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import NestedRoot from '../../../re-usable/NestedRoot';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

function InfoCards() {
  return (
    <NestedRoot>
      <Root>
        {/* Appears on the desktop */}
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
        {/* Appears on mobile/smaller screen sizes */}
        <SwiperCustom
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlideCustom>
            <SmallText>Lorem ipsum dolor sit amet</SmallText>
            <MiddleText>Ut sit amet pretuim ex</MiddleText>
            <LargeText>
              <GreenText>$100,000,000!</GreenText>
            </LargeText>
          </SwiperSlideCustom>
          <SwiperSlideCustom>
            <LargeText>Lorem ipsum</LargeText>
            <MiddleText>
              <GreenText>Rutrum odio</GreenText>
            </MiddleText>
            <SmallText>Sit amet purus</SmallText>
          </SwiperSlideCustom>
          <SwiperSlideCustom>
            <LargeText>Vestibulum</LargeText>
            <MiddleText>Dolor accumsan laoreet</MiddleText>
            <SmallText>
              <GreenText>
                Vestibulum ultrices magna a pellentesque maximus egestat at nibh
              </GreenText>
            </SmallText>
          </SwiperSlideCustom>
        </SwiperCustom>
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
`;

const Card = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  text-transform: uppercase;
  padding: 20px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const SwiperCustom = styled(Swiper)`
  display: none;

  @media only screen and (max-width: 1200px) {
    display: flex;
    height: 300px;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    cursor: grab;
    background-color: #ffffff;

    .swiper-button-next,
    .swiper-button-prev {
      color: #88c228;
    }
  }
`;

const SwiperSlideCustom = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
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
  font-size: 30px;
  line-height: normal;
  text-align: center;

  p {
    width: 100%;
    margin: auto;
    font-size: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 1450px) {
    p {
      font-size: 25px;
    }
  }
`;

const MiddleText = styled.p`
  font-size: 45px;
  line-height: normal;
  text-align: center;

  p {
    font-size: 45px;
    text-align: center;
  }

  @media only screen and (max-width: 1450px) {
    p {
      font-size: 35px;
    }
  }
`;

const LargeText = styled.p`
  font-size: 80px;
  line-height: 70px;
  text-align: center;

  p {
    font-size: 80px;
    line-height: 70px;
    text-align: center;
  }

  @media only screen and (max-width: 1450px) {
    p {
      font-size: 65px;
    }
  }
`;

const GreenText = styled.p`
  color: #88c228;
`;

export default InfoCards;
