import styled from 'styled-components';

import NestedRoot from '../re-usable/NestedRoot';

function Updates() {
  return (
    <Root>
      <NestedRoot>
        <UpdatesTitle>Updates</UpdatesTitle>
        <GridContainer>
          <div>Testing 123</div>
          <div>Testing 123</div>
          <div>Testing 123</div>
          <div>Testing 123</div>
          <div>Testing 123</div>
        </GridContainer>
      </NestedRoot>
    </Root>
  );
}

const Root = styled.div`
  background-color: #ffffff;
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
`;

export default Updates;
