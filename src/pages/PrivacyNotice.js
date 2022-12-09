import styled from 'styled-components';

import PageTitle from '../components/re-usable/PageTitle';
import NestedRoot from '../components/re-usable/NestedRoot';

function PrivacyNotice() {
  return (
    <NestedRoot>
      <PageTitle>Testing 123</PageTitle>
      <Text>Privacy Notice Page in Progress</Text>
    </NestedRoot>
  );
}

const Text = styled.div`
  text-align: center;
`;

export default PrivacyNotice;
