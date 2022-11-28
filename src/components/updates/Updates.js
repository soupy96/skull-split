import styled from 'styled-components';

import NestedRoot from '../re-usable/NestedRoot';

function Updates() {
  return (
    <Root>
      <NestedRoot>
        <h3>Updates</h3>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </NestedRoot>
    </Root>
  );
}

const Root = styled.div`
  background-color: #ffffff;
`;

export default Updates;
