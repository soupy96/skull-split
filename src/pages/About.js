import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { NestedRootOther } from '../components/re-usable/NestedRoot';

function About() {
  return (
    // TODO: replace break tags with a margin to better space stuff out
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
