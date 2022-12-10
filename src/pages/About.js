import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import CompanyBuilding from '../components/page-components/about-components/CompanyBuilding';
import CompanyLeads from '../components/page-components/about-components/CompanyLeads';
import CompanyCulture from '../components/page-components/about-components/CompanyCulture';
import Careers from '../components/page-components/about-components/Careers';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
import { BodyText } from '../components/re-usable/styles/LegalStyles';

function About() {
  return (
    // TODO: replace break tags with a margin to better space stuff out
    // TOOD: make mobile friendly
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <BodyText>
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
      </BodyText>
    </NestedRootOther>
  );
}

export default About;
