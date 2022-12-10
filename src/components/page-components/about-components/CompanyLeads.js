import {
  ProfileContainer,
  ProfileBox,
  ImgBox,
  TextBox,
} from '../../re-usable/styles/ContentStyles';

import CEO from '../../../assets/imgs/ceo.webp';
import CreativeLead from '../../../assets/imgs/creative-lead.webp';
import LeadProgrammer from '../../../assets/imgs/lead-programmer.webp';
import styled from 'styled-components';

function CompanyLeads() {
  return (
    <div>
      <H3Title>The Team</H3Title>
      <ProfileContainer>
        <LeftProfileBox>
          <ImgBox src={CEO} />
          <LeadTextBox>
            <p>Bill Gates</p>
            <p>CEO</p>
          </LeadTextBox>
        </LeftProfileBox>
        <ProfileBox>
          <ImgBox src={CreativeLead} />
          <LeadTextBox>
            <p>Joshua Berthers</p>
            <p>Creative Lead</p>
          </LeadTextBox>
        </ProfileBox>
        <ProfileBox>
          <ImgBox src={LeadProgrammer} />
          <LeadTextBox>
            <p>Sasha Bueler</p>
            <p>Lead Programmer</p>
          </LeadTextBox>
        </ProfileBox>
      </ProfileContainer>
    </div>
  );
}

const H3Title = styled.h3`
  font-size: 50px;
  line-height: normal;
`;

const LeadTextBox = styled(TextBox)`
  padding: 25px !important;

  p {
    margin: 0px !important;
  }
`;

const LeftProfileBox = styled(ProfileBox)`
  justify-content: space-evenly;

  img {
    padding: 0px 10px;
  }

  ::before {
    transform: skewX(0deg);
    bottom: 0px;
    left: 0px;
  }

  &::after {
    transform: skewY(0deg);
    top: 0px;
    left: 0px;
  }

  &:hover::before {
    transform: skewX(-45deg);
    bottom: -15px;
    left: -8px;
  }

  &:hover&::after {
    right: 0px;
    top: 8px;
    transform: skewY(-45deg);
    left: -15px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;

export default CompanyLeads;
