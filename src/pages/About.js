import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import { BodyText } from '../components/re-usable/styles/LegalStyles';

function About() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <BodyText>
        <Text>About page in progress</Text>
      </BodyText>
    </NestedRootOther>
  );
}

const Text = styled.p`
  text-align: center;
  margin: 25% auto !important;
`;

export default About;
