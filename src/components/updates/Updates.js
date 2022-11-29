import styled from 'styled-components';

import NestedRoot from '../re-usable/NestedRoot';

function Updates() {
  return (
    <Root>
      <NestedRoot>
        <InnerRoot>
          <UpdatesTitle>Updates</UpdatesTitle>
          <GridContainer>
            <GridBox1>Testing 1</GridBox1>
            <GridBox2>Testing 2</GridBox2>
            <GridBox3>Testing 3</GridBox3>
            <GridBox4>Testing 4</GridBox4>
            <GridBox5>Testing 5</GridBox5>
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

  div {
    background-color: red;
  }
`;

const GridBox1 = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

const GridBox2 = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

const GridBox3 = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 3;
`;

const GridBox4 = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const GridBox5 = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
`;

export default Updates;
