import { Helmet } from 'react-helmet';

import PageTitle from '../../components/re-usable/PageTitle';
import FirstSection from '../../components/page-components/privacy-components/FirstSection';
import TableOfContents from '../../components/page-components/privacy-components/TableOfContent';
import MainPrivacyPoints from '../../components/page-components/privacy-components/MainPrivacyPoints';

import { NestedRootOther } from '../../components/re-usable/NestedRoot';
import { BodyText } from '../../components/re-usable/styles/LegalStyles';

function PrivacyNotice() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | Privacy Notice</title>
      </Helmet>
      <PageTitle id='top'>Privacy Notice</PageTitle>
      <BodyText>
        <FirstSection />
        <TableOfContents />
        <MainPrivacyPoints />
      </BodyText>
    </NestedRootOther>
  );
}

export default PrivacyNotice;
