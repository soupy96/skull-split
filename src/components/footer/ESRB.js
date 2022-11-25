import styled from 'styled-components';

import ESRBImg from './../../assets/imgs/na-esrb.png';

function ESRB() {
  return (
    <Root>
      <img alt='ESRB Teen Rating' src={ESRBImg} />
      <ESRBList>
        <p>Blood</p>
        <p>Language</p>
        <p>Violence</p>
        <p>Users Interact</p>
        <p>In-Game Purchases</p>
      </ESRBList>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ESRBList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default ESRB;
