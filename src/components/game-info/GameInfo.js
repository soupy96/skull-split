import styled from 'styled-components';
import NestedRoot from '../re-usable/NestedRoot';

function GameInfo() {
  return (
    // TODO: redraw the svg so that its longer horizontally
    <MainInfo>
      <NestedRoot>
        <svg height='75' width='505'>
          <path
            d='M10 5 L170 5 L200 30 L200 75 L40 75 L10 45 Z'
            fill='#f0ff00'
          />
          <text
            x='100'
            y='37.5'
            fill='#000000'
            dominant-baseline='middle'
            text-anchor='middle'
          >
            <BlackText>Lorem Ipsum 2077/08/14</BlackText>
          </text>
        </svg>
        <div>
          <p>Ut at eleifend mi.</p>
          <YellowText>Lorem ipsum dolor sit amet, consectetur</YellowText>
          <p>
            Hasellus vestibulum pellentesque lacinia. Ut eget faucibus nisi, nec
            mattis arcu. Etiam tincidunt leo leo, ut pretium massa mattis id.
            Donec dictum sem vel condimentum accumsan.
          </p>
          <p>
            Nulla sagittis lacinia odio, sed vestibulum ex laoreet ac. In
            tristique, sem ut tempus mattis
          </p>
        </div>
      </NestedRoot>
    </MainInfo>
  );
}

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: rgb(58, 66, 57);
  background: -moz-radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(58, 66, 57, 1) 0%,
    rgba(34, 39, 33, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a4239",endColorstr="#222721",GradientType=1);
  background-position: 0px -150px;
  padding: 200px 0px;
`;

const BlackText = styled.h2`
  color: #000000;
`;

const YellowText = styled.p`
  color: #f0ff00;
`;

export default GameInfo;
