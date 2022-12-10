import { Helmet } from 'react-helmet';

import PageTitle from '../../components/re-usable/PageTitle';
import FirstSection from '../../components/page-components/terms-components/FirstSection';
import Eligibilty from '../../components/page-components/terms-components/Eligibility';
import AllCaps from '../../components/page-components/terms-components/AllCaps';

import { BodyText } from '../../components/re-usable/styles/LegalStyles';
import { NestedRootOther } from '../../components/re-usable/NestedRoot';

function TermsOfService() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | Terms Of Service</title>
      </Helmet>
      <PageTitle>Terms of Service</PageTitle>
      <BodyText>
        <FirstSection />
        <Eligibilty />
        <AllCaps />
      </BodyText>
    </NestedRootOther>
  );
}

export default TermsOfService;
