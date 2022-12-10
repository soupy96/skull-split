import {
  TwoBoxRow,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';

import CompanyBuildingImg from '../../../assets/imgs/company-building.jpg';

function CompanyBuilding() {
  return (
    <TwoBoxRow>
      <TextBox>
        <p>Skull Games, Inc.</p>
        <p>blurb about company with img of company building beside</p>
      </TextBox>
      <ImgBox src={CompanyBuildingImg} />
    </TwoBoxRow>
  );
}

export default CompanyBuilding;
