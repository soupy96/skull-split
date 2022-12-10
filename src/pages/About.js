import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import CompanyBuilding from '../components/page-components/about-components/CompanyBuilding';
import CompanyLeads from '../components/page-components/about-components/CompanyLeads';
import CompanyCulture from '../components/page-components/about-components/CompanyCulture';
import Careers from '../components/page-components/about-components/Careers';

<<<<<<< HEAD
=======
import { NestedRootOther } from '../components/re-usable/NestedRoot';
>>>>>>> dev
import { BodyText } from '../components/re-usable/styles/LegalStyles';

function About() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <BodyText>
<<<<<<< HEAD
        <Text>About page in progress</Text>
=======
        <CompanyBuilding />
        <br />
        <br />
        <br />
        <br />
        <CompanyLeads />
        <br />
        <br />
        <br />
        <br />
        <CompanyCulture />
        <br />
        <br />
        <br />
        <br />
        <Careers />
>>>>>>> dev
      </BodyText>
    </NestedRootOther>
  );
}

const Text = styled.p`
  text-align: center;
  margin: 25% auto !important;
`;

export default About;
