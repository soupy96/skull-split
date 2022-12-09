import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function TermsOfService() {
  return (
    <div>
      <Helmet>
        <title>Skull Split | Terms Of Service</title>
      </Helmet>
      <Text>Terms of Service Page in Progress</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default TermsOfService;
