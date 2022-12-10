import {
  ProfileContainer,
  ProfileBox,
  ImgBox,
  TextBox,
} from '../../re-usable/styles/ContentStyles';

import CEO from '../../../assets/imgs/ceo.jpg';
import CreativeLead from '../../../assets/imgs/creative-lead.jpg';
import LeadProgrammer from '../../../assets/imgs/lead-programmer.jpg';

function CompanyLeads() {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ImgBox src={CEO} />
        <TextBox>
          <p>CEO with img of CEO</p>
        </TextBox>
      </ProfileBox>
      <ProfileBox>
        <ImgBox src={CreativeLead} />
        <TextBox>
          <p>Creative Lead with img of Creative Lead</p>
        </TextBox>
      </ProfileBox>
      <ProfileBox>
        <ImgBox src={LeadProgrammer} />
        <TextBox>
          <p>Lead Programmer with img of Lead Programmer</p>
        </TextBox>
      </ProfileBox>
    </ProfileContainer>
  );
}

export default CompanyLeads;
