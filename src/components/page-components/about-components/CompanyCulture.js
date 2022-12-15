import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';

import {
  TwoBoxRowReverse,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';
import 'aos/dist/aos.css';

import CompanyCultureImg from '../../../assets/imgs/group-photo-1.webp';

function CompanyCulture() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <TwoBoxRowReverse data-aos='fade-up'>
      <TextBox>
        <H3Title>Company Culutre</H3Title>
        <p>
          Aenean at molestie tellus. Morbi viverra pellentesque tincidunt.
          Quisque dapibus mollis risus in ultricies. Cras est risus,
          pellentesque a rutrum a, bibendum at orci. Mauris quis libero
          facilisis, mattis ante quis, bibendum diam. Aenean vel tincidunt
          neque, eget ornare purus.
        </p>
        <p>
          Duis eleifend tempus erat at tincidunt. Fusce gravida elit erat, ut
          rutrum metus posuere mattis. Integer leo ipsum, molestie vitae
          facilisis quis, scelerisque eget turpis. Pellentesque vitae facilisis
          quam, vitae convallis purus. Duis maximus elit purus, vitae blandit
          metus efficitur nec. Suspendisse potenti.
        </p>
      </TextBox>
      <ImgBox src={CompanyCultureImg} />
    </TwoBoxRowReverse>
  );
}

const H3Title = styled.h3`
  font-size: 50px;
  line-height: normal;
  margin-bottom: 20px;
`;

export default CompanyCulture;
