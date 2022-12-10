import { Helmet } from 'react-helmet';

import PageTitle from '../../components/re-usable/PageTitle';
import CookieBox from '../../components/page-components/cookie-components/CookieBox';
import FirstTextInfo from '../../components/page-components/cookie-components/FirstTextInfo';
import SecondTextInfo from '../../components/page-components/cookie-components/SecondTextInfo';
import ThirdSection from '../../components/page-components/cookie-components/ThirdSection';

import { NestedRootOther } from '../../components/re-usable/NestedRoot';
import { BodyText } from '../../components/re-usable/styles/LegalStyles';

function CookiePreferences() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | Cookie Preferences</title>
      </Helmet>
      <PageTitle>Cookie Preferences</PageTitle>
      <BodyText>
        <CookieBox />
        <FirstTextInfo />
        <SecondTextInfo />
        <ThirdSection />
      </BodyText>
    </NestedRootOther>
  );
}

export default CookiePreferences;
