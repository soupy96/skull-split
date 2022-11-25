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
  width: 28%;
  background-color: #3a3a3a;
  border-radius: 10px;
  padding: 10px;
`;

const ESRBList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 20px;
    line-height: 19px;
  }
`;

export default ESRB;
