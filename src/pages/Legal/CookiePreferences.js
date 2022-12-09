import { Helmet } from 'react-helmet';

import NestedRoot from '../../components/re-usable/NestedRoot';
import PageTitle from '../../components/re-usable/PageTitle';

function CookiePreferences() {
  return (
    <NestedRoot>
      <Helmet>
        <title>Skull Split | Cookie Preferences</title>
      </Helmet>
      <PageTitle>Cookie Preferences</PageTitle>
    </NestedRoot>
  );
}

export default CookiePreferences;
