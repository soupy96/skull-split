import { Helmet } from 'react-helmet';

import NestedRoot from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import CompanyBuilding from '../assets/imgs/company-building.jpg';
import CEO from '../assets/imgs/ceo.jpg';
import CreativeLead from '../assets/imgs/creative-lead.jpg';
import LeadProgrammer from '../assets/imgs/lead-programmer.jpg';
import CompanyCulture from '../assets/imgs/group-photo-1.jpg';

import {
  BGImage,
  BGImageTextBox,
  ImgBox,
  ProfileBox,
  ProfileContainer,
  TextBox,
  TwoBoxRow,
  TwoBoxRowReverse,
} from '../components/re-usable/styles/ContentStyles';
import { BodyText } from '../components/re-usable/styles/LegalStyles';

function About() {
  return (
    // TODO: make sure imgs are proper size and in webp format
    // TODO: replace break tags with a margin to better space stuff out
    <NestedRoot>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <BodyText>
        <TwoBoxRow>
          <TextBox>
            <p>Skull Games, Inc.</p>
            <p>blurb about company with img of company building beside</p>
          </TextBox>
          <ImgBox src={CompanyBuilding} />
        </TwoBoxRow>
        <br />
        <br />
        <br />
        <br />
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
        <br />
        <br />
        <br />
        <br />
        <TwoBoxRowReverse>
          <TextBox>
            <p>Blurb about company culture</p>
          </TextBox>
          <ImgBox src={CompanyCulture} />
        </TwoBoxRowReverse>
        <br />
        <br />
        <br />
        <br />
        <BGImage>
          <BGImageTextBox>
            <p>Blurb about Careers</p>
          </BGImageTextBox>
        </BGImage>
      </BodyText>
    </NestedRoot>
  );
}

export default About;
