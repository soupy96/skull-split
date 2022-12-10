import styled from 'styled-components';

import {
  TwoBoxRowReverse,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';

import CompanyCultureImg from '../../../assets/imgs/group-photo-1.webp';

function CompanyCulture() {
  return (
    <TwoBoxRowReverse>
      <TextBox>
        <H3Title>Company Culutre</H3Title>
        <p>
          Aenean at molestie tellus. Morbi viverra pellentesque tincidunt.
          Quisque dapibus mollis risus in ultricies. Cras est risus,
          pellentesque a rutrum a, bibendum at orci. Mauris quis libero
          facilisis, mattis ante quis, bibendum diam. Aenean vel tincidunt
          neque, eget ornare purus. Pellentesque ante quam, cursus sed mattis
          at, rutrum ac dui. Nullam aliquet accumsan erat, in volutpat mauris
          porttitor at. Fusce ultrices sapien vestibulum arcu tempor, eget
          lobortis dolor mollis. Nullam sodales molestie auctor. Suspendisse et
          auctor ex. Nullam consequat rhoncus ligula eget consequat.
          Pellentesque neque enim, fermentum in ligula sit amet, vulputate
          vehicula enim.
        </p>
        <p>
          Duis eleifend tempus erat at tincidunt. Fusce gravida elit erat, ut
          rutrum metus posuere mattis. Integer leo ipsum, molestie vitae
          facilisis quis, scelerisque eget turpis. Pellentesque vitae facilisis
          quam, vitae convallis purus. Duis maximus elit purus, vitae blandit
          metus efficitur nec. Suspendisse potenti. Cras tempus risus ut purus
          rhoncus, ac efficitur justo dapibus. Etiam gravida dolor eu justo
          auctor dapibus.
        </p>
      </TextBox>
      <ImgBox src={CompanyCultureImg} />
    </TwoBoxRowReverse>
  );
}

const H3Title = styled.h3`
  font-size: 50px;
  line-height: normal;
`;

export default CompanyCulture;
