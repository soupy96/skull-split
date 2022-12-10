import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import ContactSection from '../components/page-components/contact-components/ContactSection';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
import { BodyText } from '../components/re-usable/styles/LegalStyles';

function Contact() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>CoderGuides | Contact</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      <BodyText>
<<<<<<< HEAD
        <Text>Contact page is in progress</Text>
=======
        <ContactSection />
>>>>>>> dev
      </BodyText>
    </NestedRootOther>
  );
}

const Text = styled.p`
  text-align: center;
  margin: 25% auto !important;
`;

export default Contact;
