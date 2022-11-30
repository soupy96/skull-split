import styled from 'styled-components';

import NestedRoot from '../re-usable/NestedRoot';

import gridImg1 from './../../assets/imgs/grid-1.jpg';
import gridImg2 from './../../assets/imgs/grid-2.jpg';
import gridImg3 from './../../assets/imgs/grid-3.jpg';
import gridImg4 from './../../assets/imgs/grid-4.jpg';
import gridImg5 from './../../assets/imgs/grid-5.jpg';

function Updates() {
  return (
    // TODO: make grid 2 column on smaller screen rather than 3
    <Root>
      <NestedRoot>
        <InnerRoot>
          <UpdatesTitle>Updates</UpdatesTitle>
          <GridContainer>
            <GridBox1>
              <p>Phasellus ipsum nisl, convallis nec</p>
              <p>38 Minutes Ago</p>
            </GridBox1>
            <GridBox2>
              <p>Suspendisse accumsan et ante sed</p>
              <p>17 Minutes Ago</p>
            </GridBox2>
            <GridBox3>
              <p>Lorem Ipsum Lorem Ipsum Lorem</p>
              <p>46 Minutes Ago</p>
            </GridBox3>
            <GridBox4>
              <p>Lorem Ipsum Lorem Ipsum Lorem</p>
              <p>6 Minutes Ago</p>
            </GridBox4>
            <GridBox5>
              <p>Lorem Ipsum Lorem Ipsum Lorem</p>
              <p>29 Minutes Ago</p>
            </GridBox5>
          </GridContainer>
        </InnerRoot>
      </NestedRoot>
    </Root>
  );
}

const Root = styled.div`
  background-color: #ffffff;
`;

const InnerRoot = styled.div`
  margin: 100px 0px 150px 0px;
`;

const UpdatesTitle = styled.h3`
  font-size: 50px;
  line-height: normal;
  text-transform: capitalize;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 330px;
  grid-gap: 40px;
  width: 100%;

  div {
    border-radius: 15px;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: #ffffff;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      height: 400px;
    }
  }
`;

const GridBox1 = styled.div`
  width: 100%;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${gridImg1});

  p {
    transition: all 0.5s ease-in-out;
  }

  &:hover p {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

const GridBox2 = styled.div`
  width: 100%;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${gridImg2});

  p {
    transition: all 0.5s ease-in-out;
  }

  &:hover p {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

const GridBox3 = styled.div`
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${gridImg3});

  p {
    transition: all 0.5s ease-in-out;
  }

  &:hover p {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const GridBox4 = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${gridImg4});

  p {
    transition: all 0.5s ease-in-out;
  }

  &:hover p {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

const GridBox5 = styled.div`
  width: 100%;
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${gridImg5});

  p {
    transition: all 0.5s ease-in-out;
  }

  &:hover p {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

export default Updates;
