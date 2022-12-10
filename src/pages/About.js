import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import CompanyBuilding from '../components/page-components/about-components/CompanyBuilding';
import CompanyLeads from '../components/page-components/about-components/CompanyLeads';
import CompanyCulture from '../components/page-components/about-components/CompanyCulture';
import Careers from '../components/page-components/about-components/Careers';

import { NestedRootOther } from '../components/re-usable/NestedRoot';

function About() {
  return (
    // TODO: replace break tags with a margin to better space stuff out
    // TOOD: make mobile friendly
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <CompanyBuilding />
      <CompanyLeads />
      <CompanyCulture />
      <Careers />
    </NestedRootOther>
  );
}

const Text = styled.p`
  text-align: center;
  margin: 25% auto !important;
`;

export default About;
