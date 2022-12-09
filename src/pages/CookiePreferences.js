import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function CookiePreferences() {
  return (
    <div>
      <Helmet>
        <title>Skull Split | Cookie Preferences</title>
      </Helmet>
      <Text>Cookie Preferences Page in Progress</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default CookiePreferences;
