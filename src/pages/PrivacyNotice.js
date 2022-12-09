import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import NestedRoot from '../components/re-usable/NestedRoot';

function PrivacyNotice() {
  return (
    <NestedRoot>
      <Helmet>
        <title>Skull Split | Privacy Notice</title>
      </Helmet>
      <PageTitle>Testing 123</PageTitle>
      <Text>Privacy Notice Page in Progress</Text>
    </NestedRoot>
  );
}

const Text = styled.div`
  text-align: center;
`;

export default PrivacyNotice;
