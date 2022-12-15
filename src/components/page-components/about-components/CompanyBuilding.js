import { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';

import {
  TwoBoxRow,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';
import 'aos/dist/aos.css';

import CompanyBuildingImg from '../../../assets/imgs/company-building.webp';

function CompanyBuilding() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <TwoBoxRow data-aos='fade-up'>
      <CenterText>
        <H2Title>Skull Games Inc.</H2Title>
        <p>
          Duis in finibus massa, sit amet blandit risus. Suspendisse sed sem
          lorem. Fusce porta est id dolor cursus molestie.
        </p>
        <p>
          In varius semper eros at varius. Praesent maximus eros nec auctor
          euismod. Mauris fringilla ullamcorper augue, nec dignissim tortor
          lobortis ac.
        </p>
      </CenterText>
      <ImgBox src={CompanyBuildingImg} />
    </TwoBoxRow>
  );
}

const H2Title = styled.h2`
  font-size: 50px;
  line-height: normal;
`;

const CenterText = styled(TextBox)`
  text-align: center;
`;

export default CompanyBuilding;
