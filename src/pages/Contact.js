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
        <ContactSection />
      </BodyText>
    </NestedRootOther>
  );
}

export default Contact;
