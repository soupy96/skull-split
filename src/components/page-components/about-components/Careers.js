import styled from 'styled-components';
import PlayNowButt from '../../re-usable/navbar/PlayNowButt';
import { BGImage, BGImageTextBox } from '../../re-usable/styles/ContentStyles';

function Careers() {
  return (
    <BGImage>
      <BGImageTextBox>
        <H4Title>Careers</H4Title>
        <p>
          Nulla id ultricies sem, venenatis finibus mauris. Maecenas vitae neque
          aliquet, porttitor dui et, placerat arcu. Proin laoreet turpis sed
          vehicula lacinia. Praesent vitae libero id diam tincidunt bibendum nec
          sed nulla. Sed eu sodales ante. Pellentesque placerat vitae quam nec
          congue. Vestibulum non diam nisi. Pellentesque ac pulvinar metus,
          vitae viverra elit. Maecenas sagittis condimentum nibh, ac convallis
          ex elementum id. Ut vitae nisl sit amet ex consequat faucibus. Quisque
          at posuere metus. Praesent massa ligula, ullamcorper nec sem ut,
          tempor posuere nibh. Pellentesque nec libero justo.
        </p>
        <PlayNowButt href='javascript:void(0)'>Apply Now</PlayNowButt>
      </BGImageTextBox>
    </BGImage>
  );
}

const H4Title = styled.h4`
  font-size: 50px;
  line-height: normal;
  margin-bottom: 30px;
`;

export default Careers;
