import {
  TwoBoxRowReverse,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';

import CompanyCultureImg from '../../../assets/imgs/group-photo-1.jpg';

function CompanyCulture() {
  return (
    <TwoBoxRowReverse>
      <TextBox>
        <p>Blurb about company culture</p>
      </TextBox>
      <ImgBox src={CompanyCultureImg} />
    </TwoBoxRowReverse>
  );
}

export default CompanyCulture;
