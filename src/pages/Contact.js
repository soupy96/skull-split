import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import { BodyText } from '../components/re-usable/styles/LegalStyles';
import styled from 'styled-components';

function Contact() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>CoderGuides | Contact</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      <Text>Contact page is in progress</Text>
      {/* <ContactSection /> */}
    </NestedRootOther>
  );
}

const Text = styled.p`
  text-align: center;
  margin: 25% 0px;
`;

export default Contact;
