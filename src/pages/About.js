import { Helmet } from 'react-helmet';

import Careers from '../components/page-components/about-components/Careers';
import CompanyCulture from '../components/page-components/about-components/CompanyCulture';
import CompanyLeads from '../components/page-components/about-components/CompanyLeads';
import CompanyBuilding from '../components/page-components/about-components/CompanyBuilding';
import PageTitle from '../components/re-usable/PageTitle';

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

export default About;
